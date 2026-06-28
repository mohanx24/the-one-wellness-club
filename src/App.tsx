import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Lenis from 'lenis';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetail from './pages/ProgramDetail';
import CoachesPage from './pages/CoachesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

// Scroll restoration helper to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    // Animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden flex flex-col justify-between">
        <ScrollToTop />
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/coach" element={<CoachesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Dynamic Program Routes */}
            <Route path="/programs/:id" element={<ProgramDetail />} />

            {/* Legacy/Direct route mappings to match the Framer template links */}
            <Route path="/gym" element={<ProgramDetail id="strength-powerlifting" />} />
            <Route path="/yoga" element={<ProgramDetail id="hiit-cardio" />} />
            <Route path="/kickfit" element={<ProgramDetail id="personal-training" />} />
            <Route path="/group-x" element={<ProgramDetail id="group-classes" />} />

            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
