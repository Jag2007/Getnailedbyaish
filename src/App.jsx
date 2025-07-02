import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-pink-50 text-gray-800 font-sans">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <Footer />
    </div>
  );
}
