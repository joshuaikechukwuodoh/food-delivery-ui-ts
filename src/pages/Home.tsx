// import { Button } from "../components/common/Button";
// import { Location, Restaurant } from "../components/common/Icons";
// import Input from "../components/common/Input";
// import Footer from "../components/layout/Footer";
// import Header from "../components/layout/Header";
// import Background from "../assets/background.jpg";
// import Card from "../components/common/Card";
// import { Mall, HotCup, Delivery } from "../components/common/Icons";

// export default function Home() {
//   const cardClass =
//     "cursor-pointer shadow-2xl flex items-center flex-col active:shadow-md hover:shadow-md transition rounded-md p-3 dark:text-creamyWhite dark:bg-yellow-500/11 text-charcoalSlate";
//   return (
//     <>
//       <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
//         <Header />
//         <div
//           className="w-full pt-40 py-10 h-1/2 px-5 sm:px-10 md:px-20 bg-cover bg-center"
//           style={{ backgroundImage: `url(${Background})` }}
//         >
//           <div className="flex flex-col gap-4 mt-6">
//             <h1 className="cursor-pointer  active:text-primaryBgColor hover:text-primaryBgColor transition-all duration-300 text-ctaColor font-bold text-2xl sm:text-3xl md:text-4xl">
//               Order delivery near you
//             </h1>

//             <div className="flex max-w-3xl items-center justify-center flex-row gap-2 flex-wrap sm:flex-nowrap">
//               <div className="flex flex-1 gap-4 items-center px-4 py-3 bg-creamyWhite text-charcoalSlate rounded-md">
//                 <Location className="text-ctaColor " size={20} />
//                 <Input
//                   name="search"
//                   type="text"
//                   className="border-none outline-none w-full"
//                   placeholder="Enter Your Location"
//                 />
//               </div>
//               <Button className="px-5 py-3 active:bg-primaryBgColor hover:bg-primaryBgColor transition-all duration-300   bg-ctaColor text-creamyWhite font-semibold rounded-md sm:w-auto">
//                 Set Location
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex  flex-col text-center gap-2 px-20 py-10">
//           <h2 className="sm:text-2xl md:animate-fade-in-scale text-[15px] font-extrabold  ">
//             Get Your Delivery In Three Easy Steps
//           </h2>
//           <div className="flex flex-col gap-3 md:flex-row justify-around ">
//             <Card
//               Icon={Mall}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Effortless Ordering"
//               Text="Order seamlessly, either for you or a crowd"
//               ImageText="Food ordering Image"
//             />
//             <Card
//               Icon={Delivery}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Swift Delivery"
//               Text="Count on us for a swift and reliable service"
//               ImageText="Food ordering Image"
//             />
//             <Card
//               Icon={HotCup}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Get it hot"
//               Text="Your meal gets to you in time"
//               ImageText="Food ordering Image"
//             />
//           </div>
//         </div>
//         <div className="md:px-20 md:py-10 flex flex-col md:flex-row md:gap-5">
//           <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
//             <Card
//               Icon={Restaurant}
//               className="flex items-center "
//               Size={100}
//               Title="Open Your Restaurant"
//               Text="Register as a seller and open shop to start your business"
//             />
//             <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
//               Register
//             </Button>
//           </div>

//           <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
//             <Card
//               Icon={Delivery}
//               className="flex items-center "
//               Size={100}
//               Title="Become a Delivery Man"
//               Text="Register as a delivery man and earn money"
//             />
//             <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
//               Register
//             </Button>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import { Button } from "../components/common/Button";
// import { Location, Restaurant } from "../components/common/Icons";
// import Input from "../components/common/Input";
// import Footer from "../components/layout/Footer";
// import Header from "../components/layout/Header";
// import Background from "../assets/background.jpg";
// import Card from "../components/common/Card";
// import { Mall, HotCup, Delivery } from "../components/common/Icons";
// import axios from "axios";
// import { AddressSuggestion } from "../types/AddressSuggestion";

// export default function Home() {
//   const cardClass =
//     "cursor-pointer shadow-2xl flex items-center flex-col active:shadow-md hover:shadow-md transition rounded-md p-3 dark:text-creamyWhite dark:bg-yellow-500/11 text-charcoalSlate";

//   const [addressInput, setAddressInput] = useState("");
//   const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedLocation, setSelectedLocation] = useState<{
//     lat: number;
//     lng: number;
//   } | null>(null);
//   const suggestionsRef = useRef<HTMLUListElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Debounce function to limit API calls
//   const debounce = (func: Function, delay: number) => {
//     let timeoutId: number | undefined;
//     return (...args: any[]) => {
//       window.clearTimeout(timeoutId);
//       timeoutId = window.setTimeout(() => func(...args), delay);
//     };
//   };

//   // Fetch address suggestions from Nominatim
//   const fetchSuggestions = async (query: string) => {
//     if (query.length < 3) {
//       setSuggestions([]);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.get(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//           query
//         )}&addressdetails=1&limit=5`
//       );
//       setSuggestions(response.data);
//     } catch (error) {
//       console.error("Error fetching address suggestions:", error);
//       setSuggestions([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Debounced version of fetchSuggestions
//   const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

//   // Handle input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setAddressInput(value);
//     debouncedFetchSuggestions(value);
//     setShowSuggestions(true);
//   };

//   // Handle suggestion selection
//   const handleSelectSuggestion = (suggestion: AddressSuggestion) => {
//     setAddressInput(suggestion.display_name);
//     setShowSuggestions(false);
//     setSelectedLocation({
//       lat: parseFloat(suggestion.lat),
//       lng: parseFloat(suggestion.lon),
//     });
//   };

//   // Handle set location button click
//   const handleSetLocation = () => {
//     if (selectedLocation) {
//       // Here you would typically save the location to state/context/backend
//       alert(
//         `Location set to: ${addressInput}\nLat: ${selectedLocation.lat}, Lng: ${selectedLocation.lng}`
//       );
//     } else {
//       alert("Please select a location from the suggestions");
//     }
//   };

//   // Close suggestions when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         inputRef.current &&
//         !inputRef.current.contains(e.target as Node) &&
//         suggestionsRef.current &&
//         !suggestionsRef.current.contains(e.target as Node)
//       ) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
//         <Header />
//         <div
//           className="w-full pt-40 py-10 h-1/2 px-5 sm:px-10 md:px-20 bg-cover bg-center"
//           style={{ backgroundImage: `url(${Background})` }}
//         >
//           <div className="flex flex-col gap-4 mt-6">
//             <h1 className="cursor-pointer active:text-primaryBgColor hover:text-primaryBgColor transition-all duration-300 text-ctaColor font-bold text-2xl sm:text-3xl md:text-4xl">
//               Order delivery near you
//             </h1>

//             <div className="flex max-w-3xl items-center justify-center flex-row gap-2 flex-wrap sm:flex-nowrap">
//               <div className="relative flex flex-1 gap-4 items-center px-4 py-3 bg-creamyWhite text-charcoalSlate rounded-md">
//                 <Location className="text-ctaColor " size={20} />
//                 <Input
//                   ref={inputRef}
//                   name="search"
//                   type="text"
//                   value={addressInput}
//                   onChange={handleInputChange}
//                   className="border-none outline-none w-full"
//                   placeholder="Enter Your Location"
//                   autoComplete="off"
//                 />
//                 {isLoading && (
//                   <div className="absolute right-3">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
//                   </div>
//                 )}
//                 {showSuggestions && suggestions.length > 0 && (
//                   <ul
//                     ref={suggestionsRef}
//                     className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
//                   >
//                     {suggestions.map((suggestion, index) => (
//                       <li
//                         key={index}
//                         className="p-2 hover:bg-gray-100 cursor-pointer text-left"
//                         onClick={() => handleSelectSuggestion(suggestion)}
//                       >
//                         {suggestion.display_name}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               <Button
//                 onClick={handleSetLocation}
//                 className="px-5 py-3 active:bg-primaryBgColor hover:bg-primaryBgColor transition-all duration-300 bg-ctaColor text-creamyWhite font-semibold rounded-md sm:w-auto"
//               >
//                 Set Location
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col text-center gap-2 px-20 py-10">
//           <h2 className="sm:text-2xl md:animate-fade-in-scale text-[15px] font-extrabold">
//             Get Your Delivery In Three Easy Steps
//           </h2>
//           <div className="flex flex-col gap-3 md:flex-row justify-around">
//             <Card
//               Icon={Mall}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Effortless Ordering"
//               Text="Order seamlessly, either for you or a crowd"
//               ImageText="Food ordering Image"
//             />
//             <Card
//               Icon={Delivery}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Swift Delivery"
//               Text="Count on us for a swift and reliable service"
//               ImageText="Food ordering Image"
//             />
//             <Card
//               Icon={HotCup}
//               Size={25}
//               className={`${cardClass}`}
//               Title="Get it hot"
//               Text="Your meal gets to you in time"
//               ImageText="Food ordering Image"
//             />
//           </div>
//         </div>
//         <div className="md:px-20 md:py-10 flex flex-col md:flex-row md:gap-5">
//           <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
//             <Card
//               Icon={Restaurant}
//               className="flex items-center"
//               Size={100}
//               Title="Open Your Restaurant"
//               Text="Register as a seller and open shop to start your business"
//             />
//             <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
//               Register
//             </Button>
//           </div>

//           <div className="flex justify-between items-center cursor-pointer px-3 bg-yellow-500/11 rounded-md">
//             <Card
//               Icon={Delivery}
//               className="flex items-center"
//               Size={100}
//               Title="Become a Delivery Man"
//               Text="Register as a delivery man and earn money"
//             />
//             <Button className="cursor-pointer bg-ctaColor px-5 py-2 transition hover:bg-primaryBgColor active:bg-primaryBgColor rounded-full text-creamyWhite font-bold">
//               Register
//             </Button>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "../components/common/Button";
import { Location, Restaurant } from "../components/common/Icons";
import Input from "../components/common/Input";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Background from "../assets/background.jpg";
import Card from "../components/common/Card";
import { Mall, HotCup, Delivery } from "../components/common/Icons";
import { getAddressSuggestions } from "../services/api/AddressSuggestion";
import { AddressSuggestion } from "../types/AddressSuggestion";

export default function Home() {
  const cardClass =
    "cursor-pointer shadow-2xl flex items-center flex-col active:shadow-md hover:shadow-md transition rounded-md p-3 dark:text-creamyWhite dark:bg-yellow-500/11 text-charcoalSlate";

  // Address Autocomplete State
  const [addressInput, setAddressInput] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: string;
    lng: string;
  } | null>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce function
  const debounce = (fn: Function, delay: number) => {
    let timeoutId: number;
    return (...args: any[]) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => fn(...args), delay);
    };
  };

  // Fetch suggestions with debounce
  const fetchSuggestionsDebounced = useCallback(
    debounce(async (query: string) => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        setIsLoading(true);
        const results = await getAddressSuggestions(query);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressInput(value);
    fetchSuggestionsDebounced(value);
    setShowSuggestions(true);
  };

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: AddressSuggestion) => {
    setAddressInput(suggestion.display_name);
    setSelectedLocation({ lat: suggestion.lat, lng: suggestion.lon });
    setShowSuggestions(false);
  };

  // Handle set location button click
  const handleSetLocation = () => {
    if (selectedLocation) {
      // Here you would typically:
      // 1. Save the location to state/context
      // 2. Fetch nearby restaurants
      console.log("Location set:", {
        address: addressInput,
        coordinates: selectedLocation,
      });
    } else {
      console.log("Please select a location from suggestions");
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-lightMist text-charcoalSlate dark:bg-charcoalSlate/50 dark:text-creamyWhite">
      <Header />
      <div
        className="w-full pt-40 py-10 h-1/2 px-5 sm:px-10 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex flex-col gap-4 mt-6">
          <h1 className="cursor-pointer active:text-primaryBgColor hover:text-primaryBgColor transition-all duration-300 text-ctaColor font-bold text-2xl sm:text-3xl md:text-4xl">
            Order delivery near you
          </h1>

          <div className="flex max-w-3xl items-center justify-center flex-row gap-2 flex-wrap sm:flex-nowrap">
            <div className="relative flex flex-1 gap-4 items-center px-4 py-3 bg-creamyWhite text-charcoalSlate rounded-md">
              <Location className="text-ctaColor" size={20} />
              <Input
                ref={inputRef}
                name="search"
                type="text"
                value={addressInput}
                onChange={handleInputChange}
                className="border-none outline-none w-full"
                placeholder="Enter Your Location"
                autoComplete="off"
              />
              {isLoading && (
                <div className="absolute right-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                </div>
              )}
              {showSuggestions && suggestions.length > 0 && (
                <ul
                  ref={suggestionsRef}
                  className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
                >
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={`${suggestion.lat}-${suggestion.lon}-${index}`}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-left"
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      {suggestion.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button
              onClick={handleSetLocation}
              className="px-5 py-3 active:bg-primaryBgColor hover:bg-primaryBgColor transition-all duration-300 bg-ctaColor text-creamyWhite font-semibold rounded-md sm:w-auto"
            >
              Set Location
            </Button>
          </div>
        </div>
      </div>

      {/* Rest of your existing components */}
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

      {/* OpenStreetMap Attribution (required) */}
      <div className="text-xs text-center text-gray-500 py-2">
        ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenStreetMap
        </a>{" "}
        contributors
      </div>

      <Footer />
    </div>
  );
}
