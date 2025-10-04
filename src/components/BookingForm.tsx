import { useState } from 'react';
import { Car, Bike, TruckIcon, MapPin, Calendar, Clock, Users, Shield, Check } from 'lucide-react';

interface BookingFormProps {
  className?: string;
}

export function BookingForm({ className = '' }: BookingFormProps) {
  const [vehicleType, setVehicleType] = useState<'car' | 'moto' | 'atv'>('car');
  const [pickupLocation, setPickupLocation] = useState('1');
  const [returnLocation, setReturnLocation] = useState('1');
  const [differentReturn, setDifferentReturn] = useState(false);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('10:00');
  const [ageGroup, setAgeGroup] = useState('28');

  const locations = [
    { id: '1', name: 'Antiparos Port (Office)' },
    { id: '13', name: 'Antiparos Helipad' },
    { id: '3', name: 'Antiparos Villas/Hotels' },
    { id: '18', name: 'Paros Airport (PAS)' },
    { id: '19', name: 'Paros Port (Parikia)' },
    { id: '20', name: 'Paros Villas/Hotels' },
  ];

  const ageGroups = [
    { id: '27', name: '21-24' },
    { id: '28', name: '25-70' },
  ];

  const handleSearch = () => {
    // Validate required fields
    if (!pickupDate || !returnDate) {
      alert('Please select both pickup and return dates');
      return;
    }

    // Convert YYYY-MM-DD to DD/MM/YYYY
    const formatDate = (dateStr: string) => {
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    };

    const baseUrl = 'https://antiparosrentacar.gocars.gr/select';
    const params = new URLSearchParams({
      pickup_id: pickupLocation,
      return_id: differentReturn ? returnLocation : pickupLocation,
      date_from: formatDate(pickupDate),
      time_from: pickupTime,
      date_to: formatDate(returnDate),
      time_to: returnTime,
      age_group_id: ageGroup,
      vehicle_type: vehicleType,
      vehicles_sort_by: 'price_desc',
      lang: 'en',
    });

    window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 md:p-6 border-2 border-gray-100 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="text-2xl md:text-3xl font-black text-main-900 dark:text-white mb-1.5">
          Start Your Reservation
        </h2>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-300">
          <Shield className="h-3 w-3 text-gold-600" />
          <span className="font-semibold">100% Secure Environment</span>
        </div>
      </div>

      {/* Vehicle Type Selector */}
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setVehicleType('car')}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
              vehicleType === 'car'
                ? 'border-gold-600 bg-gradient-to-br from-gold-50 to-gold-100 shadow-lg'
                : 'border-gray-200 hover:border-main-300'
            }`}
          >
            <Car className={`h-6 w-6 mb-1 ${vehicleType === 'car' ? 'text-gold-600' : 'text-gray-400'}`} />
            <span className={`text-xs font-bold ${vehicleType === 'car' ? 'text-main-900' : 'text-gray-600'}`}>
              Car
            </span>
          </button>

          <button
            onClick={() => setVehicleType('moto')}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
              vehicleType === 'moto'
                ? 'border-gold-600 bg-gradient-to-br from-gold-50 to-gold-100 shadow-lg'
                : 'border-gray-200 hover:border-main-300'
            }`}
          >
            <Bike className={`h-6 w-6 mb-1 ${vehicleType === 'moto' ? 'text-gold-600' : 'text-gray-400'}`} />
            <span className={`text-xs font-bold ${vehicleType === 'moto' ? 'text-main-900' : 'text-gray-600'}`}>
              Motorbike
            </span>
          </button>

          <button
            onClick={() => setVehicleType('atv')}
            className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
              vehicleType === 'atv'
                ? 'border-gold-600 bg-gradient-to-br from-gold-50 to-gold-100 shadow-lg'
                : 'border-gray-200 hover:border-main-300'
            }`}
          >
            <TruckIcon className={`h-6 w-6 mb-1 ${vehicleType === 'atv' ? 'text-gold-600' : 'text-gray-400'}`} />
            <span className={`text-xs font-bold ${vehicleType === 'atv' ? 'text-main-900' : 'text-gray-600'}`}>
              ATV / QUAD
            </span>
          </button>
        </div>
      </div>

      {/* Pick-up Location */}
      <div className="mb-3">
        <label className="block text-xs font-bold text-main-900 mb-1.5">
          Pick-up Location*
        </label>
        <div className="relative">
          <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 text-sm"
          >
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Different Return Location Checkbox */}
      <div className="mb-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={differentReturn}
            onChange={(e) => setDifferentReturn(e.target.checked)}
            className="w-4 h-4 text-gold-600 border-gray-300 rounded focus:ring-gold-500"
          />
          <span className="text-xs font-semibold text-main-900">
            Return vehicle in a different location
          </span>
        </label>
      </div>

      {/* Return Location (conditional) */}
      {differentReturn && (
        <div className="mb-3">
          <label className="block text-xs font-bold text-main-900 mb-1.5">
            Drop-off Location*
          </label>
          <div className="relative">
            <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
            <select
              value={returnLocation}
              onChange={(e) => setReturnLocation(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 text-sm"
            >
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Date & Time Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {/* Pick-up Date/Time */}
        <div className="min-w-0 max-w-full">
          <label className="block text-xs font-bold text-main-900 dark:text-white mb-1.5">
            Pick-up Date/Time*
          </label>
          <div className="space-y-2">
            <div className="relative">
              <Calendar className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 dark:text-white text-sm"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 dark:text-white text-sm"
              />
            </div>
          </div>
        </div>

        {/* Return Date/Time */}
        <div className="min-w-0 max-w-full">
          <label className="block text-xs font-bold text-main-900 dark:text-white mb-1.5">
            Drop-off Date/Time*
          </label>
          <div className="space-y-2">
            <div className="relative">
              <Calendar className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 dark:text-white text-sm"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
              <input
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 dark:text-white text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Age Group */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-main-900 mb-1.5">
          Age Group*
        </label>
        <div className="relative">
          <Users className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gold-600" />
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-gold-600 focus:outline-none font-semibold text-main-900 text-sm"
          >
            {ageGroups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-gradient-to-r from-main-900 to-main-800 hover:from-main-800 hover:to-main-700 text-white py-3.5 rounded-xl font-black text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform mb-4"
      >
        SEARCH PRICES
      </button>

      {/* Key Points */}
      <div className="grid grid-cols-3 gap-3 py-3 border-t-2 border-gray-100 dark:border-gray-700">
        <div className="flex flex-col items-center text-center">
          <Check className="h-5 w-5 text-gold-600 mb-1" />
          <span className="text-xs font-bold text-main-900 dark:text-white">No Hidden Costs</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Check className="h-5 w-5 text-gold-600 mb-1" />
          <span className="text-xs font-bold text-main-900 dark:text-white">No Deposits</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Check className="h-5 w-5 text-gold-600 mb-1" />
          <span className="text-xs font-bold text-main-900 dark:text-white">Unlimited Km</span>
        </div>
      </div>
    </div>
  );
}
