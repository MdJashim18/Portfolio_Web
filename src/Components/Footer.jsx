import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/jashim', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/jashim', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/jashim', label: 'Twitter' },
    { icon: <FaFacebook />, href: 'https://facebook.com/jashim', label: 'Facebook' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-base-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <a href="#home" className="text-2xl font-bold text-primary mb-4 inline-block">
              Jashim<span className="text-secondary">.</span>
            </a>
            <p className="text-gray-600 mb-4">
              Full Stack Developer passionate about creating amazing web experiences and solving complex problems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:btn-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get updates on my latest projects and blog posts.
            </p>
            <div className="join w-full">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered join-item flex-1"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {currentYear} Mohammad Jashim Uddin. All rights reserved.
            </p>
            <p className="text-gray-600 flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;