import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <div className="bg-darkGreen w-full py-10 px-20">
        <Header />
        <h1 className="animate-fade-in-scale text-creamyWhite">
          This is the home page of the website
        </h1>
      </div>
    </>
  );
}
