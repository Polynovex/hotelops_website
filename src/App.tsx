import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Pricing } from './pages/Pricing';
import { Why } from './pages/Why';
import { Contact } from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const updateTitle = () => {
      const titles: Record<string, string> = {
        home: 'HotelOpsX - Modern Hotel Management for Nigerian Hotels',
        about: 'About Us - HotelOpsX',
        products: 'Products - HotelOpsX PMS, POS & Finance',
        pricing: 'Pricing Plans - HotelOpsX',
        why: 'Why HotelOpsX - Built for Nigerian Hotels',
        contact: 'Request a Demo - HotelOpsX',
      };
      document.title = titles[currentPage] || 'HotelOpsX';
    };

    updateTitle();
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'why':
        return <Why onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
