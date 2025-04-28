import { Location } from "../common/Icons";
import Background from "../../assets/background.jpg";
import Input from "../common/Input";
import { useCallback, useEffect, useRef, useState } from "react";
import { AddressSuggestion } from "../../types/AddressSuggestion";
import { Button } from "../common/Button";
import { getAddressSuggestions } from "../../services/api/AddressSuggestion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Hero() {
  const [addressInput, setAddressInput] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  // Debounce function to limit API calls
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestionsDebounced = useCallback(
    debounce(async (query: string) => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        setIsLoading(true);
        const response = await getAddressSuggestions(query);
        setSuggestions(response);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
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
    setShowSuggestions(false);
    setSelectedLocation({
      lat: parseFloat(suggestion.lat),
      lng: parseFloat(suggestion.lon),
    });
  };

  // Handle set location button click
  const handleSetLocation = () => {
    if (selectedLocation) {
      navigate("/home");
      toast.success(`New Location Set ${addressInput}`);
    } else {
      alert("Please select a location from the suggestions");
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
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
            <Location className="text-ctaColor " size={20} />
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
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primaryBgColor"></div>
              </div>
            )}
            {showSuggestions && suggestions.length > 0 && (
              <ul
                ref={suggestionsRef}
                className="absolute z-10 top-full left-0 right-0 mt-1 bg-creamyWhite border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
              >
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
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
  );
}
