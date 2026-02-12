const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#1648E6] mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why JMO Digital Assets</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                JMO Digital Assets has operated as a boutique performance marketing agency since 2016. 
                We focus exclusively on digital products and services — and we keep our client roster small on purpose.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unlike large agencies where your account gets handed off to a junior team, we provide 
                senior-level strategy, hands-on execution, and direct communication. No layers. No runaround.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We work with businesses that want a partner who's accountable to outcomes, 
                not billable hours. If the campaigns aren't performing, we fix them — not the reports.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#1648E6] font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">Performance-First</h4>
                  <p className="text-slate-600 text-sm">
                    Every strategy is built around measurable ROI and clear business outcomes. 
                    We track what matters, not vanity metrics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#1648E6] font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">Full Transparency</h4>
                  <p className="text-slate-600 text-sm">
                    Complete visibility into campaign performance, spending, and results. 
                    No hidden fees. No opaque reporting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#1648E6] font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900">Verified & Compliant</h4>
                  <p className="text-slate-600 text-sm">
                    Established business entity with verified credentials across major ad platforms 
                    and affiliate networks since 2016.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
