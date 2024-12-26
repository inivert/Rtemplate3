import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Code2 } from 'lucide-react';
import energyDrinkIcon from '../welcome/energy-drink-svgrepo-com.svg';

const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

const FEATURED_MEALS = [
  {
    id: 1,
    key: 'peruvianSushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75',
    category: 'Featured',
    price: '$22',
  },
  {
    id: 2,
    key: 'thaiCurryRamen',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75',
    category: 'Featured',
    price: '$19',
  },
  {
    id: 3,
    key: 'indianPizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75',
    category: 'Featured',
    price: '$20',
  },
];

const Home = () => {
  const { t } = useLanguage();
  const parallaxRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Preload all images
  useEffect(() => {
    const imageUrls = [HERO_IMAGE_URL, ...FEATURED_MEALS.map(meal => meal.image)];
    let loadedCount = 0;

    const preloadImages = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages).catch(console.error);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section ref={parallaxRef} className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Restaurant interior"
            className="w-full h-[120%] object-cover scale-110"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
            >
              {t('hero.exploreMenu')}
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg font-medium transition-colors"
            >
              {t('hero.ourStory')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our chef's specially curated selection of fusion masterpieces
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={imagesLoaded ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {FEATURED_MEALS.map((meal) => (
              <motion.div
                key={meal.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  <img
                    src={meal.image}
                    alt={t(`menu.items.${meal.key}.name`)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t(`menu.items.${meal.key}.name`)}
                    </h3>
                    <span className="text-blue-500 font-semibold">
                      {meal.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t(`menu.items.${meal.key}.description`)}
                  </p>
                  <Link
                    to="/menu"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                  >
                    View in Menu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CodeLumus Watermark */}
      <a 
        href="https://twitter.com/CodeLumus" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg hover:bg-white/90 transition-all hover:shadow-xl"
      >
        <Code2 className="text-blue-500 w-4 h-4" />
        <span className="font-mono text-sm">
          <span className="text-gray-600">&lt;</span>
          <span className="text-blue-500">CodeLumus</span>
          <span className="text-gray-600">/&gt;</span>
        </span>
        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium text-gray-600">dev</span>
        <span className="font-mono text-gray-500 text-sm flex items-center">
          /* crafted with 
          <img src={energyDrinkIcon} alt="energy drink" className="w-4 h-4 ml-1" />
          */
        </span>
      </a>
    </div>
  );
};

export default Home; 