const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-[#FDFEFF] to-slate-50" />
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#1648E6] mb-4">
            Performance Marketing Agency · Est. 2016
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Turn Ad Spend Into
            <span className="block text-[#1648E6] mt-1">Measurable Revenue</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            JMO Digital Assets is a boutique agency specializing in paid media, 
            affiliate marketing, and digital product growth for businesses that demand results — not reports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-[#1648E6] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              Get in Touch
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-slate-700 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Our Services
            </a>
          </div>

          {/* Platform trust strip */}
          <div className="mt-20 pt-10 border-t border-slate-200">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-8">
              Campaigns managed across
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
              {/* Google */}
              <svg className="h-8 opacity-60 hover:opacity-100 transition-opacity" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225.75 3.18v62.18h-9.49V3.18h9.49z" fill="#34A853"/>
                <path d="M262.02 51.57l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.96 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.19V32h32.76c.32 1.68.49 3.67.49 5.82 0 7.23-1.98 16.16-8.35 22.53-6.2 6.45-14.11 9.89-24.89 9.89C16.32 70.24 0 54.49 0 35.49S16.32.74 35.3.74c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.35s10.84 25.35 24.7 25.35c8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.12z" fill="#4285F4"/>
              </svg>

              {/* Meta - simple text wordmark */}
              <span className="text-xl font-bold text-[#0668E1]/40 hover:text-[#0668E1] transition-colors">Meta</span>

              {/* YouTube */}
              <svg className="h-6 opacity-60 hover:opacity-100 transition-opacity" viewBox="0 0 159 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M154 17.5c-1.82-6.73-7.07-12-13.8-13.8C128.05 0 78.75 0 78.75 0S29.45 0 17.3 3.7C10.56 5.53 5.3 10.77 3.5 17.5 0 30.05 0 55 0 55s0 25.3 3.5 37.5c1.82 6.73 7.07 12 13.8 13.8C29.8 110 78.75 110 78.75 110s49.3 0 61.45-3.7c6.73-1.82 12-7.07 13.8-13.8 3.5-12.5 3.5-37.5 3.5-37.5s.35-25.3-3.5-37.5z" fill="#FF0000"/>
                <path d="M63 79.5L104 55 63 30.5v49z" fill="white"/>
              </svg>

              {/* Taboola */}
              <span className="text-lg font-bold text-slate-400 hover:text-[#0056FF] transition-colors tracking-tight">taboola</span>

              {/* Outbrain */}
              <span className="text-lg font-bold text-slate-400 hover:text-[#E8590C] transition-colors tracking-tight">outbrain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
