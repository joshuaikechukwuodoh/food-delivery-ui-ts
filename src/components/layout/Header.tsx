// import { useEffect, useState } from "react";
// import { Button } from "../common/Button";
// import { NavLink } from "react-router-dom";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
//       <div
//         className={`flex items-center justify-between transition-all duration-300 ${
//           isScrolled
//             ? "glass bg-lightMist max-w-5xl mx-auto mt-4 rounded-[10px] shadow-md px-6 py-3"
//             : "w-full px-8 py-5 bg-transparent"
//         }`}
//       >
//         <NavLink
//           to={"/"}
//           className={`font-black font-logoFont hover:text-ctaColor text-2xl transition-all duration-300 ${
//             isScrolled ? "text-primaryBgColor" : "text-creamyWhite"
//           }`}
//         >
//           SERVEDISH
//         </NavLink>

//         <div className="flex items-center gap-5">
//           <div className="flex gap-5 items-center">
//             <NavLink
//               to={"/"}
//               className={`transition-colors hover:text-ctaColor hover:font-semibold duration-300 ${
//                 isScrolled ? "text-primaryBgColor" : "text-creamyWhite"
//               }`}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to={"/courier"}
//               className={`transition-colors hover:text-ctaColor hover:font-semibold duration-300 ${
//                 isScrolled ? "text-primaryBgColor" : "text-creamyWhite"
//               }`}
//             >
//               Become a courier
//             </NavLink>
//             <NavLink
//               to={"what-we-do"}
//               className={`transition-colors hover:text-ctaColor hover:font-semibold duration-300 ${
//                 isScrolled ? "text-primaryBgColor" : "text-creamyWhite"
//               }`}
//             >
//               Corporate Ordering
//             </NavLink>
//           </div>
//           <Button
//             className={`px-5 py-3 rounded-md hover:bg-primaryBgColor hover:font-semibold transition-all duration-300 ${
//               isScrolled
//                 ? "bg-ctaColor  text-creamyWhite"
//                 : "bg-creamyWhite text-ctaColor hover:text-creamyWhite"
//             }`}
//           >
//             Login
//           </Button>
//         </div>
//       </div>
//     </nav>
//   );
// }

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

  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className="hover:text-ctaColor transition duration-200"
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to={"/courier"}
        className="hover:text-ctaColor transition duration-200"
        onClick={() => setIsOpen(false)}
      >
        Become a courier
      </NavLink>
      <NavLink
        to={"/what-we-do"}
        className="hover:text-ctaColor transition duration-200"
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
              ? "bg-white max-w-5xl mx-auto mt-4 rounded-[10px] shadow-md px-6 py-3"
              : "w-full px-8 py-5 bg-transparent"
          }`}
        >
          <NavLink
            to={"/"}
            className={`font-black font-logoFont text-2xl transition-all duration-300 ${
              isScrolled ? "text-primaryBgColor" : "text-white"
            }`}
          >
            SERVEDISH
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks}
            <Button className="px-5 py-2 rounded-md bg-ctaColor text-white">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-bold text-lg text-primaryBgColor">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <Close className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4 text-charcoalSlate text-sm">
          {navLinks}
          <Button className="mt-4 bg-ctaColor text-white w-full">Login</Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </>
  );
}
