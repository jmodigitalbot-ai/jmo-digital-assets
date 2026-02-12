import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Link to="/" className="text-primary-400 hover:text-primary-300 transition-colors">
          ← Back to Home
        </Link>
      </div>
      
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: February 12, 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-slate-300 mb-4">
              JMO Digital Assets, LLC ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website jmodigitalassets.com (the "Site").
            </p>
            <p className="text-slate-300">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this 
              Privacy Policy, please do not access the Site.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">Personal Data</h3>
            <p className="text-slate-300 mb-4">
              We may collect personally identifiable information that you voluntarily provide to us 
              when you:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2 mb-4">
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Apply for a position with us</li>
            </ul>
            <p className="text-slate-300">
              Personal data may include your name, email address, phone number, company name, 
              and any other information you choose to provide.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-slate-300">
              When you visit our Site, we may automatically collect certain information about your 
              device, including information about your web browser, IP address, time zone, and 
              some of the cookies that are installed on your device.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-300 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent activity</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-slate-300 mb-4">
              We may use cookies and similar tracking technologies to track activity on our Site 
              and hold certain information. Cookies are files with a small amount of data that may 
              include an anonymous unique identifier.
            </p>
            <p className="text-slate-300">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is 
              being sent. However, if you do not accept cookies, you may not be able to use some 
              portions of our Site.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-slate-300">
              We implement appropriate technical and organizational security measures to protect 
              your personal information. However, please note that no method of transmission over 
              the Internet or method of electronic storage is 100% secure.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Data Protection Rights</h2>
            <p className="text-slate-300 mb-4">
              Depending on your location, you may have the following rights regarding your 
              personal data:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request correction of inaccurate information</li>
              <li>The right to erasure – You have the right to request deletion of your personal data</li>
              <li>The right to restrict processing – You have the right to request restriction of processing</li>
              <li>The right to data portability – You have the right to request transfer of your data</li>
              <li>The right to object to processing – You have the right to object to our processing</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="text-slate-300">
              We may employ third-party companies and individuals to facilitate our Site, provide 
              services on our behalf, or assist us in analyzing how our Site is used. These third 
              parties have access to your personal information only to perform these tasks on our 
              behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-slate-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-slate-300">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;