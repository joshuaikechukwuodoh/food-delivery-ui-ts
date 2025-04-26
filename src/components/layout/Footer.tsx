import { Button } from "../common/Button";
import { Send } from "../common/Icons";
import Input from "../common/Input";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const className: string =
    "hover:font-bold active:font-bold hover:text-ctaColor active:text-ctaColor transition";
  return (
    <div className="py-3 flex flex-col">
      {/* Email support/connect div  */}
      <div className="bg-yellow-500/11 flex justify-center items-center">
        <div className="bg-ctaColor/50 flex flex-col md:flex-row gap-3 text-center justify-between items-center w-5xl md:p-10 py-2">
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl text-charcoalSlate dark:text-creamyWhite font-bold ">
              Lets connect
            </h4>
            <p>
              Stay upto date with Restaurants around you. <br />
              Subscribe with your email address.
            </p>
          </div>
          <div className="bg-creamyWhite flex flex-row items-center gap-3 dark:text-charcoalSlate py-2 px-4 rounded-md ">
            <Input
              className="outline-none border-none "
              name="email"
              type="email"
              placeholder="Your email address"
            />
            <Button
              icon={Send}
              Size={25}
              className="py-2 px-4 bg-ctaColor border-none text-creamyWhite rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="py-3 px-2 text-center">
        <NavLink className={className} to={"/new-restaurant"}>
          Open Restaurant
        </NavLink>{" "}
        |{" "}
        <NavLink className={className} to={"/new-restaurant"}>
          Become a Delivery Man
        </NavLink>{" "}
        |{" "}
        <NavLink className={className} to={"/new-restaurant"}>
          Profile
        </NavLink>{" "}
        |{" "}
        <NavLink className={className} to={"/new-restaurant"}>
          Help & Support
        </NavLink>
      </div>
      <h1 className="font-logoFont dark:text-creamyWhite hover:text-ctaColor active:text-ctaColor transition cursor-pointer text-5xl md:text-9xl text-center my-1 text-primaryBgColor">
        SERVEDISH
      </h1>
      <p className="text-center">copyright© {currentDate.getFullYear()} </p>
    </div>
  );
};

export default Footer;
