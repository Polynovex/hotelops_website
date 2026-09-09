import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { NigeriaBanner } from "./components/NigeriaBanner";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Pricing } from "./pages/Pricing";
import { Why } from "./pages/Why";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Resources } from "./pages/Resources";
import { applyPageSeo } from "./utils/seo";
import {
  initAnalytics,
  installScrollTracking,
  resetScrollTracking,
  trackPageView,
} from "./utils/analytics";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Loaded once, and only when a measurement ID is configured.
  useEffect(() => {
    initAnalytics();
    const teardown = installScrollTracking();
    return teardown;
  }, []);

  useEffect(() => {
    /**
     * Title, description, Open Graph and canonical all come from one table, so
     * every page carries its own. Navigation is state-based, so nothing else
     * updates the document head when the page changes.
     */
    applyPageSeo(currentPage);
    resetScrollTracking();
    trackPageView(currentPage);

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
      case "resources":
        return <Resources onNavigate={handleNavigate} />;
      case "privacy":
        return <Privacy />;
      case "terms":
        return <Terms onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Above the navigation: who this is for, before anything else */}
      <NigeriaBanner />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
