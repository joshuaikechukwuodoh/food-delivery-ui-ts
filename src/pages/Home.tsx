import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/ui/Hero";
import DeliverySectionInfo from "../components/ui/DeliverySectionInfo";

export default function Home() {
  return (
    <>
      <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
        <Header />
        <Hero />
        <DeliverySectionInfo />
        <Footer />
      </div>
    </>
  );
}
