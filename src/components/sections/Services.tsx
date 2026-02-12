const Services = () => {
  const services = [
    {
      title: "Paid Media Buying",
      description: "Strategic campaign management across Google, Meta, YouTube, and native platforms. We buy traffic that converts — not just clicks.",
      icon: "📊",
    },
    {
      title: "Performance Marketing",
      description: "End-to-end growth strategies built around measurable ROI, conversion optimization, and scalable customer acquisition.",
      icon: "📈",
    },
    {
      title: "Affiliate Marketing",
      description: "Program management, network partnerships, and performance-based strategies to expand reach through trusted channels.",
      icon: "🤝",
    },
    {
      title: "Digital Product Strategy",
      description: "Go-to-market planning, launch strategies, and ongoing optimization for digital courses, SaaS, and subscription businesses.",
      icon: "🚀",
    },
    {
      title: "Analytics & Attribution",
      description: "Comprehensive tracking, data analysis, and attribution modeling so you know exactly what's working and what's not.",
      icon: "🎯",
    },
    {
      title: "Creative Strategy",
      description: "Data-informed creative development and A/B testing frameworks that improve campaign performance over time.",
      icon: "✏️",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#1648E6] mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized marketing solutions for businesses that want growth they can measure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#1648E6]/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
