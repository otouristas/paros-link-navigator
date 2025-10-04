/**
 * Local fleet image mapping
 * Maps vehicle identifiers to local asset paths
 */

interface FleetImageMap {
  [key: string]: string[];
}

export const fleetImages: FleetImageMap = {
  // Toyota
  'toyota-aygo': ['/src/assets/fleet/toyota-aygo.jpg'],
  'aygo': ['/src/assets/fleet/toyota-aygo.jpg'],
  
  // Suzuki
  'suzuki-swift': ['/src/assets/fleet/suzuki-swift-2010-2015.jpg'],
  'swift': ['/src/assets/fleet/suzuki-swift-2010-2015.jpg'],
  'suzuki-celerio': ['/src/assets/fleet/suzuki-celerio.jpg'],
  'celerio': ['/src/assets/fleet/suzuki-celerio.jpg'],
  'suzuki-jimny': ['/src/assets/fleet/suzuki-jimny-sifnos.jpeg', '/src/assets/fleet/Suzuki-Jimny-Paros-rent-a-car.webp'],
  'jimny': ['/src/assets/fleet/suzuki-jimny-sifnos.jpeg', '/src/assets/fleet/Suzuki-Jimny-Paros-rent-a-car.webp'],
  'suzuki-alto': ['/src/assets/fleet/paros-rent-a-car-suzuki-alto.jpg'],
  'alto': ['/src/assets/fleet/paros-rent-a-car-suzuki-alto.jpg'],
  'suzuki-ignis': ['/src/assets/fleet/Suzuki-Ignis-1200.jpg'],
  'ignis': ['/src/assets/fleet/Suzuki-Ignis-1200.jpg'],
  
  // Skoda
  'skoda-citigo': ['/src/assets/fleet/skoda-citigo.jpg'],
  'citigo': ['/src/assets/fleet/skoda-citigo.jpg'],
  'skoda-fabia': ['/src/assets/fleet/skoda-fabia.webp'],
  'fabia': ['/src/assets/fleet/skoda-fabia.webp'],
  'skoda-kamiq': ['/src/assets/fleet/skoda-kamiq.webp'],
  'kamiq': ['/src/assets/fleet/skoda-kamiq.webp'],
  
  // Peugeot
  'peugeot-301': ['/src/assets/fleet/peugeot-301-sedan.jpg'],
  '301': ['/src/assets/fleet/peugeot-301-sedan.jpg'],
  'peugeot-208': ['/src/assets/fleet/peuegot-208.jpeg'],
  '208': ['/src/assets/fleet/peuegot-208.jpeg'],
  'peugeot-108': ['/src/assets/fleet/Peugeot108.webp'],
  '108': ['/src/assets/fleet/Peugeot108.webp'],
  
  // Nissan
  'nissan-micra': ['/src/assets/fleet/nissan-micra.jpg'],
  'micra': ['/src/assets/fleet/nissan-micra.jpg'],
  
  // MG
  'mg-zs': ['/src/assets/fleet/mg-zs.jpg'],
  'zs': ['/src/assets/fleet/mg-zs.jpg'],
  
  // Mercedes
  'mercedes-glb': ['/src/assets/fleet/mercedes-glb.png'],
  'glb': ['/src/assets/fleet/mercedes-glb.png'],
  
  // Kia
  'kia-picanto': ['/src/assets/fleet/kia-picanto.png'],
  'picanto': ['/src/assets/fleet/kia-picanto.png'],
  
  // Jeep
  'jeep-renegade': ['/src/assets/fleet/jeep-renegade.png'],
  'renegade': ['/src/assets/fleet/jeep-renegade.png'],
  
  // Hyundai
  'hyundai-i10': ['/src/assets/fleet/huyndai-i10.png'],
  'i10': ['/src/assets/fleet/huyndai-i10.png'],
  
  // Fiat
  'fiat-tipo': ['/src/assets/fleet/fiat-tipo.png'],
  'tipo': ['/src/assets/fleet/fiat-tipo.png'],
  'fiat-panda': ['/src/assets/fleet/fiat-panda.jpeg'],
  'panda': ['/src/assets/fleet/fiat-panda.jpeg'],
  'fiat-doblo': ['/src/assets/fleet/fiat-doblo-7.jpg'],
  'doblo': ['/src/assets/fleet/fiat-doblo-7.jpg'],
  'fiat-500-cabrio': ['/src/assets/fleet/fiat-500-cabrio.jpg'],
  'fiat-500': ['/src/assets/fleet/fiat-500.png', '/src/assets/fleet/fiat-500-cabrio.jpg'],
  '500': ['/src/assets/fleet/fiat-500.png'],
  
  // Citroen
  'citroen-c4': ['/src/assets/fleet/citroen-c4.jpg'],
  'c4': ['/src/assets/fleet/citroen-c4.jpg'],
  'citroen-c3': ['/src/assets/fleet/citroen-c3jpg.jpg'],
  'c3': ['/src/assets/fleet/citroen-c3jpg.jpg'],
  'citroen-c3-aircross': ['/src/assets/fleet/c3-aircross.webp'],
  'c3-aircross': ['/src/assets/fleet/c3-aircross.webp'],
  'citroen-c1': ['/src/assets/fleet/Citroen-C1.jpg'],
  'c1': ['/src/assets/fleet/Citroen-C1.jpg'],
  
  // Chevrolet
  'chevy-spark': ['/src/assets/fleet/Chevy-Spark.jpg'],
  'spark': ['/src/assets/fleet/Chevy-Spark.jpg'],
  
  // VW
  'volkswagen': ['/src/assets/fleet/vw-7.jpg'],
  'vw': ['/src/assets/fleet/vw-7.jpg'],
  
  // Opel
  'opel-corsa': ['/src/assets/fleet/rent-a-car-rental-opel-corsa-rent-a-car.jpg'],
  'corsa': ['/src/assets/fleet/rent-a-car-rental-opel-corsa-rent-a-car.jpg'],
  'opel-combo': ['/src/assets/fleet/opel-combo-front-view.jpg'],
  'combo': ['/src/assets/fleet/opel-combo-front-view.jpg'],
  
  // Scooters & Motorbikes
  'typhoon-50': ['/src/assets/fleet/typhoon-50.webp'],
  'typhoon': ['/src/assets/fleet/typhoon-50.webp'],
  'vespa': ['/src/assets/fleet/verspa.png'],
  'verspa': ['/src/assets/fleet/verspa.png'],
  'sym-fiddle': ['/src/assets/fleet/sym-fiddle.jpg'],
  'fiddle': ['/src/assets/fleet/sym-fiddle.jpg'],
  'sym-jet': ['/src/assets/fleet/sym-jet.jpg'],
  'jet': ['/src/assets/fleet/sym-jet.jpg'],
  'sym-symphony': ['/src/assets/fleet/sym-symp.jpg'],
  'symphony': ['/src/assets/fleet/sym-symp.jpg'],
  'sym-200': ['/src/assets/fleet/sym-200-hd.jpg'],
  'scooter-125': ['/src/assets/fleet/scooter-125.jpg'],
  'liberty-125': ['/src/assets/fleet/liberty-125.webp'],
  'liberty': ['/src/assets/fleet/liberty-125.webp'],
  
  // ATVs & Buggies
  'atv-150': ['/src/assets/fleet/atv-15cc.png'],
  'atv': ['/src/assets/fleet/atv-15cc.png'],
  'quad': ['/src/assets/fleet/atv-15cc.png'],
  'buggy-500': ['/src/assets/fleet/Buggy 500cc.jpg'],
  'buggy': ['/src/assets/fleet/Buggy 500cc.jpg'],
  'cf-moto-520': ['/src/assets/fleet/ATV CF Moto 520cc.jpg'],
  'cf-moto': ['/src/assets/fleet/ATV CF Moto 520cc.jpg'],
  
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
    return ['/src/assets/fleet/scooter-125.jpg'];
  }
  
  // Default fallback
  return fleetImages['default'];
}

