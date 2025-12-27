import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '919391717330';
  const message = 'Hello! I want to start my registration today.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
            <span className="text-emerald-400 text-sm font-semibold">Trusted GST & Tax Consultants</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simplify Your Tax Compliance with
            <span className="text-emerald-500"> Expert Guidance</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Professional GST Registration, Returns Filing, Income Tax Returns & Company Registration services across India. Fast, reliable, and hassle-free compliance solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
            >
              <span>Start Your Registration Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 font-semibold"
            >
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>100% Online Process</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Pan-India Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
