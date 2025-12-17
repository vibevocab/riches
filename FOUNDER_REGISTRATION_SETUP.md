# Founder Registration System Setup

## Overview

This system allows founders to register after payment verification, storing their information in Supabase and displaying them on the Wall of Warriors.

## Features

✅ **Payment Verification** - Verifies SOL transactions on-chain  
✅ **Registration Dialog** - Popup form for username, email, and image upload  
✅ **Supabase Integration** - Stores founder data in database  
✅ **Real-time Updates** - Wall of Warriors updates automatically  
✅ **Slot Management** - Tracks 25 VIP and 50 GOD MODE slots  
✅ **Image Storage** - Uploads images to Supabase Storage  

## Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a project
2. Note your project URL and anon key

### 2. Create Database Table

Run this SQL in Supabase SQL Editor:

```sql
-- Create founders table
CREATE TABLE IF NOT EXISTS founders (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  image_url TEXT,
  transaction_hash VARCHAR(255) UNIQUE NOT NULL,
  amount DECIMAL(10, 9) NOT NULL,
  tier VARCHAR(10) CHECK (tier IN ('VIP', 'GOD')) NOT NULL,
  slot_number INTEGER CHECK (slot_number >= 1 AND slot_number <= 75),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_founders_slot_number ON founders(slot_number);
CREATE INDEX IF NOT EXISTS idx_founders_tier ON founders(tier);
CREATE INDEX IF NOT EXISTS idx_founders_transaction_hash ON founders(transaction_hash);

-- Enable RLS
ALTER TABLE founders ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read access" ON founders
FOR SELECT USING (true);

-- Allow insert for registration
CREATE POLICY "Allow insert for registration" ON founders
FOR INSERT WITH CHECK (true);
```

### 3. Create Storage Bucket

1. Go to Supabase Dashboard → Storage
2. Click "New bucket"
3. Name: `founders`
4. Set to **Public**
5. Create bucket

### 4. Configure Storage Policies

Run this SQL:

```sql
-- Allow public read
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'founders');

-- Allow authenticated uploads (or adjust as needed)
CREATE POLICY "Authenticated users can upload" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'founders');
```

### 5. Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 6. Restart Development Server

After adding environment variables:
```bash
npm run dev
```

## How It Works

1. **Payment Verification**
   - User verifies transaction hash
   - System checks transaction on Solana blockchain
   - Determines tier (VIP or GOD) based on amount

2. **Registration Dialog**
   - Automatically opens when payment is verified
   - User enters:
     - Username (for Wall of Warriors)
     - Email address
     - Profile image

3. **Data Storage**
   - Image uploaded to Supabase Storage
   - Founder data saved to database
   - Slot number automatically assigned:
     - VIP: Slots 1-25
     - GOD: Slots 26-75

4. **Wall Update**
   - SecureLegacy component fetches founders
   - Real-time subscription updates when new founder registers
   - Displays founders with images and usernames

## Slot Allocation

- **VIP Tier**: First 25 slots (1-25)
- **GOD Tier**: Next 50 slots (26-75)
- **Total**: 75 slots

The system prevents registration if slots are full for a tier.

## Fallback Mode

If Supabase is not configured, the system uses localStorage as a fallback. This allows testing without Supabase setup, but data will be lost on page refresh.

## Testing

1. Verify a transaction (use a test transaction hash)
2. Registration dialog should appear
3. Fill in the form and submit
4. Check Wall of Warriors for your entry
5. Verify in Supabase dashboard that data was saved

