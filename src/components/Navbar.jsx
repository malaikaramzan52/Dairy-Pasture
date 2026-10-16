import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'farm', label: 'Farm' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#DCE5DD] shadow-[0_2px_10px_rgba(35,107,69,0.04)]">
      {/* Top subtle notification bar for local context */}
      <div className="bg-[#153F2C] text-[#E9F3E9] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <span className="font-medium tracking-wide">
            🌱 Farm-Fresh Dairy & Pasture-Raised Quality — Lahore, Pakistan
          </span>
          <div className="flex items-center gap-6 text-xs">
            <a 
              href="tel:03015099459" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E9F3E9]" />
              <span>0301-5099459</span>
            </a>
            <a 
              href="https://wa.me/923015099459?text=Assalamualaikum%2C%20I%20would%20like%20to%20know%20more%20about%20Dairy%20%26%20Pasture%20and%20your%20dairy%20products." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E9F3E9]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="Dairy & Pasture Home"
        >
          <img 
            src="/Logo.jpg" 
            alt="Dairy & Pasture Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-[#236B45]/20 shadow-sm group-hover:scale-105 transition-transform duration-200"
          />
          <div>
            <span className="font-heading font-bold text-xl sm:text-22px tracking-tight text-[#153F2C] block leading-tight">
              Dairy & Pasture
            </span>
            <span className="text-[11px] font-medium text-[#657168] tracking-wider uppercase block">
              Pure Farm • Lahore
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-[15px] font-medium transition-all duration-200 rounded-md cursor-pointer ${
                  isActive
                    ? 'text-[#236B45] font-semibold bg-[#E9F3E9]/70 relative'
                    : 'text-[#202820] hover:text-[#236B45] hover:bg-[#F8FAF7]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-[2px] bg-[#236B45] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-[#236B45] hover:bg-[#153F2C] text-white text-[15px] font-semibold px-5 py-2.5 rounded-[8px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#153F2C] hover:bg-[#E9F3E9] rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE5DD] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 text-left text-[16px] font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'text-[#236B45] font-semibold bg-[#E9F3E9]'
                      : 'text-[#202820] hover:bg-[#F8FAF7]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#236B45]"></span>}
                </button>
              );
            })}
            
            <div className="pt-3 border-t border-[#DCE5DD] mt-2 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#236B45] text-white text-center font-semibold py-3 rounded-[8px] hover:bg-[#153F2C] transition-colors cursor-pointer"
              >
                Get in Touch
              </button>

              <div className="flex justify-between items-center px-2 pt-1 text-xs text-[#657168]">
                <span>Call: 0301-5099459</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
