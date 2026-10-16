import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Farm from './pages/Farm';
import Process from './pages/Process';
import Contact from './pages/Contact';

function App() {
  // Sync page state with window.location.hash for authentic back/forward button support
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'about', 'farm', 'process', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'farm', 'process', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Guarantee that whenever currentPage changes, page view immediately starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentPage]);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF7] text-[#202820] font-body selection:bg-[#E9F3E9] selection:text-[#236B45]">
      {/* Sticky Top Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'farm' && <Farm onNavigate={handleNavigate} />}
        {currentPage === 'process' && <Process onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </main>

      {/* Global Consistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;