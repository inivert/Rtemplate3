import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Cultura Mixta</h3>
            <p className="text-gray-300 text-sm">
              Crafting unforgettable dining experiences with passion and precision.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-300">
              © {currentYear} Cultura Mixta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 