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
import CovidTestleri from "./pages/services/CovidTestleri";
import GenetikTestleri from "./pages/services/GenetikTestleri";
import SmaTesti from "./pages/services/SmaTesti";
import AyaktanHasta from "./pages/services/AyaktanHasta";
import EvdeKanAlma from "./pages/services/EvdeKanAlma";
import KurumsalHizmetler from "./pages/services/KurumsalHizmetler";
import TestPanels from "./pages/TestPanels";
import TiroidPaneli from "./pages/panels/TiroidPaneli";
import TorchPaneli from "./pages/panels/TorchPaneli";
import KolonKanseriPaneli from "./pages/panels/KolonKanseriPaneli";
import AnemiPaneli from "./pages/panels/AnemiPaneli";
import ColyakPaneli from "./pages/panels/ColyakPaneli";
import DiyabetPaneli from "./pages/panels/DiyabetPaneli";
import RomatolojiPaneli from "./pages/panels/RomatolojiPaneli";
import CinselHastaliklarPaneli from "./pages/panels/CinselHastaliklarPaneli";
import CheckUp from "./pages/CheckUp";
import SportsCheckUp from "./pages/SportsCheckUp";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import TestRequest from "./pages/TestRequest";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            element={<AyaktanHasta />}
          />
          <Route
            path="/hizmetlerimiz/evde-kan-alma"
            element={<EvdeKanAlma />}
          />
          <Route
            path="/hizmetlerimiz/genetik-testler"
            element={<GenetikTestleri />}
          />
          <Route path="/hizmetlerimiz/sma-testi" element={<SmaTesti />} />
          <Route
            path="/hizmetlerimiz/kurumsal"
            element={<KurumsalHizmetler />}
          />
          <Route
            path="/hizmetlerimiz/covid-testleri"
            element={<CovidTestleri />}
          />

          {/* Test Panels */}
          <Route path="/test-panelleri" element={<TestPanels />} />
          <Route path="/test-panelleri/tiroid" element={<TiroidPaneli />} />
          <Route path="/test-panelleri/torch" element={<TorchPaneli />} />
          <Route
            path="/test-panelleri/kolon-kanseri"
            element={<KolonKanseriPaneli />}
          />
          <Route path="/test-panelleri/anemi" element={<AnemiPaneli />} />
          <Route path="/test-panelleri/colyak" element={<ColyakPaneli />} />
          <Route path="/test-panelleri/diyabet" element={<DiyabetPaneli />} />
          <Route
            path="/test-panelleri/romatoloji"
            element={<RomatolojiPaneli />}
          />
          <Route
            path="/test-panelleri/cinsel-hastaliklar"
            element={<CinselHastaliklarPaneli />}
          />

          {/* Check-Up */}
          <Route path="/paketler" element={<CheckUp />} />
          <Route path="/paketler/sporcu-paketi" element={<SportsCheckUp />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Contact & Forms */}
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/test-istem-formu" element={<TestRequest />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
