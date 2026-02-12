import { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" onClick={scrollToTop} className="text-xl font-bold text-slate-900 tracking-tight">
            JMO Digital Assets
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={scrollToTop} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Home</a>
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="text-sm font-semibold text-white bg-[#1648E6] hover:bg-blue-700 px-5 py-2 rounded-lg transition-colors">Contact</a>
          </div>
          
          <button 
            className="md:hidden text-slate-700 hover:text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 space-y-3">
            <a href="#" onClick={scrollToTop} className="block text-slate-600 hover:text-slate-900 transition-colors py-1">Home</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="block text-slate-600 hover:text-slate-900 transition-colors py-1">Services</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="block text-slate-600 hover:text-slate-900 transition-colors py-1">About</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-center font-semibold text-white bg-[#1648E6] hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors mt-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
