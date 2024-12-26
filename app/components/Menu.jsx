import React, { useState } from 'react';
import { motion } from 'framer-motion';

const menuCategories = [
  { id: 'all', name: 'All' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Course' },
  { id: 'desserts', name: 'Desserts' },
];

const menuItems = [
  {
    id: 1,
    name: 'Korean BBQ Tacos',
    description: 'Marinated bulgogi beef, kimchi slaw, sesame seeds in corn tortillas',
    price: '$16',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    featured: true,
  },
  {
    id: 2,
    name: 'Thai Basil Bruschetta',
    description: 'Crispy baguette topped with Thai basil, tomatoes, and balsamic glaze',
    price: '$12',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80',
    featured: true,
  },
  {
    id: 3,
    name: 'Matcha Tiramisu',
    description: 'Japanese green tea layered with mascarpone and coffee-soaked ladyfingers',
    price: '$14',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    featured: true,
  },
  {
    id: 4,
    name: 'Mediterranean Poke Bowl',
    description: 'Fresh tuna, quinoa, hummus, feta, and Mediterranean vegetables',
    price: '$18',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
  },
  {
    id: 5,
    name: 'Curry Laksa Ramen',
    description: 'Japanese noodles in Malaysian curry broth with traditional toppings',
    price: '$19',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
  },
  {
    id: 6,
    name: 'Churro Waffles',
    description: 'Cinnamon-sugar Belgian waffles with dulce de leche',
    price: '$13',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1504387432042-8aca7c138087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = menuItems.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of fusion dishes, crafted with the finest ingredients
            and passion for culinary innovation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-secondary hover:bg-accent/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 