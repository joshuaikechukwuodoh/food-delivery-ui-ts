import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CuisineCarousel from "../components/ui/Carousel";

export default function HomePage() {
  const [userLocation, setUserLocation] = useState<string>("");

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setUserLocation(savedLocation);
    }
  }, []);
  return (
    <div className="bg-lightMist py-96 text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
      <Header />

      <div>
        <h1>What's on your mind</h1>
        <CuisineCarousel />
      </div>

      <h1>{userLocation}</h1>

      <Footer />
    </div>
  );
}
