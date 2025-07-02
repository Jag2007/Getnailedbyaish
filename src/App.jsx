import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import ReviewSection from "./components/ReviewSection";
import Bow from "../images/background.jpeg";
export default function App() {
  return (
    <div className="bg-white text-[#e28dac]">
      <Navbar />
      <HeroSection />
      <div
        style={{
          backgroundImage: `url(${Bow})`,
          backgroundRepeat: "repeat",
          backgroundSize: "80px",
          backgroundPosition: "top center",
        }}
      >
        <CategorySection />
        <ReviewSection />
        <Footer />
      </div>
    </div>
  );
}
