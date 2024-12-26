import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Experience Global Fusion',
      subtitle: 'Where cultures blend and flavors unite. Discover a unique culinary journey that celebrates diversity through innovative fusion cuisine.',
      exploreMenu: 'Explore Menu',
      ourStory: 'Our Story',
    },
    menu: {
      title: 'Our Menu',
      description: 'Discover our carefully curated selection of fusion dishes, crafted with the finest ingredients and passion for culinary innovation.',
      categories: {
        all: 'All',
        starters: 'Starters',
        mains: 'Main Course',
        desserts: 'Desserts',
        drinks: 'Drinks',
      },
      drinks: {
        alcoholic: 'Alcoholic',
        nonAlcoholic: 'Non-Alcoholic',
      },
      dietary: {
        title: 'Special Dietary Requirements?',
        description: 'We accommodate various dietary preferences and restrictions while maintaining the authentic flavors of our fusion cuisine.',
        options: {
          vegetarian: 'Vegetarian Options',
          glutenFree: 'Gluten-Free',
          dairyFree: 'Dairy-Free',
          vegan: 'Vegan Friendly',
        },
      },
      items: {
        // Starters
        springRolls: {
          name: 'Asian Fusion Spring Rolls',
          description: 'Crispy rolls filled with kimchi and pulled pork, served with sweet chili sauce',
          price: '$10',
          category: 'starters'
        },
        cevicheTostadas: {
          name: 'Nikkei Ceviche Tostadas',
          description: 'Japanese-Peruvian style fish ceviche on crispy corn tostadas with avocado',
          price: '$12',
          category: 'starters'
        },
        hummusTrio: {
          name: 'Global Hummus Trio',
          description: 'Classic, curry-spiced, and chipotle hummus with naan and pita',
          price: '$11',
          category: 'starters'
        },
        koreanBruschetta: {
          name: 'Korean Bruschetta',
          description: 'Grilled sourdough with gochujang-marinated beef and kimchi mayo',
          price: '$13',
          category: 'starters'
        },

        // Main Courses
        fusionTacos: {
          name: 'Fusion Tacos',
          description: 'Korean BBQ bulgogi with kimchi slaw in corn tortillas',
          price: '$18',
          category: 'mains'
        },
        thaiCurryRamen: {
          name: 'Thai Curry Ramen',
          description: 'Japanese ramen noodles in coconut curry broth with lemongrass chicken',
          price: '$19',
          category: 'mains'
        },
        indianPizza: {
          name: 'Tandoori Pizza',
          description: 'Naan bread topped with tandoori chicken, mint chutney, and mozzarella',
          price: '$20',
          category: 'mains'
        },
        peruvianSushi: {
          name: 'Peruvian Maki',
          description: 'Tempura shrimp roll topped with aji amarillo sauce and crispy quinoa',
          price: '$22',
          category: 'mains'
        },
        morrocanPasta: {
          name: 'Moroccan Pasta',
          description: 'Saffron fettuccine with spiced lamb ragù and preserved lemon',
          price: '$24',
          category: 'mains'
        },
        vietnameseTacos: {
          name: 'Banh Mi Tacos',
          description: 'Vietnamese-style pork belly with pickled vegetables in corn tortillas',
          price: '$18',
          category: 'mains'
        },

        // Desserts
        matchaTiramisu: {
          name: 'Matcha Tiramisu',
          description: 'Japanese green tea tiramisu with mascarpone and dark chocolate shavings',
          price: '$11',
          category: 'desserts'
        },
        churrosCheesecake: {
          name: 'Churros Cheesecake',
          description: 'New York style cheesecake with churros crust and dulce de leche',
          price: '$12',
          category: 'desserts'
        },
        thaiTeaPanna: {
          name: 'Thai Tea Panna Cotta',
          description: 'Thai tea flavored panna cotta with lychee compote',
          price: '$10',
          category: 'desserts'
        },

        // Drinks
        sakeSangria: {
          name: 'Sake Sangria',
          description: 'White wine and sake with Asian fruits and herbs',
          price: '$13',
          category: 'drinks'
        },
        lycheeMojito: {
          name: 'Lychee Mojito',
          description: 'Rum, lychee, mint, and lime with a touch of wasabi',
          price: '$14',
          category: 'drinks'
        },
        mezcalMule: {
          name: 'Spicy Mezcal Mule',
          description: 'Mezcal, ginger beer, lime, and Thai chili',
          price: '$15',
          category: 'drinks'
        },
        matchaLatte: {
          name: 'Iced Matcha Horchata',
          description: 'Japanese matcha green tea with Mexican horchata',
          price: '$6',
          category: 'drinks'
        },
        tamarindSoda: {
          name: 'Tamarind Yuzu Spritzer',
          description: 'House-made tamarind and yuzu soda with mint',
          price: '$5',
          category: 'drinks'
        }
      },
      search: {
        placeholder: 'Search menu...',
        filters: 'Filters',
      },
    },
    about: {
      story: {
        title: 'Our Story',
        description1: 'Founded in 2015, Cultura Mixta has been a celebration of diverse culinary traditions, bringing together flavors from around the world to create an unforgettable dining experience.',
        description2: 'Our commitment to cultural fusion is reflected in every dish we serve, combining traditional techniques with modern innovation to create unique and memorable flavors that bridge cultures.',
      },
      features: {
        hours: {
          title: 'Opening Hours',
          description: 'Tue-Sun: 5:30 PM - 10:30 PM',
        },
        cuisine: {
          title: 'Cuisine',
          description: 'Modern European',
        },
        capacity: {
          title: 'Capacity',
          description: '60 Seats',
        },
      },
      team: {
        title: 'Meet Our Team',
        description: 'Our talented team of culinary professionals is dedicated to creating exceptional dining experiences for our guests.',
        members: {
          chef: {
            name: 'Chef Michael Laurent',
            role: 'Executive Chef',
            description: 'With over 15 years of experience in fine dining.',
          },
          pastry: {
            name: 'Sarah Chen',
            role: 'Pastry Chef',
            description: 'Specializing in innovative dessert creations.',
          },
          sommelier: {
            name: 'James Wilson',
            role: 'Sommelier',
            description: 'Expert in wine pairing and fine spirits.',
          },
        },
      },
    },
    contact: {
      title: 'Contact Us',
      description: "We'd love to hear from you. Whether you have a question about our menu, hours, or special events, we're here to help.",
      info: {
        location: {
          title: 'Location',
          details: ['123 Culinary Street', 'Foodie District, FC 12345'],
        },
        phone: {
          title: 'Phone',
          details: ['+1 (555) 123-4567'],
        },
        email: {
          title: 'Email',
          details: ['info@culturamixta.com'],
        },
        hours: {
          title: 'Hours',
          details: ['Tue-Sun: 5:30 PM - 10:30 PM', 'Closed on Mondays'],
        },
      },
      events: {
        title: 'Private Events',
        description: 'Looking to host a special occasion? We offer private dining experiences for corporate events, celebrations, and intimate gatherings.',
        details: {
          capacity: 'Up to 60 guests',
          times: 'Lunch & Dinner',
          menus: 'Available upon request',
        },
      },
      labels: {
        capacity: 'Capacity:',
        times: 'Available Times:',
        menus: 'Custom Menus:',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Menú',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      title: 'Experimenta la Fusión Global',
      subtitle: 'Donde las culturas se mezclan y los sabores se unen. Descubre un viaje culinario único que celebra la diversidad a través de una innovadora cocina fusión.',
      exploreMenu: 'Ver Menú',
      ourStory: 'Nuestra Historia',
    },
    menu: {
      title: 'Nuestro Menú',
      description: 'Descubre nuestra cuidadosa selección de platos fusión, elaborados con los mejores ingredientes y pasión por la innovación culinaria.',
      categories: {
        all: 'Todo',
        starters: 'Entrantes',
        mains: 'Platos Principales',
        desserts: 'Postres',
        drinks: 'Bebidas',
      },
      drinks: {
        alcoholic: 'Con Alcohol',
        nonAlcoholic: 'Sin Alcohol',
      },
      dietary: {
        title: '¿Requisitos Dietéticos Especiales?',
        description: 'Nos adaptamos a diversas preferencias y restricciones dietéticas mientras mantenemos los auténticos sabores de nuestra cocina fusión.',
        options: {
          vegetarian: 'Opciones Vegetarianas',
          glutenFree: 'Sin Gluten',
          dairyFree: 'Sin Lácteos',
          vegan: 'Apto para Veganos',
        },
      },
      items: {
        // Starters
        springRolls: {
          name: 'Rollitos de Primavera Fusión',
          description: 'Rollitos crujientes rellenos de kimchi y cerdo desmenuzado, servidos con salsa de chile dulce',
          price: '$10',
          category: 'starters'
        },
        cevicheTostadas: {
          name: 'Tostadas de Ceviche Nikkei',
          description: 'Ceviche estilo japonés-peruano en tostadas de maíz con aguacate',
          price: '$12',
          category: 'starters'
        },
        hummusTrio: {
          name: 'Trío de Hummus Global',
          description: 'Hummus clásico, al curry y chipotle con naan y pita',
          price: '$11',
          category: 'starters'
        },
        koreanBruschetta: {
          name: 'Bruschetta Coreana',
          description: 'Pan sourdough a la parrilla con ternera marinada en gochujang y mayo de kimchi',
          price: '$13',
          category: 'starters'
        },

        // Main Courses
        fusionTacos: {
          name: 'Tacos Fusión',
          description: 'Bulgogi coreano con ensalada de kimchi en tortillas de maíz',
          price: '$18',
          category: 'mains'
        },
        thaiCurryRamen: {
          name: 'Ramen al Curry Tai',
          description: 'Fideos ramen en caldo de curry con coco y pollo al limoncillo',
          price: '$19',
          category: 'mains'
        },
        indianPizza: {
          name: 'Pizza Tandoori',
          description: 'Pan naan con pollo tandoori, chutney de menta y mozzarella',
          price: '$20',
          category: 'mains'
        },
        peruvianSushi: {
          name: 'Maki Peruano',
          description: 'Roll de camarón tempura con salsa de ají amarillo y quinoa crujiente',
          price: '$22',
          category: 'mains'
        },
        morrocanPasta: {
          name: 'Pasta Marroquí',
          description: 'Fettuccine al azafrán con ragú de cordero especiado y limón en conserva',
          price: '$24',
          category: 'mains'
        },
        vietnameseTacos: {
          name: 'Tacos Banh Mi',
          description: 'Panceta estilo vietnamita con vegetales encurtidos en tortillas de maíz',
          price: '$18',
          category: 'mains'
        },

        // Desserts
        matchaTiramisu: {
          name: 'Tiramisú de Matcha',
          description: 'Tiramisú de té verde japonés con mascarpone y virutas de chocolate negro',
          price: '$11',
          category: 'desserts'
        },
        churrosCheesecake: {
          name: 'Cheesecake de Churros',
          description: 'Cheesecake estilo Nueva York con base de churros y dulce de leche',
          price: '$12',
          category: 'desserts'
        },
        thaiTeaPanna: {
          name: 'Panna Cotta de Té Tailandés',
          description: 'Panna cotta con sabor a té tailandés y compota de lichi',
          price: '$10',
          category: 'desserts'
        },

        // Drinks
        sakeSangria: {
          name: 'Sangría de Sake',
          description: 'Vino blanco y sake con frutas y hierbas asiáticas',
          price: '$13',
          category: 'drinks'
        },
        lycheeMojito: {
          name: 'Mojito de Lichi',
          description: 'Ron, lichi, menta y lima con un toque de wasabi',
          price: '$14',
          category: 'drinks'
        },
        mezcalMule: {
          name: 'Mezcal Mule Picante',
          description: 'Mezcal, cerveza de jengibre, lima y chile tailandés',
          price: '$15',
          category: 'drinks'
        },
        matchaLatte: {
          name: 'Horchata Helada de Matcha',
          description: 'Té verde matcha japonés con horchata mexicana',
          price: '$6',
          category: 'drinks'
        },
        tamarindSoda: {
          name: 'Spritzer de Tamarindo y Yuzu',
          description: 'Refresco casero de tamarindo y yuzu con menta',
          price: '$5',
          category: 'drinks'
        }
      },
      search: {
        placeholder: 'Buscar en el menú...',
        filters: 'Filtros',
      },
    },
    about: {
      story: {
        title: 'Nuestra Historia',
        description1: 'Fundado en 2015, Cultura Mixta ha sido una celebración de diversas tradiciones culinarias, reuniendo sabores de todo el mundo para crear una experiencia gastronómica inolvidable.',
        description2: 'Nuestro compromiso con la fusión cultural se refleja en cada plato que servimos, combinando técnicas tradicionales con innovación moderna para crear sabores únicos y memorables que unen culturas.',
      },
      features: {
        hours: {
          title: 'Horario',
          description: 'Mar-Dom: 17:30 - 22:30',
        },
        cuisine: {
          title: 'Cocina',
          description: 'Europea Moderna',
        },
        capacity: {
          title: 'Capacidad',
          description: '60 Comensales',
        },
      },
      team: {
        title: 'Conoce a Nuestro Equipo',
        description: 'Nuestro talentoso equipo de profesionales culinarios está dedicado a crear experiencias gastronómicas excepcionales para nuestros huéspedes.',
        members: {
          chef: {
            name: 'Chef Michael Laurent',
            role: 'Chef Ejecutivo',
            description: 'Con más de 15 años de experiencia en alta cocina.',
          },
          pastry: {
            name: 'Sarah Chen',
            role: 'Chef Pastelera',
            description: 'Especializada en creaciones innovadoras de postres.',
          },
          sommelier: {
            name: 'James Wilson',
            role: 'Sommelier',
            description: 'Experto en maridaje de vinos y licores finos.',
          },
        },
      },
    },
    contact: {
      title: 'Contáctanos',
      description: 'Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestro menú, horarios o eventos especiales, estamos aquí para ayudarte.',
      info: {
        location: {
          title: 'Ubicación',
          details: ['Calle Culinaria 123', 'Distrito Gastronómico, FC 12345'],
        },
        phone: {
          title: 'Teléfono',
          details: ['+1 (555) 123-4567'],
        },
        email: {
          title: 'Correo',
          details: ['info@culturamixta.com'],
        },
        hours: {
          title: 'Horario',
          details: ['Mar-Dom: 17:30 - 22:30', 'Cerrado los Lunes'],
        },
      },
      events: {
        title: 'Eventos Privados',
        description: '¿Buscas organizar una ocasión especial? Ofrecemos experiencias gastronómicas privadas para eventos corporativos, celebraciones y reuniones íntimas.',
        details: {
          capacity: 'Hasta 60 invitados',
          times: 'Almuerzo y Cena',
          menus: 'Disponibles bajo petición',
        },
      },
      labels: {
        capacity: 'Capacidad:',
        times: 'Horarios Disponibles:',
        menus: 'Menús Personalizados:',
      },
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 