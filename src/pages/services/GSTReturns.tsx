import { AlertCircle, Calendar, FileCheck, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function GSTReturns() {
  useSEO({
    title: 'GST Returns Filing - GSTR-1, GSTR-3B, GSTR-9 | CompliSure',
    description: 'Expert GST returns filing services - GSTR-1, GSTR-3B, GSTR-9, GSTR-9C. Timely filing, maximum ITC benefits, avoid penalties. Professional GST compliance support.',
    keywords: 'GST returns filing, GSTR-1 filing, GSTR-3B filing, GSTR-9 filing, GST returns online, GST return services, ITC reconciliation',
    canonical: 'https://complisure.com/services/gst-returns',
    ogTitle: 'GST Returns Filing Services - Expert & Timely',
    ogDescription: 'Professional GST returns filing with maximum tax benefits. GSTR-1, 3B, 9 filing with expert support.',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  const returns = [
    { name: 'GSTR-1', description: 'Monthly/Quarterly outward supplies return' },
    { name: 'GSTR-3B', description: 'Monthly/Quarterly consolidated return' },
    { name: 'GSTR-9', description: 'Annual GST return' },
    { name: 'GSTR-9C', description: 'Reconciliation statement for ITC' },
  ];

  const penalties = [
    'Late filing penalties up to ₹10,000',
    'Interest on delayed payment',
    'Suspension of GSTIN',
    'Legal notices and scrutiny',
  ];

  const phoneNumber = '919391717330';
  const message = 'Hello! I want to file my GST returns.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">GST Returns Filing</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Expert filing of all GST returns - GSTR-1, GSTR-3B, GSTR-9, and more. Avoid penalties with our timely and accurate filing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-white">Timely Filing</h3>
            </div>
            <p className="text-gray-400">
              We ensure all returns are filed within deadlines, helping you avoid penalties and keep your registration active.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileCheck className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-white">Accurate Reporting</h3>
            </div>
            <p className="text-gray-400">
              Precise data entry and verification ensures accurate returns with maximum ITC benefits.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">GST Returns We File</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {returns.map((ret, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-emerald-500 mb-2">{ret.name}</h3>
                <p className="text-gray-400">{ret.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-12 mb-12">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Consequences of Late Filing</h2>
              <ul className="space-y-3">
                {penalties.map((penalty, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{penalty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Filing Deadlines</h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded text-sm font-semibold flex-shrink-0">GSTR-1</div>
              <div>
                <p className="text-white font-semibold mb-1">Monthly/Quarterly Filing</p>
                <p className="text-gray-400 text-sm">Usually 11th of next month (or 15th for QRMP)</p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded text-sm font-semibold flex-shrink-0">GSTR-3B</div>
              <div>
                <p className="text-white font-semibold mb-1">Monthly/Quarterly Filing</p>
                <p className="text-gray-400 text-sm">Usually 20th of next month (or 22nd for QRMP)</p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex items-start space-x-4">
              <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded text-sm font-semibold flex-shrink-0">GSTR-9</div>
              <div>
                <p className="text-white font-semibold mb-1">Annual Filing</p>
                <p className="text-gray-400 text-sm">31st December (or 14th January with late fee)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-600/30 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Never Miss a Filing Deadline Again</h3>
          <p className="text-gray-300 mb-6">
            Let us handle all your GST return filings. We ensure accuracy, timely submission, and maximum tax benefits.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            <span>File Your Returns Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
