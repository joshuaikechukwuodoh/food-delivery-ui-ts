import { Button } from "../common/Button";
// import { Send } from "../common/Icons";
import Input from "../common/Input";

const Footer = () => {
  const currentDate = new Date();
  return (
    <div>
      {/* Email support/connect div  */}
      <div className="bg-yellow-500/11 flex justify-center items-center">
        <div className="bg-ctaColor/50 flex justify-between items-center w-5xl p-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl text-charcoalSlate dark:text-creamyWhite font-bold ">
              Lets connect
            </h4>
            <p>
              Stay upto date with Restaurants around you. <br />
              Subscribe with your email address.
            </p>
          </div>
          <div className="bg-creamyWhite dark:text-charcoalSlate py-2 px-4 rounded-md ">
            <Input
              className="outline-none border-none "
              name="email"
              type="email"
              placeholder="Your email address"
            />
            <Button className="py-2 px-4 bg-ctaColor border-none text-creamyWhite rounded-md">
              Send
            </Button>
          </div>
        </div>
      </div>
      {/* Footer menu div  */}
      <div className="grid grid-cols-3 place-items-center">
        <div>Quick Links</div>
        <div>Quick Links</div>
        <div>Quick Links</div>
      </div>
      <p className="text-center">copyright© {currentDate.getFullYear()} </p>
    </div>
  );
};

export default Footer;
