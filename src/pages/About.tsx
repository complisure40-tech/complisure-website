import { CheckCircle2, Award, Users, Target } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About CompliSure - Expert Tax Compliance Services',
    description: 'Learn about CompliSure - your trusted partner for GST registration, tax returns filing, and company registration. Expert team with years of experience serving businesses across India.',
    keywords: 'about CompliSure, tax consultants, GST experts, business registration services, tax compliance experts',
    canonical: 'https://complisure.com/about',
    ogTitle: 'About CompliSure - Trusted Tax Compliance Partner',
    ogDescription: 'Expert tax consultants dedicated to simplifying tax compliance for businesses across India.',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  });
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About CompliSure</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Trusted partner for GST and tax compliance solutions serving businesses across India with professionalism, expertise, and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To simplify tax compliance for businesses of all sizes by providing expert, reliable, and hassle-free services that enable entrepreneurs to focus on their core business while we handle their tax obligations.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To be the most trusted and preferred tax consultancy partner across India, known for innovation, integrity, and delivering exceptional value to our clients through cutting-edge solutions and personalized service.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-600/30 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why We Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <Award className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Proven Expertise</h3>
                <p className="text-gray-300">Years of experience in tax compliance with deep knowledge of GST, Income Tax, and company registration regulations.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Users className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Client Focused</h3>
                <p className="text-gray-300">Dedicated support team ensuring every client receives personalized attention and timely assistance.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Target className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">Pan-India Service</h3>
                <p className="text-gray-300">Operating across all states and union territories, serving businesses of all sizes nationwide.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold mb-2">100% Compliance</h3>
                <p className="text-gray-300">Strict adherence to all tax regulations and government guidelines for complete peace of mind.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <p className="text-gray-400 leading-relaxed mb-4">
              CompliSure is led by experienced tax consultants and professionals with extensive experience in GST, Income Tax, and corporate law. Our team stays updated with the latest tax regulations and continuously enhances their expertise to serve our clients better.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each team member is committed to delivering excellence and building long-term relationships with our clients based on trust, transparency, and quality service.
            </p>
          </div>
        </div>

        <div className="text-center bg-gray-800/30 border border-gray-700 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
          <p className="text-gray-400 mb-6">
            Experience hassle-free tax compliance with CompliSure. Contact us today to discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
