import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">JMO Digital Assets, LLC</h3>
            <p className="text-slate-400 mb-4">
              A boutique performance marketing agency specializing in data-driven growth strategies 
              for digital products and services.
            </p>
            <p className="text-slate-400">
              <a href="mailto:support@jmodigitalassets.com" className="hover:text-white transition-colors">
                support@jmodigitalassets.com
              </a>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-slate-400 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {currentYear} JMO Digital Assets, LLC. All rights reserved.</p>
          <p className="mt-2 text-sm">Founded in 2016 • jmodigitalassets.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;