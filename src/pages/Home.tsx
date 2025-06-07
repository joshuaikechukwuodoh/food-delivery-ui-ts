import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";
import DeliverySectionInfo from "../components/ui/DeliverySectionInfo";
import { useEffect, useState } from "react";

export default function Home() {
  const [userLocation, setUserLocation] = useState<string>("");

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setUserLocation(savedLocation);
    }
  }, []);
  return (
    <>
      <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
        <div className="bg-amber-400">
          <Header />
        </div>
        <Hero />
        <p className="font-bold text-2xl bg-ctaColor p-2 rounded-2xl">
          {userLocation}
        </p>
        <DeliverySectionInfo />
        <Footer />
      </div>
    </>
  );
}
