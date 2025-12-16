import React, { useState } from 'react';
import { Search } from 'lucide-react';

const CollectionPage = () => {
  const [activeTab, setActiveTab] = useState('Tutte');
  const [searchQuery, setSearchQuery] = useState('');

  const cars = [
    {
      id: 1,
      name: 'De Tomaso Pantera',
      model: 'PUSH BUTTON',
      year: '1971',
      price: '€ 140.000',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 2,
      name: 'Lancia Fulvia',
      model: '1.6 SPORT ZAGATO',
      year: '1972',
      price: '€ 25.000',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 3,
      name: 'Gilco Giannini',
      model: 'MARDAL SPORT',
      year: '1951',
      price: '€ 430.000',
      image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=500&h=350&fit=crop',
      badge: '1000 MIGLIA',
      status: 'rent'
    },
    {
      id: 4,
      name: 'Ferrari 250 GT',
      model: 'BERLINETTA',
      year: '1960',
      price: '€ 850.000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=350&fit=crop',
      badge: null,
      status: 'sold'
    },
    {
      id: 5,
      name: 'Alfa Romeo Giulia',
      model: 'SPRINT GT',
      year: '1965',
      price: '€ 45.000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 6,
      name: 'Maserati 3500 GT',
      model: 'TOURING',
      year: '1958',
      price: '€ 280.000',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=350&fit=crop',
      badge: '1000 MIGLIA',
      status: 'rent'
    },
    {
      id: 7,
      name: 'Lamborghini Miura',
      model: 'P400 S',
      year: '1969',
      price: '€ 1.200.000',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 8,
      name: 'Fiat 500',
      model: 'ABARTH',
      year: '1968',
      price: '€ 35.000',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=500&h=350&fit=crop',
      badge: null,
      status: 'sold'
    },
    {
      id: 9,
      name: 'Lancia Stratos',
      model: 'HF STRADALE',
      year: '1975',
      price: '€ 520.000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 10,
      name: 'Alfa Romeo Spider',
      model: 'DUETTO',
      year: '1967',
      price: '€ 95.000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=350&fit=crop',
      badge: null,
      status: 'available'
    },
    {
      id: 11,
      name: 'Ferrari Dino',
      model: '246 GT',
      year: '1972',
      price: '€ 380.000',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=350&fit=crop',
      badge: null,
      status: 'sold'
    },
    {
      id: 12,
      name: 'Maserati Ghibli',
      model: 'SS',
      year: '1970',
      price: '€ 215.000',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=500&h=350&fit=crop',
      badge: '1000 MIGLIA',
      status: 'rent'
    }
  ];

  const filterCars = () => {
    let filtered = cars;

    // Filter by tab
    if (activeTab === 'Disponibili') {
      filtered = filtered.filter(car => car.status === 'available');
    } else if (activeTab === 'Vendute') {
      filtered = filtered.filter(car => car.status === 'sold');
    } else if (activeTab === 'Noleggio 1000Miglia') {
      filtered = filtered.filter(car => car.status === 'rent');
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(car => 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.year.includes(searchQuery)
      );
    }

    return filtered;
  };

  const filteredCars = filterCars();

  return (
    <section className="py-16 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-4 text-gray-800">
          La collezione
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Scopri le nostre automobili d'epoca selezionate
        </p>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-12 flex-wrap">
          {['Tutte', 'Disponibili', 'Vendute', 'Noleggio 1000Miglia'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-teal-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-teal-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca per nome, modello o anno..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-300 focus:border-teal-600 focus:outline-none text-gray-700 shadow-sm"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {filteredCars.length} {filteredCars.length === 1 ? 'veicolo trovato' : 'veicoli trovati'}
          </p>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {car.badge && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg">
                      {car.badge}
                    </div>
                  )}
                  {car.status === 'sold' && (
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg">
                      VENDUTO
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-gray-800">{car.name}</h3>
                    <span className="text-xl font-bold text-teal-700">{car.price}</span>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold">{car.model}</span>
                    <span className="mx-2">•</span>
                    <span>{car.year} Anno</span>
                  </p>
                  <button className="mt-4 w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-lg transition-colors font-medium">
                    Vedi dettagli
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">Nessun veicolo trovato</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setActiveTab('Tutte');
              }}
              className="mt-4 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full transition-colors"
            >
              Reset filtri
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CollectionPage;