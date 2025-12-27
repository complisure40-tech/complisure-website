import { FileSearch, UserCheck, FileCheck, ThumbsUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileSearch,
      title: 'Share Requirements',
      description: 'Fill out a simple form or contact us with your service requirements and business details.',
    },
    {
      icon: UserCheck,
      title: 'Expert Consultation',
      description: 'Our expert will review your requirements and guide you on the best approach and documentation needed.',
    },
    {
      icon: FileCheck,
      title: 'Documentation & Filing',
      description: 'We handle all the paperwork, documentation, and filing processes on your behalf with complete accuracy.',
    },
    {
      icon: ThumbsUp,
      title: 'Completion & Support',
      description: 'Receive your registration/returns confirmation with continued support for future compliance needs.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="text-emerald-500">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple, transparent process to get your compliance done in 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                <div className="absolute -top-4 left-6 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="bg-emerald-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
