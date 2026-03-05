const coeTheme = {
  gradient: "linear-gradient(115deg, #0a2e73 0%, #0f4bb8 50%, #0a2e73 100%)",
  glowLeft: "rgba(110, 220, 255, 0.24)",
  glowRight: "rgba(133, 232, 255, 0.2)",
  strokePrimary: "rgba(194,241,255,0.52)",
  strokeSecondary: "rgba(194,241,255,0.26)",
  accentBar: "linear-gradient(to right, rgba(126,226,255,0.72), rgba(189,243,255,0.7), rgba(126,226,255,0.72))",
};

export default function PageTitle({ title }: { title: string }) {
  return (
    <div
      className="relative overflow-hidden border-b border-blue-200 px-4 py-6 text-white shadow-[0_12px_24px_rgba(13,53,130,0.24)] sm:px-6 sm:py-8"
      style={{
        background: coeTheme.gradient,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_42%)]" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: coeTheme.glowLeft }} />
      <div className="pointer-events-none absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full blur-3xl" style={{ backgroundColor: coeTheme.glowRight }} />
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block" aria-hidden>
        <div className="relative h-24 w-[24rem]">
          <svg viewBox="0 0 420 96" className="h-full w-full">
            <defs>
              <linearGradient id="nicsiBannerStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
                <stop offset="55%" stopColor={coeTheme.strokePrimary} />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              <linearGradient id="coeCoreGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(193,247,255,0.34)" />
                <stop offset="100%" stopColor="rgba(193,247,255,0.12)" />
              </linearGradient>
            </defs>

            <path d="M16 48H120C146 48 166 28 194 28H208" fill="none" stroke="url(#nicsiBannerStroke)" strokeWidth="1.4" />
            <path d="M16 48H120C146 48 166 68 194 68H208" fill="none" stroke="url(#nicsiBannerStroke)" strokeWidth="1.4" />
            <path d="M224 48H328" fill="none" stroke="url(#nicsiBannerStroke)" strokeWidth="1.4" />
            <path d="M224 48H294C318 48 328 34 350 34" fill="none" stroke={coeTheme.strokeSecondary} strokeWidth="1.2" />
            <path d="M224 48H294C318 48 328 62 350 62" fill="none" stroke={coeTheme.strokeSecondary} strokeWidth="1.2" />

            <circle cx="16" cy="48" r="5" fill="rgba(255,255,255,0.14)" stroke={coeTheme.strokePrimary} strokeWidth="1" />
            <circle cx="208" cy="48" r="10" fill="url(#coeCoreGlow)" stroke={coeTheme.strokePrimary} strokeWidth="1.4" />
            <circle cx="350" cy="34" r="4.5" fill="rgba(184,244,255,0.3)" stroke={coeTheme.strokePrimary} strokeWidth="1" />
            <circle cx="350" cy="62" r="4.5" fill="rgba(184,244,255,0.3)" stroke={coeTheme.strokePrimary} strokeWidth="1" />
            <circle cx="328" cy="48" r="4.5" fill="rgba(184,244,255,0.3)" stroke={coeTheme.strokePrimary} strokeWidth="1" />
          </svg>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full" style={{ background: coeTheme.accentBar }} />
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-[30px]">{title}</h1>
      </div>
    </div>
  );
}
