import Input from "../components/common/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <div className="bg-darkGreen w-full pt-10 px-20">
        <Header />
        <h1 className="animate-fade-in-scale text-creamyWhite">
          This is the home page of the website
        </h1>
        <Input
          name="inputSearchforRes"
          type="text"
          className="pl-3 outline-none border-none focus:outline-none bg-lightMist text-black p-5 rounded-md  focus:ring-0"
        />
        <Footer />
      </div>
    </>
  );
}
