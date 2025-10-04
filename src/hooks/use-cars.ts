import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Car, FleetFilters } from '@/types/database';
import { getVehicleImages } from '@/data/fleet-images';

interface UseCarsOptions {
  filters?: FleetFilters;
  enabled?: boolean;
}

export function useCars({ filters, enabled = true }: UseCarsOptions = {}) {
  return useQuery({
    queryKey: ['cars', filters],
    queryFn: async () => {
      try {
        // Build the query
        let query = supabase
          .from('cars')
          .select('*')
          .eq('agency', 'aggelos-rentals')
          .order('category', { ascending: true })
          .order('price_per_day', { ascending: true });

        // Apply user filters
        if (filters?.category) {
          query = query.eq('category', filters.category);
        }

        if (filters?.type) {
          query = query.eq('type', filters.type);
        }

        if (filters?.transmission) {
          query = query.eq('transmission', filters.transmission);
        }

        if (filters?.minPrice) {
          query = query.gte('price_per_day', filters.minPrice);
        }

        if (filters?.maxPrice) {
          query = query.lte('price_per_day', filters.maxPrice);
        }

        if (filters?.minSeats) {
          query = query.gte('seats', filters.minSeats);
        }

        const { data, error } = await query;

        if (error) {
          console.error('Supabase Error Details:', error);
          throw new Error(`Failed to fetch cars: ${error.message}`);
        }

        // Replace Supabase images with local assets
        const carsWithLocalImages = (data || []).map(car => ({
          ...car,
          images: getVehicleImages(car),
        }));

        return carsWithLocalImages as Car[];
      } catch (err) {
        console.error('Failed to fetch cars:', err);
        throw err;
      }
    },
    enabled,
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCar(carId: string) {
  return useQuery({
    queryKey: ['car', carId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('id', carId)
        .single();

      if (error) {
        console.error('Supabase Error Details:', error);
        throw new Error(`Failed to fetch car: ${error.message}`);
      }

      // Replace Supabase images with local assets
      const carWithLocalImages = {
        ...data,
        images: getVehicleImages(data),
      };

      return carWithLocalImages as Car;
    },
    retry: 1,
  });
}
