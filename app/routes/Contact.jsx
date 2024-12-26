import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    key: 'location',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    key: 'phone',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    key: 'email',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    key: 'hours',
  },
];

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-secondary mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/20 text-accent">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {t(`contact.info.${info.key}.title`)}
              </h3>
              {t(`contact.info.${info.key}.details`).map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Map */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644262712019!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>

          {/* Private Events */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4">
              {t('contact.events.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('contact.events.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <span className="font-medium">{t('contact.labels.capacity')}</span>
                <span className="ml-2">{t('contact.events.details.capacity')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium">{t('contact.labels.times')}</span>
                <span className="ml-2">{t('contact.events.details.times')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium">{t('contact.labels.menus')}</span>
                <span className="ml-2">{t('contact.events.details.menus')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 