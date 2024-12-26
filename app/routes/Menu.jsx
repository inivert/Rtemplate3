import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const menuItems = [
  // Starters
  {
    id: 1,
    key: 'springRolls',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },
  {
    id: 2,
    key: 'cevicheTostadas',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3',
    dietary: ['glutenFree', 'dairyFree'],
  },
  {
    id: 3,
    key: 'hummusTrio',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3',
    dietary: ['vegetarian', 'vegan'],
  },
  {
    id: 4,
    key: 'koreanBruschetta',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },

  // Main Courses
  {
    id: 5,
    key: 'fusionTacos',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },
  {
    id: 6,
    key: 'thaiCurryRamen',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },
  {
    id: 7,
    key: 'indianPizza',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3',
    dietary: [],
  },
  {
    id: 8,
    key: 'peruvianSushi',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3',
    dietary: ['glutenFree', 'dairyFree'],
  },
  {
    id: 9,
    key: 'morrocanPasta',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },
  {
    id: 10,
    key: 'vietnameseTacos',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3',
    dietary: ['dairyFree'],
  },

  // Desserts
  {
    id: 11,
    key: 'matchaTiramisu',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-4.0.3',
    dietary: ['vegetarian'],
  },
  {
    id: 12,
    key: 'churrosCheesecake',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-4.0.3',
    dietary: ['vegetarian'],
  },
  {
    id: 13,
    key: 'thaiTeaPanna',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3',
    dietary: ['vegetarian', 'glutenFree'],
  },
];

const drinkItems = [
  // Cocktails
  {
    id: 14,
    key: 'sakeSangria',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?ixlib=rb-4.0.3',
    alcoholic: true,
  },
  {
    id: 15,
    key: 'lycheeMojito',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3',
    alcoholic: true,
  },
  {
    id: 16,
    key: 'mezcalMule',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3',
    alcoholic: true,
  },
  // Non-Alcoholic
  {
    id: 17,
    key: 'matchaLatte',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3',
    alcoholic: false,
  },
  {
    id: 18,
    key: 'tamarindSoda',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3',
    alcoholic: false,
  },
];

const Menu = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
    vegan: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  const allItems = [...menuItems, ...drinkItems];

  useEffect(() => {
    // Preload images
    const imagePromises = allItems.map(item => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .finally(() => setIsLoading(false));
  }, []);

  const filteredItems = allItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const translationPath = `menu.items.${item.key}`;
    const itemName = t(`${translationPath}.name`);
    const itemDescription = t(`${translationPath}.description`);
    
    const matchesSearch = itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         itemDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDietary = item.category === 'drinks' || 
      Object.entries(dietaryFilters).every(([filter, isActive]) => 
        !isActive || (item.dietary && item.dietary.includes(filter))
      );
    
    return matchesCategory && matchesSearch && matchesDietary;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const categories = [
    { id: 'all', label: t('menu.categories.all') },
    { id: 'starters', label: t('menu.categories.starters') },
    { id: 'mains', label: t('menu.categories.mains') },
    { id: 'desserts', label: t('menu.categories.desserts') },
    { id: 'drinks', label: t('menu.categories.drinks') },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('menu.title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('menu.description')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('menu.search.placeholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Filter size={20} />
            {t('menu.search.filters')}
          </button>
        </div>

        {/* Dietary Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-8 overflow-hidden"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium mb-4">{t('menu.dietary.title')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(dietaryFilters).map(([filter, isActive]) => (
                    <button
                      key={filter}
                      onClick={() => setDietaryFilters(prev => ({
                        ...prev,
                        [filter]: !prev[filter]
                      }))}
                      className={`px-4 py-2 rounded-full border transition-colors ${
                        isActive
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {t(`menu.dietary.options.${filter}`)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery + JSON.stringify(dietaryFilters)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                layout
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={item.image}
                    alt={t(`menu.items.${item.key}.name`)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3'; // Fallback image
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium">
                      {t(`menu.items.${item.key}.name`)}
                    </h3>
                    <span className="text-blue-500 font-medium">
                      {t(`menu.items.${item.key}.price`)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {t(`menu.items.${item.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.dietary && item.dietary.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                      >
                        {t(`menu.dietary.options.${tag}`)}
                      </span>
                    ))}
                    {item.category === 'drinks' && (
                      <span
                        className={`px-2 py-1 text-xs ${
                          item.alcoholic
                            ? 'bg-red-100 text-red-600'
                            : 'bg-green-100 text-green-600'
                        } rounded-full`}
                      >
                        {t(item.alcoholic ? 'menu.drinks.alcoholic' : 'menu.drinks.nonAlcoholic')}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No items found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu; 