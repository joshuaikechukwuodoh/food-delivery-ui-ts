import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div className="bg-lightMist py-96 text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
      <Header />
      <div>
        <h1>What's on your mind</h1>
        <div>
          <img src="" alt="Cuisines Images" />
          <p>Cuisine Names</p>
        </div>
      </div>

      <h1>{localStorage.getItem("location")}</h1>
      <Footer />
    </div>
  );
}
