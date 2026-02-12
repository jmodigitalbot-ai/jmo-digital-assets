import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-primary-400 hover:text-primary-300 transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-slate-400 mb-8">Last updated: February 12, 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-300">
              By accessing and using the JMO Digital Assets website (jmodigitalassets.com), 
              you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p className="text-slate-300 mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, 
              databases, functionality, software, website designs, audio, video, text, photographs, 
              and graphics on the Site (collectively, the "Content") and the trademarks, service 
              marks, and logos contained therein (the "Marks") are owned or controlled by us or 
              licensed to us, and are protected by copyright and trademark laws.
            </p>
            <p className="text-slate-300">
              The Content and Marks are provided on the Site "AS IS" for your information and 
              personal use only. Except as expressly provided in these Terms of Service, no part 
              of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, 
              uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, 
              sold, licensed, or otherwise exploited for any commercial purpose whatsoever.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Representations</h2>
            <p className="text-slate-300 mb-4">By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
              <li>Your use of the Site will not violate any applicable law or regulation</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
            <p className="text-slate-300 mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            <p className="text-slate-300">As a user of the Site, you agree not to:</p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Systematically retrieve data or other content from the Site to create or compile a collection, compilation, database, or directory</li>
              <li>Trick, defraud, or mislead us and other users</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person</li>
              <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Service Information</h2>
            <p className="text-slate-300 mb-4">
              The information provided on the Site regarding our services is for informational 
              purposes only. All services are subject to separate service agreements that will 
              be provided to clients upon engagement.
            </p>
            <p className="text-slate-300">
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-slate-300">
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF 
              THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED 
              BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE 
              AND YOUR USE THEREOF.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-300">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY 
              THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, 
              OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER 
              DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE 
              POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p className="text-slate-300">
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, 
              affiliates, and all of our respective officers, agents, partners, and employees, 
              from and against any loss, damage, liability, claim, or demand, including reasonable 
              attorneys' fees and expenses, made by any third party due to or arising out of: 
              (1) your use of the Site; (2) breach of these Terms of Service; (3) any breach of 
              your representations and warranties set forth in these Terms of Service; (4) your 
              violation of the rights of a third party.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-slate-300">
              These Terms of Service and your use of the Site are governed by and construed in 
              accordance with the laws of the State of Delaware applicable to agreements made 
              and to be entirely performed within the State of Delaware, without regard to its 
              conflict of law principles.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-slate-300">
              We reserve the right, in our sole discretion, to make changes or modifications to 
              these Terms of Service at any time and for any reason. We will alert you about any 
              changes by updating the "Last updated" date of these Terms of Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-slate-300">
              In order to resolve a complaint regarding the Site or to receive further information 
              regarding use of the Site, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-900/50 rounded-lg">
              <p className="text-slate-300">JMO Digital Assets, LLC</p>
              <p className="text-slate-300">
                Email: <a href="mailto:support@jmodigitalassets.com" className="text-primary-400 hover:text-primary-300">
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

export default TermsOfService;