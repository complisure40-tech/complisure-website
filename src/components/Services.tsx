import { FileText, RefreshCw, Building2, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'GST Registration',
      description: 'Quick and hassle-free GST registration for businesses. Get your GSTIN in 3-5 working days with complete documentation support.',
      features: ['New Registration', 'Amendment Services', 'GST Cancellation', 'LUT Filing'],
      color: 'emerald',
      link: '/services/gst-registration',
    },
    {
      icon: RefreshCw,
      title: 'GST Returns Filing',
      description: 'Timely filing of all GST returns - GSTR-1, GSTR-3B, GSTR-9, and more. Avoid penalties with our expert return filing services.',
      features: ['GSTR-1 & 3B', 'GSTR-9 Annual Return', 'ITC Reconciliation', 'Notice Handling'],
      color: 'blue',
      link: '/services/gst-returns',
    },
    {
      icon: Calculator,
      title: 'Income Tax Returns',
      description: 'Professional ITR filing for individuals, businesses, and professionals. Maximize deductions and ensure compliance.',
      features: ['Individual ITR', 'Business ITR', 'TDS Returns', 'Tax Planning'],
      color: 'purple',
      link: '/services/income-tax-returns',
    },
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Complete company incorporation services including Private Limited, LLP, OPC, and Partnership firms with end-to-end support.',
      features: ['Private Limited', 'LLP Registration', 'OPC Registration', 'Partnership Deed'],
      color: 'orange',
      link: '/services/company-registration',
    },
  ];

  const phoneNumber = '919391717330';
  const message = 'Hello! I want to talk to an expert about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive compliance solutions tailored for businesses of all sizes across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-emerald-500/10 p-3 rounded-xl">
                  <service.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={service.link}
                className="group/btn w-full bg-gray-700 hover:bg-emerald-600 text-white py-3 rounded-lg transition-all flex items-center justify-center space-x-2 font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            <span>Talk to Our Expert Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
