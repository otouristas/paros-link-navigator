-- ========================================
-- SUPABASE SETUP SQL FOR FLEET MANAGEMENT
-- ========================================
-- Run this in your Supabase SQL Editor
-- ========================================

-- Step 1: Create the cars table
CREATE TABLE IF NOT EXISTS public.cars (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    agency_name TEXT NOT NULL,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('economy', 'family', 'suv', 'jeep', 'scooter', 'atv', 'luxury')),
    type TEXT NOT NULL CHECK (type IN ('car', 'scooter', 'atv', 'bike')),
    price_per_day NUMERIC NOT NULL,
    seats INTEGER NOT NULL,
    transmission TEXT NOT NULL CHECK (transmission IN ('manual', 'automatic')),
    fuel_type TEXT,
    doors INTEGER,
    engine_size TEXT,
    features TEXT[] NOT NULL DEFAULT '{}',
    image_url TEXT NOT NULL,
    images TEXT[],
    description TEXT NOT NULL,
    available BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE
);

-- Step 2: Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_cars_agency_available 
ON public.cars(agency_name, available);

CREATE INDEX IF NOT EXISTS idx_cars_category 
ON public.cars(category);

CREATE INDEX IF NOT EXISTS idx_cars_type 
ON public.cars(type);

-- Step 3: Enable Row Level Security (RLS)
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;

-- Step 4: Create policy to allow public read access
CREATE POLICY "Allow public read access to cars"
ON public.cars
FOR SELECT
TO anon, authenticated
USING (true);

-- Step 5: Insert sample vehicles
INSERT INTO public.cars (
    agency_name, make, model, year, category, type,
    price_per_day, seats, transmission, fuel_type, doors,
    features, image_url, description, available
) VALUES
-- Economy Cars
(
    'aggelos rentals',
    'Toyota',
    'Aygo',
    2023,
    'economy',
    'car',
    35,
    4,
    'manual',
    'petrol',
    3,
    ARRAY['Air Conditioning', 'Bluetooth', 'USB Port', 'Unlimited Mileage', 'Full Insurance'],
    '/src/assets/fleet/toyota-aygo.jpg',
    'Perfect compact car for couples exploring Paros. Excellent fuel economy and easy to park.',
    true
),
(
    'aggelos rentals',
    'Fiat',
    'Panda',
    2023,
    'economy',
    'car',
    40,
    4,
    'manual',
    'petrol',
    5,
    ARRAY['Air Conditioning', 'Power Steering', 'CD Player', 'Unlimited Mileage', 'Full Insurance'],
    '/src/assets/fleet/fiat-panda.jpeg',
    'Spacious interior with great fuel efficiency. Perfect for families on a budget.',
    true
),
(
    'aggelos rentals',
    'Suzuki',
    'Swift',
    2023,
    'economy',
    'car',
    45,
    5,
    'manual',
    'petrol',
    5,
    ARRAY['Air Conditioning', 'Bluetooth', 'Reverse Camera', 'Unlimited Mileage', 'Full Insurance'],
    '/src/assets/fleet/suzuki-swift-2010-2015.jpg',
    'Sporty and fun to drive. Great for young couples exploring the island.',
    true
),

-- Family Cars
(
    'aggelos rentals',
    'Citroen',
    'C3',
    2023,
    'family',
    'car',
    55,
    5,
    'automatic',
    'petrol',
    5,
    ARRAY['Air Conditioning', 'Bluetooth', 'Parking Sensors', 'Child Seats Available', 'Unlimited Mileage', 'Full Insurance'],
    '/src/assets/fleet/citroen-c3jpg.jpg',
    'Comfortable family car with spacious interior and modern features.',
    true
),

-- SUVs
(
    'aggelos rentals',
    'Suzuki',
    'Jimny',
    2023,
    'jeep',
    'car',
    80,
    4,
    'manual',
    'petrol',
    3,
    ARRAY['4x4 Capability', 'Air Conditioning', 'Off-Road Ready', 'Beach Access', 'Unlimited Mileage', 'Full Insurance'],
    '/src/assets/fleet/Suzuki-Jimny-Paros-rent-a-car.webp',
    'Iconic 4x4 perfect for off-road adventures and reaching hidden beaches.',
    true
),

-- Scooters
(
    'aggelos rentals',
    'Liberty',
    '125cc',
    2023,
    'scooter',
    'scooter',
    25,
    2,
    'automatic',
    'petrol',
    0,
    ARRAY['Helmet Included', 'Storage Compartment', 'Fuel Efficient', 'Easy to Ride', 'Full Insurance'],
    '/src/assets/fleet/liberty-125.webp',
    'Popular 125cc scooter perfect for couples. Easy to ride and park anywhere.',
    true
),
(
    'aggelos rentals',
    'SYM',
    'Jet 50cc',
    2023,
    'scooter',
    'scooter',
    20,
    2,
    'automatic',
    'petrol',
    0,
    ARRAY['Helmet Included', 'Storage Compartment', 'No Motorcycle License Required', 'Fuel Efficient', 'Full Insurance'],
    '/src/assets/fleet/sym-jet.jpg',
    'Perfect for beginners. No motorcycle license needed for 50cc scooters.',
    true
),

-- ATVs
(
    'aggelos rentals',
    'CF Moto',
    '520cc ATV',
    2023,
    'atv',
    'atv',
    60,
    2,
    'automatic',
    'petrol',
    0,
    ARRAY['Safety Helmet', 'Safety Gear', 'Off-Road Capable', 'Beach Access', 'Full Insurance'],
    '/src/assets/fleet/ATV CF Moto 520cc.jpg',
    'Powerful ATV for serious off-road adventures. Reach beaches regular cars cannot access.',
    true
),
(
    'aggelos rentals',
    'Buggy',
    '500cc',
    2023,
    'atv',
    'atv',
    65,
    2,
    'automatic',
    'petrol',
    0,
    ARRAY['Roll Cage', 'Safety Belts', 'Helmets', 'Off-Road Tires', 'Full Insurance'],
    '/src/assets/fleet/Buggy 500cc.jpg',
    'Fun and safe buggy with roll cage protection. Perfect for adventurous couples.',
    true
)

ON CONFLICT DO NOTHING;

-- Step 6: Grant permissions
GRANT SELECT ON public.cars TO anon;
GRANT SELECT ON public.cars TO authenticated;

-- ========================================
-- SETUP COMPLETE!
-- ========================================
-- Now you can:
-- 1. View your fleet at /fleet
-- 2. Add more vehicles using INSERT statements
-- 3. Update image_url to match your photos
-- ========================================

