
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* هنا الصفحات هتتغير */}
      <Outlet />

      <Footer />
    </>
  );
}
