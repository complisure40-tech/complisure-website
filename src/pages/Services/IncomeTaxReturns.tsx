import { CheckCircle2, TrendingUp, Shield, Users, ArrowRight } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function IncomeTaxReturns() {
  useSEO({
    title: 'Income Tax Return (ITR) Filing Services - Maximize Deductions | CompliSure',
    description: 'Professional ITR filing services for individuals, businesses, and professionals. Maximize tax deductions, get refunds, ensure complete compliance. Expert income tax consultants.',
    keywords: 'income tax return, ITR filing, income tax filing, ITR 1, ITR 2, ITR 3, tax return filing, income tax deductions, ITR online filing',
    canonical: 'https://complisure.com/services/income-tax-returns',
    ogTitle: 'Income Tax Return Filing - Expert ITR Services',
    ogDescription: 'Professional ITR filing with maximum deductions and complete compliance. Fast, accurate income tax returns.',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  const itrTypes = [
    { name: 'ITR-1', eligible: 'Individual with salary/business income up to 50 lakhs' },
    { name: 'ITR-2', eligible: 'Individual with capital gains, investments' },
    { name: 'ITR-3', eligible: 'Sole proprietors and individuals with business income' },
    { name: 'ITR-4', eligible: 'Business income under presumptive scheme' },
    { name: 'ITR-5', eligible: 'Partnership firms and LLP' },
    { name: 'ITR-6', eligible: 'Companies' },
  ];

  const benefits = [
    'Maximize tax deductions',
    'Get income tax refunds',
    'Build credit history',
    'Visa & loan approval support',
    'Maintain compliance',
    'Reduce tax liability',
  ];

  const phoneNumber = '919391717330';
  const message = 'Hello! I want to file my income tax returns.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Income Tax Returns</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Professional ITR filing for individuals, businesses, and professionals. Maximize deductions and ensure complete compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Maximize Returns</h3>
            <p className="text-gray-400 text-sm">Identify all eligible deductions and exemptions to minimize tax liability.</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <Shield className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Complete Compliance</h3>
            <p className="text-gray-400 text-sm">Error-free filing ensuring you stay compliant with income tax regulations.</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <Users className="w-8 h-8 text-emerald-500 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Expert Support</h3>
            <p className="text-gray-400 text-sm">Dedicated support for guidance on complex tax situations and documentation.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Benefits of Filing ITR</h2>
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
          <h2 className="text-2xl font-bold text-white mb-6">ITR Forms We File</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itrTypes.map((itr, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h3 className="text-emerald-500 font-bold mb-2">{itr.name}</h3>
                <p className="text-gray-400 text-sm">{itr.eligible}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">ITR Filing Timeline</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/20 text-emerald-400 font-bold px-4 py-2 rounded text-sm flex-shrink-0">31 July</div>
                <div>
                  <p className="text-white font-semibold">Regular Deadline</p>
                  <p className="text-gray-400 text-sm">File before this date with no penalties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/20 text-orange-400 font-bold px-4 py-2 rounded text-sm flex-shrink-0">31 Dec</div>
                <div>
                  <p className="text-white font-semibold">Extended Deadline</p>
                  <p className="text-gray-400 text-sm">File with late fee if unable to meet July deadline</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 text-red-400 font-bold px-4 py-2 rounded text-sm flex-shrink-0">Year End</div>
                <div>
                  <p className="text-white font-semibold">After Financial Year</p>
                  <p className="text-gray-400 text-sm">Cannot file after financial year end</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-emerald-600/10 border border-emerald-600/30 rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get Your ITR Filed by Experts</h3>
          <p className="text-gray-300 mb-6">
            Let our tax professionals handle your income tax return filing with maximum deductions and complete accuracy.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            <span>File Your ITR Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
