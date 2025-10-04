/**
 * Local fleet image mapping
 * Maps vehicle identifiers to lovable-uploads paths
 */

interface FleetImageMap {
  [key: string]: string[];
}

export const fleetImages: FleetImageMap = {
  // Toyota
  'toyota-aygo': ['/lovable-uploads/toyota-aygo.jpg'],
  'aygo': ['/lovable-uploads/toyota-aygo.jpg'],
  
  // Suzuki
  'suzuki-swift': ['/lovable-uploads/suzuki-swift-2010-2015.jpg'],
  'swift': ['/lovable-uploads/suzuki-swift-2010-2015.jpg'],
  'suzuki-celerio': ['/lovable-uploads/suzuki-celerio.jpg'],
  'celerio': ['/lovable-uploads/suzuki-celerio.jpg'],
  'suzuki-jimny': ['/lovable-uploads/suzuki-jimny-sifnos.jpeg', '/lovable-uploads/Suzuki-Jimny-Paros-rent-a-car.webp'],
  'jimny': ['/lovable-uploads/suzuki-jimny-sifnos.jpeg', '/lovable-uploads/Suzuki-Jimny-Paros-rent-a-car.webp'],
  'suzuki-alto': ['/lovable-uploads/paros-rent-a-car-suzuki-alto.jpg'],
  'alto': ['/lovable-uploads/paros-rent-a-car-suzuki-alto.jpg'],
  'suzuki-ignis': ['/lovable-uploads/Suzuki-Ignis-1200.jpg'],
  'ignis': ['/lovable-uploads/Suzuki-Ignis-1200.jpg'],
  
  // Skoda
  'skoda-citigo': ['/lovable-uploads/skoda-citigo.jpg'],
  'citigo': ['/lovable-uploads/skoda-citigo.jpg'],
  'skoda-fabia': ['/lovable-uploads/skoda-fabia.webp'],
  'fabia': ['/lovable-uploads/skoda-fabia.webp'],
  'skoda-kamiq': ['/lovable-uploads/skoda-kamiq.webp'],
  'kamiq': ['/lovable-uploads/skoda-kamiq.webp'],
  
  // Peugeot
  'peugeot-301': ['/lovable-uploads/peugeot-301-sedan.jpg'],
  '301': ['/lovable-uploads/peugeot-301-sedan.jpg'],
  'peugeot-208': ['/lovable-uploads/peuegot-208.jpeg'],
  '208': ['/lovable-uploads/peuegot-208.jpeg'],
  'peugeot-108': ['/lovable-uploads/Peugeot108.webp'],
  '108': ['/lovable-uploads/Peugeot108.webp'],
  
  // Nissan
  'nissan-micra': ['/lovable-uploads/nissan-micra.jpg'],
  'micra': ['/lovable-uploads/nissan-micra.jpg'],
  
  // MG
  'mg-zs': ['/lovable-uploads/mg-zs.jpg'],
  'zs': ['/lovable-uploads/mg-zs.jpg'],
  
  // Mercedes
  'mercedes-glb': ['/lovable-uploads/mercedes-glb.png'],
  'glb': ['/lovable-uploads/mercedes-glb.png'],
  
  // Kia
  'kia-picanto': ['/lovable-uploads/kia-picanto.png'],
  'picanto': ['/lovable-uploads/kia-picanto.png'],
  
  // Jeep
  'jeep-renegade': ['/lovable-uploads/jeep-renegade.png'],
  'renegade': ['/lovable-uploads/jeep-renegade.png'],
  
  // Hyundai
  'hyundai-i10': ['/lovable-uploads/huyndai-i10.png'],
  'i10': ['/lovable-uploads/huyndai-i10.png'],
  
  // Fiat
  'fiat-tipo': ['/lovable-uploads/fiat-tipo.png'],
  'tipo': ['/lovable-uploads/fiat-tipo.png'],
  'fiat-panda': ['/lovable-uploads/fiat-panda.jpeg'],
  'panda': ['/lovable-uploads/fiat-panda.jpeg'],
  'fiat-doblo': ['/lovable-uploads/fiat-doblo-7.jpg'],
  'doblo': ['/lovable-uploads/fiat-doblo-7.jpg'],
  'fiat-500-cabrio': ['/lovable-uploads/fiat-500-cabrio.jpg'],
  'fiat-500': ['/lovable-uploads/fiat-500.png', '/lovable-uploads/fiat-500-cabrio.jpg'],
  '500': ['/lovable-uploads/fiat-500.png'],
  
  // Citroen
  'citroen-c4': ['/lovable-uploads/citroen-c4.jpg'],
  'c4': ['/lovable-uploads/citroen-c4.jpg'],
  'citroen-c3': ['/lovable-uploads/citroen-c3jpg.jpg'],
  'c3': ['/lovable-uploads/citroen-c3jpg.jpg'],
  'citroen-c3-aircross': ['/lovable-uploads/c3-aircross.webp'],
  'c3-aircross': ['/lovable-uploads/c3-aircross.webp'],
  'citroen-c1': ['/lovable-uploads/Citroen-C1.jpg'],
  'c1': ['/lovable-uploads/Citroen-C1.jpg'],
  
  // Chevrolet
  'chevy-spark': ['/lovable-uploads/Chevy-Spark.jpg'],
  'spark': ['/lovable-uploads/Chevy-Spark.jpg'],
  
  // VW
  'volkswagen': ['/lovable-uploads/vw-7.jpg'],
  'vw': ['/lovable-uploads/vw-7.jpg'],
  
  // Opel
  'opel-corsa': ['/lovable-uploads/rent-a-car-rental-opel-corsa-rent-a-car.jpg'],
  'corsa': ['/lovable-uploads/rent-a-car-rental-opel-corsa-rent-a-car.jpg'],
  'opel-combo': ['/lovable-uploads/opel-combo-front-view.jpg'],
  'combo': ['/lovable-uploads/opel-combo-front-view.jpg'],
  
  // Scooters & Motorbikes
  'typhoon-50': ['/lovable-uploads/typhoon-50.webp'],
  'typhoon': ['/lovable-uploads/typhoon-50.webp'],
  'vespa': ['/lovable-uploads/verspa.png'],
  'verspa': ['/lovable-uploads/verspa.png'],
  'sym-fiddle': ['/lovable-uploads/sym-fiddle.jpg'],
  'fiddle': ['/lovable-uploads/sym-fiddle.jpg'],
  'sym-jet': ['/lovable-uploads/sym-jet.jpg'],
  'jet': ['/lovable-uploads/sym-jet.jpg'],
  'sym-symphony': ['/lovable-uploads/sym-symp.jpg'],
  'symphony': ['/lovable-uploads/sym-symp.jpg'],
  'sym-200': ['/lovable-uploads/sym-200-hd.jpg'],
  'scooter-125': ['/lovable-uploads/scooter-125.jpg'],
  'liberty-125': ['/lovable-uploads/liberty-125.webp'],
  'liberty': ['/lovable-uploads/liberty-125.webp'],
  
  // ATVs & Buggies
  'atv-150': ['/lovable-uploads/atv-15cc.png'],
  'atv': ['/lovable-uploads/atv-15cc.png'],
  'quad': ['/lovable-uploads/atv-15cc.png'],
  'buggy-500': ['/lovable-uploads/Buggy 500cc.jpg'],
  'buggy': ['/lovable-uploads/Buggy 500cc.jpg'],
  'cf-moto-520': ['/lovable-uploads/ATV CF Moto 520cc.jpg'],
  'cf-moto': ['/lovable-uploads/ATV CF Moto 520cc.jpg'],
  
  // Default/Fallback
  'default': ['/placeholder.svg'],
};

/**
 * Get images for a vehicle based on its name, model, or ID
 */
export function getVehicleImages(vehicle: {
  id?: string;
  name?: string;
  model?: string;
  brand?: string;
  type?: string;
}): string[] {
  // Try to find by exact ID match first
  if (vehicle.id) {
    const idKey = vehicle.id.toLowerCase().replace(/\s+/g, '-');
    if (fleetImages[idKey]) {
      return fleetImages[idKey];
    }
  }
  
  // Try by full name
  if (vehicle.name) {
    const nameKey = vehicle.name.toLowerCase().replace(/\s+/g, '-');
    if (fleetImages[nameKey]) {
      return fleetImages[nameKey];
    }
  }
  
  // Try by model name
  if (vehicle.model) {
    const modelKey = vehicle.model.toLowerCase().replace(/\s+/g, '-');
    if (fleetImages[modelKey]) {
      return fleetImages[modelKey];
    }
  }
  
  // Try by brand-model combination
  if (vehicle.brand && vehicle.model) {
    const combinedKey = `${vehicle.brand}-${vehicle.model}`.toLowerCase().replace(/\s+/g, '-');
    if (fleetImages[combinedKey]) {
      return fleetImages[combinedKey];
    }
  }
  
  // Try partial matches
  const searchTerms = [
    vehicle.name,
    vehicle.model,
    vehicle.brand,
  ]
    .filter(Boolean)
    .map(term => term!.toLowerCase().replace(/\s+/g, '-'));
  
  for (const term of searchTerms) {
    for (const key of Object.keys(fleetImages)) {
      if (key.includes(term) || term.includes(key)) {
        return fleetImages[key];
      }
    }
  }
  
  // Type-based fallback
  if (vehicle.type === 'ATV / QUAD' || vehicle.type === 'Motorbike') {
    return ['/lovable-uploads/scooter-125.jpg'];
  }
  
  // Default fallback
  return fleetImages['default'];
}

