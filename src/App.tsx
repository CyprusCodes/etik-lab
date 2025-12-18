import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Corporate from "./pages/Corporate";
import Timeline from "./pages/Timeline";
import Career from "./pages/Career";
import Team from "./pages/Team";
import Services from "./pages/Services";
import OutpatientServices from "./pages/services/OutpatientServices";
import HomeSampleCollection from "./pages/services/HomeSampleCollection";
import GeneticTests from "./pages/services/GeneticTests";
import SMATest from "./pages/services/SMATest";
import CorporateServices from "./pages/services/CorporateServices";
import CovidTests from "./pages/services/CovidTests";
import TestPanels from "./pages/TestPanels";
import STDPanel from "./pages/panels/STDPanel";
import AnemiaPanel from "./pages/panels/AnemiaPanel";
import CeliacPanel from "./pages/panels/CeliacPanel";
import DiabetesPanel from "./pages/panels/DiabetesPanel";
import ColonCancerPanel from "./pages/panels/ColonCancerPanel";
import RheumatologyPanel from "./pages/panels/RheumatologyPanel";
import ThyroidPanel from "./pages/panels/ThyroidPanel";
import TORCHPanel from "./pages/panels/TORCHPanel";
import CheckUp from "./pages/CheckUp";
import SportsCheckUp from "./pages/SportsCheckUp";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import TestTracking from "./pages/TestTracking";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/etik-lab">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* About */}
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/hakkimizda/kurumsal" element={<Corporate />} />
          <Route path="/hakkimizda/zaman-tuneli" element={<Timeline />} />
          <Route path="/hakkimizda/ekibimiz" element={<Team />} />
          <Route path="/kariyer" element={<Career />} />

          {/* Services */}
          <Route path="/hizmetlerimiz" element={<Services />} />
          <Route
            path="/hizmetlerimiz/ayaktan-hasta"
            element={<OutpatientServices />}
          />
          <Route
            path="/hizmetlerimiz/evde-numune"
            element={<HomeSampleCollection />}
          />
          <Route
            path="/hizmetlerimiz/genetik-testler"
            element={<GeneticTests />}
          />
          <Route path="/hizmetlerimiz/sma-testi" element={<SMATest />} />
          <Route
            path="/hizmetlerimiz/kurumsal"
            element={<CorporateServices />}
          />
          <Route path="/hizmetlerimiz/covid" element={<CovidTests />} />

          {/* Test Panels */}
          <Route path="/test-panelleri" element={<TestPanels />} />
          <Route
            path="/test-panelleri/cinsel-hastaliklar"
            element={<STDPanel />}
          />
          <Route path="/test-panelleri/anemi" element={<AnemiaPanel />} />
          <Route path="/test-panelleri/colyak" element={<CeliacPanel />} />
          <Route path="/test-panelleri/diyabet" element={<DiabetesPanel />} />
          <Route
            path="/test-panelleri/kolon-kanseri"
            element={<ColonCancerPanel />}
          />
          <Route
            path="/test-panelleri/romatoloji"
            element={<RheumatologyPanel />}
          />
          <Route path="/test-panelleri/tiroid" element={<ThyroidPanel />} />
          <Route path="/test-panelleri/torch" element={<TORCHPanel />} />

          {/* Check-Up */}
          <Route path="/check-up" element={<CheckUp />} />
          <Route path="/check-up/sporcu-paketi" element={<SportsCheckUp />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Contact & Forms */}
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/test-takibi" element={<TestTracking />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
