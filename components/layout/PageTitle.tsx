export default function PageTitle({ title }: { title: string }) {
  return (
    <div
      className="relative overflow-hidden border-b border-blue-200 px-6 py-8 text-white shadow-[0_12px_24px_rgba(13,53,130,0.24)]"
      style={{
        background:
          "linear-gradient(115deg, #1f62b7 0%, #16479b 44%, #233f87 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_42%)]" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-300/80 via-blue-200/70 to-cyan-300/80" />
      <div className="mx-auto max-w-6xl">
        <h1 className="text-[30px] font-bold leading-tight">{title}</h1>
      </div>
    </div>
  );
}
