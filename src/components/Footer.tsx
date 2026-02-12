import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">JMO Digital Assets, LLC</h3>
            <p className="text-sm leading-relaxed">
              Boutique performance marketing agency specializing in paid media, 
              affiliate marketing, and digital product growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
            <p className="mt-4 text-sm">
              <a href="mailto:support@jmodigitalassets.com" className="hover:text-white transition-colors">
                support@jmodigitalassets.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {currentYear} JMO Digital Assets, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
