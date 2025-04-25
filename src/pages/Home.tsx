import { Button } from "../components/common/Button";
import { Location, Restaurant } from "../components/common/Icons";
import Input from "../components/common/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Background from "../assets/background.jpg";
import Card from "../components/common/Card";
import { Mall, HotCup, Delivery } from "../components/common/Icons";

export default function Home() {
  const cardClass =
    "cursor-pointer shadow-2xl flex items-center flex-col active:shadow-md hover:shadow-md transition rounded-md p-3 dark:text-creamyWhite dark:bg-yellow-500/11 text-charcoalSlate";
  return (
    <>
      <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
        <Header />
        <div
          className="w-full pt-40 py-10 h-1/2 px-5 sm:px-10 md:px-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="flex flex-col gap-4 mt-6">
            <h1 className="cursor-pointer  active:text-primaryBgColor hover:text-primaryBgColor transition-all duration-300 text-ctaColor font-bold text-2xl sm:text-3xl md:text-4xl">
              Order delivery near you
            </h1>

            <div className="flex max-w-3xl items-center justify-center flex-row gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex flex-1 gap-4 items-center px-4 py-3 bg-creamyWhite text-charcoalSlate rounded-md">
                <Location className="text-ctaColor " size={20} />
                <Input
                  name="search"
                  type="text"
                  className="border-none outline-none w-full"
                  placeholder="Enter Your Location"
                />
              </div>
              <Button className="px-5 py-3 active:bg-primaryBgColor hover:bg-primaryBgColor transition-all duration-300   bg-ctaColor text-creamyWhite font-semibold rounded-md sm:w-auto">
                Set Location
              </Button>
            </div>
          </div>
        </div>
        <div className="flex  flex-col text-center gap-2 px-20 py-10">
          <h2 className="sm:text-2xl md:animate-fade-in-scale text-[15px] font-extrabold  ">
            Get Your Delivery In Three Easy Steps
          </h2>
          <div className="flex flex-col md:flex-row justify-around ">
            <Card
              Icon={Mall}
              Size={25}
              className={`${cardClass}`}
              Title="Effortless Ordering"
              Text="Order seamlessly, either for you or a crowd"
              ImageText="Food ordering Image"
            />
            <Card
              Icon={Delivery}
              Size={25}
              className={`${cardClass}`}
              Title="Swift Delivery"
              Text="Count on us for a swift and reliable service"
              ImageText="Food ordering Image"
            />
            <Card
              Icon={HotCup}
              Size={25}
              className={`${cardClass}`}
              Title="Get it hot"
              Text="Your meal gets to you in time"
              ImageText="Food ordering Image"
            />
          </div>
        </div>
        <div className="md:px-20 md:py-10 flex flex-col md:flex-row md:gap-5">
          <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
            <Card
              Icon={Restaurant}
              className="flex items-center "
              Size={100}
              Title="Open Your Restaurant"
              Text="Register as a seller and open shop to start your business"
            />
            <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
              Register
            </Button>
          </div>

          <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
            <Card
              Icon={Delivery}
              className="flex items-center "
              Size={100}
              Title="Become a Delivery Man"
              Text="Register as a delivery man and earn money"
            />
            <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
              Register
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
