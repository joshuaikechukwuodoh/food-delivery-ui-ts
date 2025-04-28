import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CuisineCarousel from "../components/ui/Carousel";

export default function HomePage() {
  return (
    <div className="bg-lightMist py-96 text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
      <Header />
      <div>
        <h1>What's on your mind</h1>
        <CuisineCarousel />
      </div>

      <h1>{localStorage.getItem("location")}</h1>
      <Footer />
    </div>
  );
}
