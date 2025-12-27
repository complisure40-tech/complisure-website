import { useSEO } from '../hooks/useSEO';

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy - CompliSure',
    description: 'CompliSure Privacy Policy - Information about how we collect, use, and protect your personal data.',
    canonical: 'https://complisure.com/privacy',
    ogTitle: 'Privacy Policy - CompliSure',
  });
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              CompliSure ("we," "us," or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
            <h3 className="text-xl font-semibold text-white mt-4">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Personal Information (name, email address, phone number, address)</li>
              <li>Business Information (company name, GST number, tax ID)</li>
              <li>Usage Data (IP address, browser type, pages visited)</li>
              <li>Cookies and Similar Technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
            <p>CompliSure uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information for service improvement</li>
              <li>To send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mt-4">
              <p className="font-semibold text-white">CompliSure</p>
              <p>#401, Pillar Number 217, Dairyfarm, Attapur</p>
              <p>Hyderabad, Telangana</p>
              <p>Email: privacy@complisure.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
