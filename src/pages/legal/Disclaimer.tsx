import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
        <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
        <p className="text-slate-600 mb-8">Last updated: February 12, 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. No Guarantees of Results</h2>
            <p className="text-slate-700 mb-4">
              The information contained on the JMO Digital Assets website (jmodigitalassets.com) 
              is for general information purposes only. While we strive to provide accurate and 
              up-to-date information, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, 
              or availability with respect to the website or the information, products, services, 
              or related graphics contained on the website for any purpose.
            </p>
            <p className="text-slate-700">
              Any reliance you place on such information is therefore strictly at your own risk. 
              Past performance does not guarantee future results. The results described on this 
              website are not typical and are not guaranteed. Your results may vary.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Marketing Services Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              JMO Digital Assets provides digital marketing services, including but not limited 
              to performance marketing, paid media buying, and affiliate marketing management. 
              We do not guarantee specific results, returns on investment, or business outcomes 
              from our services.
            </p>
            <p className="text-slate-700">
              Marketing results are influenced by numerous factors beyond our control, including 
              market conditions, product quality, competition, economic factors, and client 
              execution. All marketing investments carry risk, and past performance is not 
              indicative of future results.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Testimonials and Case Studies</h2>
            <p className="text-slate-700 mb-4">
              The testimonials and case studies presented on this website reflect the real-life 
              experiences and opinions of actual clients. However, the experiences are personal 
              to those particular clients and may not necessarily be representative of all 
              clients of JMO Digital Assets.
            </p>
            <p className="text-slate-700">
              We do not claim, and you should not assume, that all clients will have the same 
              experiences. Your individual results may vary.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. No Professional Advice</h2>
            <p className="text-slate-700 mb-4">
              The information on this website is not intended as, and shall not be understood 
              or construed as, professional advice. The information contained on this website 
              is not a substitute for advice from a professional who is aware of the facts and 
              circumstances of your individual situation.
            </p>
            <p className="text-slate-700">
              Nothing available on or through this website should be understood as a 
              recommendation that you should not consult with a professional to address your 
              particular information. JMO Digital Assets expressly recommends that you seek 
              advice from professionals as appropriate.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. External Links Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              Our website may contain links to external websites that are not provided or 
              maintained by or in any way affiliated with JMO Digital Assets. Please note that 
              we do not guarantee the accuracy, relevance, timeliness, or completeness of any 
              information on these external websites.
            </p>
            <p className="text-slate-700">
              We are not responsible for the content, privacy policies, or practices of any 
              third-party sites or services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Affiliate Marketing Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              JMO Digital Assets may participate in affiliate marketing and may allow affiliate 
              links to be included on some of our pages. This means that we may earn a commission 
              if/when you click on or make purchases via affiliate links.
            </p>
            <p className="text-slate-700">
              As a policy, JMO Digital Assets will only affiliate with products, services, 
              coaches, consultants, and other experts that we believe will provide value to our 
              customers and followers.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Fair Use Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              This website may contain copyrighted material the use of which has not always been 
              specifically authorized by the copyright owner. We are making such material available 
              in our efforts to advance understanding of marketing, business, and economic issues.
            </p>
            <p className="text-slate-700">
              We believe this constitutes a "fair use" of any such copyrighted material as provided 
              for in section 107 of the US Copyright Law.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. No Warranties</h2>
            <p className="text-slate-700">
              JMO Digital Assets makes no warranties regarding the performance or operation of 
              this website. JMO Digital Assets further makes no representations or warranties 
              of any kind, express or implied, as to the information, contents, materials, 
              documents, programs, products, books, or services included on or through this 
              website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-700">
              You agree to absolve JMO Digital Assets of any and all liability or loss that you 
              or any person or entity associated with you may suffer or incur as a result of use 
              of the information contained on this website and/or the resources you may download 
              from this website. You agree that JMO Digital Assets shall not be liable to you 
              for any type of damages, including direct, indirect, special, incidental, equitable, 
              or consequential loss or damages for use of this website.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-slate-700">
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white/50 rounded-lg">
              <p className="text-slate-700">JMO Digital Assets, LLC</p>
              <p className="text-slate-700">
                Email: <a href="mailto:support@jmodigitalassets.com" className="text-blue-400 hover:text-blue-300">
                  support@jmodigitalassets.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;