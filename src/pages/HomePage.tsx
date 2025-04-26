import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DeliverySectionInfo from "../components/ui/DeliverySectionInfo";
import Hero from "../components/ui/Hero";

export default function HomePage() {
  return (
    <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
      <Header />
      <Hero />
      <DeliverySectionInfo />
      <Footer />
    </div>
  );
}
