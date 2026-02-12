const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-slate-900 to-slate-950" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Performance Marketing for
            <span className="block text-primary-400 mt-2">Digital Products & Services</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            JMO Digital Assets is a boutique agency specializing in data-driven growth strategies, 
            paid media buying, and affiliate marketing for established businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Our Services
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-400">2016</div>
              <div className="text-sm text-slate-400 mt-2">Founded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">100%</div>
              <div className="text-sm text-slate-400 mt-2">Performance Focused</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">Boutique</div>
              <div className="text-sm text-slate-400 mt-2">Agency Model</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400">Data-Driven</div>
              <div className="text-sm text-slate-400 mt-2">Approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;