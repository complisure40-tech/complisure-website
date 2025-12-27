import { useSEO } from '../hooks/useSEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import Stats from '../components/Stats';

export default function Home() {
  useSEO({
    title: 'CompliSure - GST Registration, Tax Returns & Company Registration Services',
    description: 'Get professional GST registration, GST returns filing, income tax returns (ITR), and company registration services across India. Fast, reliable, hassle-free tax compliance for businesses of all sizes.',
    keywords: 'GST registration India, GST returns filing, income tax returns, ITR filing, company registration, tax consultant, business compliance services',
    canonical: 'https://complisure.com',
    ogTitle: 'CompliSure - Expert GST & Tax Services',
    ogDescription: 'Professional tax compliance services: GST registration, ITR filing, company registration across India',
    ogImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'CompliSure',
      'description': 'Professional tax compliance and business registration services',
      'url': 'https://complisure.com',
      'telephone': '+919391717330',
      'areaServed': 'IN',
    },
  });

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
    </>
  );
}
