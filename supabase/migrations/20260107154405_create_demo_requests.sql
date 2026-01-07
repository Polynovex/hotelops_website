/*
  # Create Demo Requests and Contact Submissions Tables

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact person's name
      - `email` (text, required) - Contact email
      - `phone` (text, optional) - Phone number
      - `company_name` (text, required) - Hotel/company name
      - `hotel_size` (text, optional) - Small, Medium, or Enterprise
      - `message` (text, optional) - Additional details
      - `created_at` (timestamptz) - Submission timestamp
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `subject` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamptz) - Submission timestamp
  
  2. Security
    - Enable RLS on both tables
    - Allow public inserts only (for form submissions)
    - No public reads (admin dashboard will need separate policies)
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  hotel_size text,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public demo request submissions"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);