import { Outlet } from "react-router-dom";
import "./Global.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col bg-[#292929]">
      <Navbar />

      <main className="flex-1 overflow-y-auto bg-[url(/Background.webp)] bg-cover">
        <div className="absolute inset-0 bg-[#292928]/50 sm:bg-[#292928]/20" />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
