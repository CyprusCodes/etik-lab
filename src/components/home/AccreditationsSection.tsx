import { useAutoScroll } from "@/hooks/useAutoScroll";

const accreditations = [
  { name: "ISO 15189", icon: "🏥" },
  { name: "CAP", icon: "✓" },
  { name: "JCI", icon: "🏅" },
  { name: "TÜRKAK", icon: "⭐" },
  { name: "ISO 15189", icon: "🏥" },
  { name: "CAP", icon: "✓" },
];

export function AccreditationsSection() {
  const containerRef = useAutoScroll(0.5, 'left');

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background extending from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/5 to-white pointer-events-none" />
      
      {/* Glass morphism accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container-wide relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Uluslararası Akreditasyonlar
          </h2>
          <p className="text-muted-foreground text-lg">Dünya standartlarında hizmet kalitesi</p>
        </div>

        {/* Auto-scrolling marquee */}
        <div className="relative">
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl" />
          
          {/* Content */}
          <div 
            ref={containerRef}
            className="flex gap-8 px-8 py-6 overflow-x-hidden relative z-10"
          >
            {accreditations.map((acc, idx) => (
              <div
                key={`${acc.name}-${idx}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 hover:border-primary/50 hover:bg-white/30 transition-all duration-300 group"
              >
                <span className="text-3xl">{acc.icon}</span>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">{acc.name}</p>
                  <p className="text-xs text-muted-foreground hidden sm:block">Sertifikalı</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
