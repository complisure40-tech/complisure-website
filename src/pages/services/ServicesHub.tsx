import { FileText, RefreshCw, Calculator, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesHub() {
  const services = [
    {
      icon: FileText,
      title: 'GST Registration',
      description: 'Quick and hassle-free GST registration for businesses. Get your GSTIN in 3-5 working days.',
      link: '/services/gst-registration',
    },
    {
      icon: RefreshCw,
      title: 'GST Returns Filing',
      description: 'Timely filing of all GST returns. Avoid penalties with our expert return filing services.',
      link: '/services/gst-returns',
    },
    {
      icon: Calculator,
      title: 'Income Tax Returns',
      description: 'Professional ITR filing for individuals and businesses. Maximize deductions and ensure compliance.',
      link: '/services/income-tax-returns',
    },
    {
      icon: Building2,
      title: 'Company Registration',
      description: 'Complete company incorporation services with end-to-end support for all business structures.',
      link: '/services/company-registration',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400">
            Comprehensive compliance solutions for all your tax and business registration needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="bg-emerald-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center text-emerald-500 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
