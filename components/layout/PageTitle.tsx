export default function PageTitle({ title }: { title: string }) {
  return (
    <div style={{ padding: "2rem", background: "#e6e6e6" }}>
      <h1>{title}</h1>
    </div>
  );
}