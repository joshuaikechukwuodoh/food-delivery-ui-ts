import { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../common/Button";
import { Menu, Close, Sun, Moon, Lock } from "../common/Icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setToggleDarkMode(savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setToggleDarkMode(systemPrefersDark);
    }
  }, []);

  // Update dark mode
  useEffect(() => {
    if (toggleDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [toggleDarkMode]);

  // Escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const className = `hover:text-ctaColor hover:font-semibold font-semibold transition duration-200`;

  const navLinks = useMemo(
    () => (
      <>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${className} ${
              isScrolled
                ? "text-primaryBgColor dark:text-creamyWhite font-semibold"
                : "text-creamyWhite"
            } ${isActive ? "text-ctaColor font-bold" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/courier"}
          className={({ isActive }) =>
            `${className} ${
              isScrolled
                ? "text-primaryBgColor dark:text-creamyWhite font-semibold"
                : "text-creamyWhite"
            } ${isActive ? "text-ctaColor font-bold" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Become a courier
        </NavLink>
        <NavLink
          to={"/what-we-do"}
          className={({ isActive }) =>
            `${className} ${
              isScrolled
                ? "text-primaryBgColor dark:text-creamyWhite font-semibold"
                : "text-creamyWhite"
            } ${isActive ? "text-ctaColor font-bold" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Restaurants
        </NavLink>
      </>
    ),
    [isScrolled, className]
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div
          className={`flex  items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-lightMist/80 dark:bg-charcoalSlate/80 max-w-5xl mt-3 mx-auto rounded-[10px] shadow-md px-6 py-3"
              : "w-full px-8 py-5 bg-transparent"
          }`}
        >
          <NavLink
            to={"/"}
            className={`font-black active:text-ctaColor hover:text-ctaColor font-logoFont text-2xl transition-all duration-300 ${
              isScrolled
                ? "text-primaryBgColor dark:text-creamyWhite  "
                : "text-creamyWhite"
            }`}
          >
            SERVEDISH
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Button
              className={`cursor-pointer ${
                isScrolled ? "text-ctaColor" : "text-creamyWhite"
              }`}
              onClick={() => setToggleDarkMode(!toggleDarkMode)}
            >
              {toggleDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            {navLinks}
            <Button
              className={`px-5 py-3 flex gap-2 rounded-md bg-creamyWhite hover:text-creamyWhite hover:bg-primaryBgColor font-semibold transition-all duration-300 group ${
                isScrolled ? "bg-ctaColor text-creamyWhite" : "text-ctaColor"
              }`}
            >
              <Lock
                size={20}
                className={`${
                  isScrolled ? "text-creamyWhite" : "text-ctaColor"
                } group-hover:text-creamyWhite`}
              />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-2 items-center justify-center">
            <Button
              className={`${isScrolled ? "text-ctaColor" : "text-creamyWhite"}`}
              onClick={() => setToggleDarkMode(!toggleDarkMode)}
            >
              {toggleDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile menu"
            >
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
        className={`fixed top-0 right-0 h-full w-64 glass shadow-lg transform transition-transform z-[60] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-bold text-lg text-primaryBgColor">Menu</span>
          <Button onClick={() => setIsOpen(false)}>
            <Close className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex flex-col p-4 gap-4 text-charcoalSlate text-sm">
          {navLinks}
          <Button className="mt-4 rounded-md p-2 bg-ctaColor text-creamyWhite w-full flex gap-2 items-center justify-center">
            <Lock size={15} />
            Login
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed transition-opacity duration-200 inset-0 z-55 ${
            isOpen ? "opacity-100 bg-black/15" : "opacity-0 pointer-events-none"
          }`}
        />
      )}
    </>
  );
}
