import { Building2, CheckCircle2, Zap, Shield, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function CompanyRegistration() {
  useSEO({
    title: 'Company Registration Services - Private Limited, LLP, OPC | CompliSure',
    description: 'Fast company registration services - Private Limited, LLP, OPC, Partnership Firm. Complete incorporation with expert guidance. Get registered in minimal days.',
    keywords: 'company registration, private limited company, LLP registration, OPC registration, partnership registration, business incorporation, company registration India',
    canonical: 'https://complisure.com/services/company-registration',
    ogTitle: 'Company Registration Services - Expert & Fast',
    ogDescription: 'Professional company registration with complete guidance. Private Limited, LLP, OPC registration services.',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  const companyTypes = [
    {
      name: 'Private Limited Company',
      description: 'Best for startups and enterprises with multiple shareholders',
      benefits: ['Limited liability', '3-7 directors required', 'Minimum 2 shareholders', 'Professional structure'],
    },
    {
      name: 'Limited Liability Partnership (LLP)',
      description: 'Perfect for professional services and partnerships',
      benefits: ['Partner liability limited', '2+ partners required', 'Flexible management', 'Easy compliance'],
    },
    {
      name: 'One Person Company (OPC)',
      description: 'Ideal for solopreneurs and solo entrepreneurs',
      benefits: ['Single owner allowed', 'Limited liability', 'Professional structure', 'Easier than Pvt Ltd'],
    },
    {
      name: 'Partnership Firm',
      description: 'Suitable for joint business ventures',
      benefits: ['Minimal compliance', '2+ partners', 'Simple registration', 'Low cost'],
    },
  ];

  const benefits = [
    'Separate legal entity status',
    'Limited liability protection',
    'Easy fund raising and loans',
    'Perpetual succession',
    'Professional credibility',
    'Tax benefits and deductions',
  ];

  const phoneNumber = '919391717330';
  const message = 'Hello! I want to register my company.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Company Registration</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Complete company incorporation services including Private Limited, LLP, OPC, and Partnership firms with end-to-end support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <Zap className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Fast Processing</h3>
            <p className="text-gray-400 text-sm">Quick incorporation with approval in minimal days.</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <Building2 className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Full Support</h3>
            <p className="text-gray-400 text-sm">Complete guidance from registration to post-incorporation.</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <Shield className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Expert Handling</h3>
            <p className="text-gray-400 text-sm">Expert professionals managing your entire process.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Register Your Company?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-600/30 rounded-xl p-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Company Types We Handle</h2>
          <div className="space-y-6">
            {companyTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
                <h3 className="text-xl font-bold text-emerald-500 mb-2">{type.name}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {type.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Registration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Name Approval', 'Document Prep', 'Online Filing', 'Verification', 'Certificate'].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-white font-semibold text-sm mt-4">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-600/30 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Register Your Company?</h3>
          <p className="text-gray-300 mb-6">
            Let our experts guide you through the complete registration process. We handle all documentation and compliance.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            <span>Start Registration Today</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
