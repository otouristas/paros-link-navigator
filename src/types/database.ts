export interface Database {
  public: {
    Tables: {
      cars: {
        Row: Car;
        Insert: Omit<Car, 'created_at'>;
        Update: Partial<Omit<Car, 'id'>>;
      };
      agencies: {
        Row: Agency;
      };
      islands: {
        Row: Island;
      };
    };
  };
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price_per_day: number;
  transmission: 'Automatic' | 'Manual';
  fuel_type: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  seats: number;
  description: string;
  features: string[];
  images: string[];
  agency: string; // Foreign key to agencies table
  island: string; // Foreign key to islands table
  category?: string; // economy, family, suv, jeep, scooter, atv, luxury
  extras?: string[];
  status?: string;
  type: 'Car' | 'ATV / QUAD' | 'Motorbike';
}

export interface Agency {
  id: string;
  name: string;
}

export interface Island {
  id: string;
  name: string;
}

export interface FleetFilters {
  category?: string;
  type?: Car['type'];
  transmission?: Car['transmission'];
  minPrice?: number;
  maxPrice?: number;
  minSeats?: number;
}
