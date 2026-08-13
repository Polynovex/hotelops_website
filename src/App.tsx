import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Pricing } from "./pages/Pricing";
import { Why } from "./pages/Why";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const updateTitle = () => {
      const titles: Record<string, string> = {
        home: "HotelOpX - Modern Hotel Management for Nigerian Hotels",
        about: "About Us - HotelOpX",
        products: "Products - HotelOpX PMS, POS & Finance",
        pricing: "Pricing Plans - HotelOpX",
        why: "Why HotelOpX - Built for Nigerian Hotels",
        contact: "Request a Demo - HotelOpX",
        privacy: "Privacy Notice - HotelOpX",
      };
      document.title = titles[currentPage] || "HotelOpX";
    };

    updateTitle();

    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "about":
        return <About />;
      case "products":
        return <Products onNavigate={handleNavigate} />;
      case "pricing":
        return <Pricing onNavigate={handleNavigate} />;
      case "why":
        return <Why onNavigate={handleNavigate} />;
      case "contact":
        return <Contact onNavigate={handleNavigate} />;
      case "privacy":
        return <Privacy />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
