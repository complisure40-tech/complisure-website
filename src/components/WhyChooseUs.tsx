import { Shield, Zap, Headphones, DollarSign, Target, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your data is completely secure with us. We follow strict confidentiality protocols and data protection standards.',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick turnaround time for all services. Get your registrations and returns filed without any delays.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Dedicated expert assistance at every step. Our experienced consultants are always ready to help you.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear and competitive pricing with detailed breakup for all our services.',
    },
    {
      icon: Target,
      title: '100% Compliance',
      description: 'We ensure full compliance with latest tax regulations and government norms for all your filings.',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Successfully served 5000+ clients with 99.9% success rate in registrations and return filings.',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-emerald-500">CompliSure</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted partner for all tax compliance needs with unmatched expertise and service quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
            >
              <div className="bg-emerald-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
