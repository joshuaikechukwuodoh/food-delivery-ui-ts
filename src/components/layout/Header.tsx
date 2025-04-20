import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../common/Button";
import { Menu, Close } from "../common/Icons"; // for hamburger & close icons

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className: string = `hover:text-ctaColor hover:font-semibold font-semibold transition duration-200`;
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={`${className} ${
          isScrolled ? "text-primaryBgColor  font-semibold" : "text-creamyWhite"
        }`}
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to={"/courier"}
        className={`${className} ${
          isScrolled ? "text-primaryBgColor font-semibold" : "text-creamyWhite"
        }`}
        onClick={() => setIsOpen(false)}
      >
        Become a courier
      </NavLink>
      <NavLink
        to={"/what-we-do"}
        className={`${className} ${
          isScrolled ? "text-primaryBgColor font-semibold" : "text-creamyWhite"
        }`}
        onClick={() => setIsOpen(false)}
      >
        Corporate Ordering
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-white max-w-5xl mt-3 mx-auto  rounded-[10px] shadow-md px-6 py-3"
              : "w-full px-8 py-5 bg-transparent"
          }`}
        >
          <NavLink
            to={"/"}
            className={`font-black active:text-ctaColor hover:text-ctaColor font-logoFont text-2xl transition-all duration-300 ${
              isScrolled ? "text-primaryBgColor" : "text-white"
            }`}
          >
            SERVEDISH
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks}
            <Button
              className={`px-5 py-2 rounded-md bg-creamyWhite  hover:text-creamyWhite hover:bg-primaryBgColor font-semibold transition-all duration-300 ${
                isScrolled ? "bg-ctaColor text-creamyWhite" : "text-ctaColor"
              }`}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(true)}>
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-black" : "text-creamyWhite"
                }`}
              />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 glass shadow-lg transform transition-transform z-60 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* styling for mobile menu header  */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-bold text-lg text-primaryBgColor">Menu</span>
          <Button onClick={() => setIsOpen(false)}>
            <Close className="w-6 h-6" />
          </Button>
        </div>
        {/* mobile menu items  */}
        <div className="flex flex-col p-4 gap-4 text-charcoalSlate text-sm">
          {navLinks}
          <Button className="mt-4 bg-ctaColor text-creamyWhite w-full">
            Login
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed transition-all duration-250 inset-0 bg-black/15  z-55"
        />
      )}
    </>
  );
}
