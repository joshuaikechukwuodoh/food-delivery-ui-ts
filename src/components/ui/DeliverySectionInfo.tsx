import { Button } from "../common/Button";
import Card from "../common/Card";
import { Delivery, HotCup, Mall, Restaurant } from "../common/Icons";

export default function DeliverySectionInfo() {
  const cardClass =
    "cursor-pointer shadow-2xl flex items-center flex-col active:shadow-md hover:shadow-md transition rounded-md p-3 dark:text-creamyWhite dark:bg-yellow-500/11 text-charcoalSlate";

  return (
    <>
      <div className="flex flex-col text-center gap-2 px-20 py-10">
        <h2 className="sm:text-2xl md:animate-fade-in-scale text-[15px] font-extrabold">
          Get Your Delivery In Three Easy Steps
        </h2>
        <div className="flex flex-col gap-3 md:flex-row justify-around">
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
            className="flex items-center"
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
            className="flex items-center"
            Size={100}
            Title="Become a Delivery Man"
            Text="Register as a delivery man and earn money"
          />
          <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
