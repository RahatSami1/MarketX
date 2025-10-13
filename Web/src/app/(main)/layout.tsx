import Navbar from "@/components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
