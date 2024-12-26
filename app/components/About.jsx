import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Utensils } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Opening Hours',
    description: 'Tue-Sun: 5:30 PM - 10:30 PM',
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: 'Cuisine',
    description: 'Modern European',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Capacity',
    description: '60 Seats',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-accent/10 rounded-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary">
              Our Story
            </h2>
            <p className="text-gray-600">
              Founded in 2015, Savoria has been a labor of love, bringing together the finest 
              ingredients and culinary expertise to create an unforgettable dining experience. 
              Our commitment to excellence is reflected in every dish we serve.
            </p>
            <p className="text-gray-600">
              We believe in sustainable practices and work closely with local farmers and suppliers 
              to ensure the highest quality ingredients while supporting our community.
            </p>

            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/20 text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 