export default function PageTitle({ title }: { title: string }) {
  return (
    <div style={{ padding: "2rem", background: "#e6e6e6" }}>
      <h1 className="text-[31px] font-bold leading-tight text-[#0F172A]">{title}</h1>
    </div>
  );
}
