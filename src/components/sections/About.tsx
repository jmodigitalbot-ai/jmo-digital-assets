const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JMO Digital Assets</h2>
            <p className="text-xl text-slate-300">
              A boutique approach to performance marketing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary-900/20 to-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h3 className="text-2xl font-bold mb-6">Our Philosophy</h3>
                <p className="text-slate-300 mb-4">
                  Founded in 2016, JMO Digital Assets operates as a boutique agency focused exclusively 
                  on performance marketing for digital products and services. We believe in quality over 
                  quantity—working with a select number of clients to deliver exceptional results.
                </p>
                <p className="text-slate-300">
                  Unlike large agencies with junior teams and rigid processes, we provide senior-level 
                  expertise, hands-on execution, and flexible strategies tailored to each client's 
                  unique goals and challenges.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Performance-First Approach</h4>
                  <p className="text-slate-400">
                    Every strategy is built around measurable ROI and clear business outcomes. 
                    We focus on what actually drives growth, not vanity metrics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Transparent Operations</h4>
                  <p className="text-slate-400">
                    Full visibility into campaign performance, spending, and results. 
                    No hidden fees or opaque reporting—just clear, actionable insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Ad Network Verification</h4>
                  <p className="text-slate-400">
                    Established business entity with verified credentials for major ad platforms 
                    and affiliate networks. We maintain compliance and best practices across all partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">Strategic</div>
                <p className="text-slate-400">Data-informed strategies tailored to your business goals</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">Transparent</div>
                <p className="text-slate-400">Clear reporting and open communication at every step</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">Results-Driven</div>
                <p className="text-slate-400">Focus on measurable outcomes and business impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;