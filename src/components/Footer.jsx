import React from 'react';
import { Phone, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    scrollToTop();
  };

  return (
    <footer className="bg-[#153F2C] text-[#E9F3E9] pt-16 pb-12 border-t border-[#236B45]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#236B45]/40">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/Logo.jpg" 
                alt="Dairy & Pasture Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-sm"
              />
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Dairy & Pasture
              </span>
            </div>
            <p className="text-sm text-[#E9F3E9]/80 leading-relaxed">
              Rooted in the farm and focused on quality. Bringing fresh cow and goat milk from Lahore's green pastures to your family table through careful handling, filtration, and hygienic packaging.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#236B45] text-white text-xs px-3 py-1 rounded-full font-medium">
                Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-4">
              Explore Our Farm
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white text-[#E9F3E9]/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#236B45]"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white text-[#E9F3E9]/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#236B45]"></span>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('farm')}
                  className="hover:text-white text-[#E9F3E9]/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#236B45]"></span>
                  Our Farm (Cows & Goats)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('process')}
                  className="hover:text-white text-[#E9F3E9]/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#236B45]"></span>
                  Process & Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white text-[#E9F3E9]/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#236B45]"></span>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#E9F3E9]/80">
              <li>
                <a 
                  href="tel:03015099459" 
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#236B45] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#153F2C] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#E9F3E9]/60">Call Us Directly</span>
                    <span className="font-medium text-white">0301-5099459</span>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="https://wa.me/923015099459?text=Assalamualaikum%2C%20I%20would%20like%20to%20know%20more%20about%20Dairy%20%26%20Pasture%20and%20your%20dairy%20products." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#E9F3E9]/60">WhatsApp Inquiry</span>
                    <span className="font-medium text-white">+92 301 5099459</span>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#236B45] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-xs text-[#E9F3E9]/60">Location</span>
                  <span className="font-medium text-white">Lahore, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Ethics */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-4">
              Connect on Instagram
            </h3>
            <p className="text-sm text-[#E9F3E9]/80 mb-4">
              Follow our official Instagram profile for updates from our farm, animal care routines, and product availability.
            </p>
            <a 
              href="https://www.instagram.com/dairyandpasture?cplk=MXgwcnV6ZmMzaTR0cg%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-gradient-to-r from-[#236B45] to-[#1e5839] hover:from-[#2e8255] hover:to-[#236B45] text-white text-sm font-medium border border-white/10 transition-all duration-200 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@dairyandpasture</span>
            </a>
            <div className="mt-4 text-xs text-[#E9F3E9]/60 flex items-center gap-1.5">
              <span>Hygienic milk handling • Ethical care</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9F3E9]/70">
          <p>© {new Date().getFullYear()} Dairy & Pasture. All rights reserved. Lahore, Pakistan.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" /> for Pakistani Dairy Farming
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#236B45]/60 hover:bg-[#236B45] text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
