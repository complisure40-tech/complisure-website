import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import ServicesHub from './pages/Services/ServicesHub';
import GSTRegistration from './pages/Services/GSTRegistration';
import GSTReturns from './pages/Services/GSTReturns';
import IncomeTaxReturns from './pages/Services/IncomeTaxReturns';
import CompanyRegistration from './pages/Services/CompanyRegistration';
import Contact from './components/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Accessibility from './pages/Accessibility';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/gst-registration" element={<GSTRegistration />} />
            <Route path="/services/gst-returns" element={<GSTReturns />} />
            <Route path="/services/income-tax-returns" element={<IncomeTaxReturns />} />
            <Route path="/services/company-registration" element={<CompanyRegistration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
