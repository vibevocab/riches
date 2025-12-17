import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Upload, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { supabase } from '../lib/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

interface FounderRegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  txHash: string;
  amount: number;
  tier: 'VIP' | 'GOD';
  onSuccess: () => void;
}

export const FounderRegistrationDialog: React.FC<FounderRegistrationDialogProps> = ({
  open,
  onOpenChange,
  txHash,
  amount,
  tier,
  onSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uploadImageToSupabase = async (file: File): Promise<string | null> => {
    try {
      // Check if Supabase is configured
      if (!supabase) {
        // Fallback: convert to base64 for now (temporary solution)
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(file);
        });
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${txHash}-${Date.now()}.${fileExt}`;
      const filePath = `founders/${fileName}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('founders')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('founders')
        .getPublicUrl(filePath);

      return urlData.publicUrl;
    } catch (error: any) {
      console.error('Image upload error:', error);
      // Fallback to base64 if Supabase fails
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!imageFile) {
      toast.error('Please upload an image');
      return;
    }

    setUploading(true);

    try {
      // Upload image first
      const imageUrl = await uploadImageToSupabase(imageFile);
      
      if (!imageUrl) {
        setUploading(false);
        return;
      }

      // Check if Supabase is configured
      if (!supabase || !supabaseUrl || !supabaseAnonKey) {
        // Fallback: store in localStorage for demo (temporary)
        const founders = JSON.parse(localStorage.getItem('founders') || '[]');
        const vipCount = founders.filter((f: any) => f.tier === 'VIP').length;
        const godCount = founders.filter((f: any) => f.tier === 'GOD').length;
        
        const slotNumber = tier === 'VIP' 
          ? vipCount + 1
          : 26 + godCount;

        if (tier === 'VIP' && vipCount >= 25) {
          toast.error('VIP slots are full!');
          setUploading(false);
          return;
        }
        if (tier === 'GOD' && godCount >= 50) {
          toast.error('GOD MODE slots are full!');
          setUploading(false);
          return;
        }

        founders.push({
          id: Date.now(),
          username: username.trim(),
          email: email.trim(),
          image_url: imageUrl,
          transaction_hash: txHash,
          amount: amount,
          tier: tier,
          slot_number: slotNumber,
          created_at: new Date().toISOString(),
        });
        localStorage.setItem('founders', JSON.stringify(founders));
        toast.success('Founder registered! (Using local storage - configure Supabase for persistence)');
      } else {
        // Get current founder count to assign slot number
        const { count: vipCount } = await supabase
          .from('founders')
          .select('*', { count: 'exact', head: true })
          .eq('tier', 'VIP');
        
        const { count: godCount } = await supabase
          .from('founders')
          .select('*', { count: 'exact', head: true })
          .eq('tier', 'GOD');

        // Calculate slot number (VIP: 1-25, GOD: 26-75)
        const slotNumber = tier === 'VIP' 
          ? (vipCount || 0) + 1
          : 26 + (godCount || 0);

        // Check if slots are available
        if (tier === 'VIP' && (vipCount || 0) >= 25) {
          toast.error('VIP slots are full!');
          setUploading(false);
          return;
        }
        if (tier === 'GOD' && (godCount || 0) >= 50) {
          toast.error('GOD MODE slots are full!');
          setUploading(false);
          return;
        }

        // Save founder data to Supabase
        const { error: insertError } = await supabase
          .from('founders')
          .insert({
            username: username.trim(),
            email: email.trim(),
            image_url: imageUrl,
            transaction_hash: txHash,
            amount: amount,
            tier: tier,
            slot_number: slotNumber,
            created_at: new Date().toISOString(),
          });

        if (insertError) {
          throw insertError;
        }
      }

      toast.success('Welcome to the Wall of Warriors! Your spot has been secured.');
      
      // Trigger refresh event for Wall of Warriors
      window.dispatchEvent(new CustomEvent('founder-registered'));
      
      onSuccess();
      onOpenChange(false);
      
      // Reset form
      setUsername('');
      setEmail('');
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Failed to complete registration. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Claim Your Spot on the Wall
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Complete your founder registration to join the Wall of Warriors
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-cyan-400 font-bold uppercase text-xs tracking-widest">
              Username *
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your platform username"
              className="bg-black border-zinc-700 text-white"
              maxLength={20}
              required
            />
            <p className="text-xs text-gray-500">This will appear on the Wall of Warriors</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-cyan-400 font-bold uppercase text-xs tracking-widest">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-black border-zinc-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-cyan-400 font-bold uppercase text-xs tracking-widest">
              Profile Image *
            </Label>
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 rounded-full object-cover border-2 border-cyan-500/50 mx-auto"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-0 right-0 bg-red-600 hover:bg-red-700 rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-zinc-700 rounded-lg p-8 text-center cursor-pointer hover:border-cyan-500 transition-colors"
              >
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-400">Click to upload image</p>
                <p className="text-xs text-gray-500 mt-1">Max 5MB, JPG/PNG</p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>

          <div className="p-4 bg-zinc-950/50 border border-zinc-700 rounded-lg">
            <p className="text-xs text-gray-400 mb-2">Transaction Details:</p>
            <p className="text-sm text-gray-300 font-mono break-all">{txHash}</p>
            <p className="text-xs text-cyan-400 mt-2">
              Tier: <span className="font-bold">{tier}</span> - {amount} SOL
            </p>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={uploading}
              className="border-zinc-700 text-gray-300 hover:bg-zinc-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={uploading || !username.trim() || !email.trim() || !imageFile}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                'Claim My Spot'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

