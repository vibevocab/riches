# Supabase Setup for Founders Wall

## Database Table Creation

Run this SQL in your Supabase SQL Editor to create the founders table:

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

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_founders_slot_number ON founders(slot_number);
CREATE INDEX IF NOT EXISTS idx_founders_tier ON founders(tier);
CREATE INDEX IF NOT EXISTS idx_founders_transaction_hash ON founders(transaction_hash);

-- Create storage bucket for founder images
INSERT INTO storage.buckets (id, name, public)
VALUES ('founders', 'founders', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies (allow public read, authenticated write)
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'founders');

CREATE POLICY "Authenticated users can upload" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'founders');

-- Enable Row Level Security
ALTER TABLE founders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public read access" ON founders
FOR SELECT USING (true);

-- Create policy to allow insert (for registration)
CREATE POLICY "Allow insert for registration" ON founders
FOR INSERT WITH CHECK (true);
```

## Storage Bucket Setup

1. Go to Supabase Dashboard → Storage
2. Create a new bucket named `founders`
3. Set it to **Public**
4. Configure policies:
   - **SELECT**: Public access
   - **INSERT**: Authenticated users (or adjust based on your needs)

## Environment Variables

Add these to your `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Slot Allocation Logic

- **VIP Tier**: Slots 1-25 (first 25 VIP founders)
- **GOD Tier**: Slots 26-75 (first 50 GOD founders)
- Total: 75 slots

The system automatically assigns slot numbers based on tier and order of registration.

