import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getImagePath } from "@/utils/assets";

const navigationItems = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
    children: [
      { label: "Kurumsal", href: "/hakkimizda/kurumsal" },
      { label: "Zaman Tüneli", href: "/hakkimizda/zaman-tuneli" },
      { label: "Kariyer", href: "/kariyer" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetlerimiz",
    children: [
      { label: "Ayaktan Hasta", href: "/hizmetlerimiz/ayaktan-hasta" },
      { label: "Evde Numune Alma", href: "/hizmetlerimiz/evde-numune" },
      { label: "Genetik Testler", href: "/hizmetlerimiz/genetik-testler" },
      { label: "SMA Testi", href: "/hizmetlerimiz/sma-testi" },
      { label: "Kurumsal Hizmetler", href: "/hizmetlerimiz/kurumsal" },
    ],
  },
  {
    label: "Test Panelleri",
    href: "/test-panelleri",
    children: [
      {
        label: "Cinsel Hastalıklar",
        href: "/test-panelleri/cinsel-hastaliklar",
      },
      { label: "Anemi Paneli", href: "/test-panelleri/anemi" },
      { label: "Çölyak Paneli", href: "/test-panelleri/colyak" },
      { label: "Diyabet Paneli", href: "/test-panelleri/diyabet" },
      { label: "Tiroid Paneli", href: "/test-panelleri/tiroid" },
      { label: "TORCH Paneli", href: "/test-panelleri/torch" },
    ],
  },
  { label: "Paketler", href: "/check-up" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-xl border-b border-gray-100/50 py-3"
          : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm py-5"
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={getImagePath("/logo.png")}
              alt="Etik Lab Laboratuvarı"
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-10 w-auto" : "h-12 w-auto"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2 px-1",
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      isScrolled ? "bg-primary" : "bg-white"
                    )}
                  />
                  {item.children && (
                    <ChevronDown className="w-4 h-4 inline-block ml-1" />
                  )}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4 animate-fade-in-down">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary-light hover:text-primary rounded-lg transition-colors whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="sm"
              className={cn(
                "font-bold rounded-full h-10 px-6 transition-all duration-300",
                isScrolled
                  ? "bg-primary hover:bg-primary-dark text-white shadow-md"
                  : "bg-white text-primary hover:bg-gray-100 shadow-lg"
              )}
              asChild
            >
              <Link to="/randevu">Randevu Al</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in-down">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-foreground font-medium hover:bg-primary-light hover:text-primary rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold rounded-full h-10"
                  asChild
                >
                  <Link to="/randevu">Randevu Al</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
