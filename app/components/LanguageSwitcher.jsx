import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full 
                 border border-white/20 text-white font-medium hover:bg-white/20 
                 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {language === 'en' ? 'ES' : 'EN'}
    </motion.button>
  );
};

export default LanguageSwitcher; 