import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    key: 'hours',
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    key: 'cuisine',
  },
  {
    icon: <Users className="w-6 h-6" />,
    key: 'capacity',
  },
];

const teamMembers = [
  {
    key: 'chef',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
  },
  {
    key: 'pastry',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3',
  },
  {
    key: 'sommelier',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3',
  },
];

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-secondary mb-6">
              {t('about.story.title')}
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              {t('about.story.description1')}
            </p>
            <p className="text-gray-600 text-lg">
              {t('about.story.description2')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/20 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {t(`about.features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`about.features.${feature.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={t(`about.team.members.${member.key}.name`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary mb-1">
                    {t(`about.team.members.${member.key}.name`)}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {t(`about.team.members.${member.key}.role`)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {t(`about.team.members.${member.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 