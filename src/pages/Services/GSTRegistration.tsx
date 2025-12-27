import { CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function GSTRegistration() {
  useSEO({
    title: 'GST Registration Services - Fast & Hassle-Free | CompliSure',
    description: 'Get your GST registration in 3-5 working days with complete documentation support. Fast, reliable GST GSTIN registration services across India. Expert GST consultants.',
    keywords: 'GST registration, GSTIN registration, GST registration online, GST registration India, GST number registration, fast GST registration',
    canonical: 'https://complisure.com/services/gst-registration',
    ogTitle: 'GST Registration Services - Expert & Fast',
    ogDescription: 'Professional GST registration with complete documentation support. Get GSTIN in 3-5 working days.',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  const benefits = [
    'Expand business across states',
    'Access GST credit benefits',
    'Build customer trust',
    'Compliance with regulations',
    'Avail input tax credit',
    'Sell online without restrictions',
  ];

  const documents = [
    'PAN Card (Copy)',
    'Aadhar Card (Copy)',
    'Address Proof',
    'Business Registration (if applicable)',
    'Bank Account Details',
    'Recent ITR (if available)',
  ];

  const phoneNumber = '919391717330';
  const message = 'Hello! I want to start my GST registration.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">GST Registration</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Fast, hassle-free GST registration for businesses. Get your GSTIN in 3-5 working days with complete documentation support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-white">Quick Turnaround</h3>
            </div>
            <p className="text-gray-400">
              Get your GSTIN in 3-5 working days. Our streamlined process ensures fastest possible registration.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-white">Document Support</h3>
            </div>
            <p className="text-gray-400">
              We guide you through documentation with expert support at every step.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-600/30 rounded-xl p-12 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Get GST Registration?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Documents Required</h2>
            <div className="space-y-3">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-gray-800/30 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-300">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Eligibility Criteria</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Business Turnover</h3>
                <p className="text-gray-400 text-sm">Businesses with annual turnover above 40 lakhs (20 lakhs for special category states) require GST registration.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Business Type</h3>
                <p className="text-gray-400 text-sm">Applicable to traders, manufacturers, service providers, and e-commerce sellers.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Age Criteria</h3>
                <p className="text-gray-400 text-sm">Individual should be 18+ years old with valid PAN and Aadhar.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Document Collection', 'Verification', 'Online Filing', 'GSTIN Receipt'].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-white font-semibold mt-4">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-600/30 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Your GSTIN?</h3>
          <p className="text-gray-300 mb-6">
            Let our experts handle your GST registration. Contact us today for quick and hassle-free setup.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            <span>Start Registration Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
