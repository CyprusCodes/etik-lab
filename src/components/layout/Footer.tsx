import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { getImagePath } from "@/utils/assets";

const footerLinks = {
  hizmetler: [
    { label: "Ayaktan Hasta Hizmetleri", href: "/hizmetlerimiz/ayaktan-hasta" },
    { label: "Evde Numune Alma", href: "/hizmetlerimiz/evde-numune" },
    { label: "Genetik Testler", href: "/hizmetlerimiz/genetik-testler" },
    { label: "SMA Testi", href: "/hizmetlerimiz/sma-testi" },
    { label: "Kurumsal Hizmetler", href: "/hizmetlerimiz/kurumsal" },
  ],
  testler: [
    { label: "Cinsel Hastalıklar", href: "/test-panelleri/cinsel-hastaliklar" },
    { label: "Anemi Paneli", href: "/test-panelleri/anemi" },
    { label: "Diyabet Paneli", href: "/test-panelleri/diyabet" },
    { label: "Tiroid Paneli", href: "/test-panelleri/tiroid" },
    { label: "Check-Up Paketleri", href: "/paketler" },
  ],
  kurumsal: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Kurumsal", href: "/hakkimizda/kurumsal" },
    { label: "Kariyer", href: "/kariyer" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground text-white">
      {/* Main Footer */}
      <div className="container-wide py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={getImagePath("/logo-with-bg.png")}
                alt="Etik Lab Laboratuvarı"
              />
            </Link>

            <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
              Bilimin ışığında ileri teknoloji ile güvenilir tanı hizmetleri
              sunuyoruz. Modern laboratuvar altyapımız ve uzman kadromuzla
              yanınızdayız.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+905338712042"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+90 533 871 20 42</span>
              </a>
              <a
                href="mailto:bilgi@etiklab.net"
                className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>bilgi@etiklab.net</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Dr. Remzi Gönenç Sk, Lefkoşa 99010</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>Pzt - Cmt: 08:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-white mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Test Panelleri</h3>
            <ul className="space-y-3">
              {footerLinks.testler.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Kurumsal</h3>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Etik Laboratuvarı. Tüm hakları
              saklıdır.
              <br className="md:hidden" />
              <span className="md:ml-1">
                Built by{" "}
                <a
                  href="https://futurecast.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors underline"
                >
                  Futurecast Studio
                </a>
              </span>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/etiklaboratuvari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/etiklaboratuvari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/etiklab1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Twitter className="w-5 h-5" />
              </a>
              {/* <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
