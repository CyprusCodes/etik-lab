import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp */}
      <Button
        size="icon"
        className="
    relative w-14 h-14 rounded-full
    bg-[#25D366] text-white
    hover:bg-[#25D366]
    focus-visible:bg-[#25D366]
    shadow-xl hover:shadow-2xl
    hover:scale-110 transition-all
  "
        asChild
      >
        <a
          href="https://wa.me/905338712042"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geçin"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>
      </Button>

      {/* Phone */}
      {/* <Button
        size="icon"
        className="
          w-14 h-14 rounded-full
          bg-primary text-primary-foreground
          shadow-xl hover:shadow-2xl
          hover:scale-110 transition-all
        "
        asChild
      >
        <a href="tel:+905338403273" aria-label="Bizi arayın">
          <PhoneCall className="w-6 h-6" />
        </a>
      </Button> */}
    </div>
  );
}
