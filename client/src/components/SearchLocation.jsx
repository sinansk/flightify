import React from "react";
import {
  Check,
  ChevronsUpDown,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { setDeparture, setArrival } from "../redux/slices/searchFlightSlice";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

const SearchLocation = ({ className, variant }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);

  const dispatch = useDispatch();
  const departure = useSelector((state) => state.searchFlight.departure);
  const arrival = useSelector((state) => state.searchFlight.arrival);
  const selectedAirport = variant === "departure" ? departure : arrival;

  useEffect(() => {
    const fetchAirports = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json",
      );
      const data = await response.json();
      setAirports(data);
    };
    fetchAirports();
  }, []);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setFilteredAirports([]);
      return;
    }

    const regex = new RegExp(searchTerm, "i");
    const fits = airports.filter(
      (airport) =>
        regex.test(airport.name) ||
        regex.test(airport.city) ||
        regex.test(airport.country) ||
        regex.test(airport.iata_code),
    );

    setFilteredAirports(fits);
  }, [searchTerm, airports]);

  const handleSelect = (airport) => {
    if (variant === "departure") {
      dispatch(setDeparture(airport));
    } else {
      dispatch(setArrival(airport));
    }
    setOpen(false);
  };

  const Icon = () => {
    const style = "absolute left-2 w-5 text-primary";
    if (variant === "departure") {
      return <PlaneTakeoffIcon className={style} />;
    } else if (variant === "arrival") {
      return <PlaneLandingIcon className={style} />;
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("relative w-28 w-[200px] justify-between", className)}
        >
          {selectedAirport ? (
            <span className="ml-4">{selectedAirport.name}</span>
          ) : (
            <span className="ml-4">Select airport...</span>
          )}
          <Icon />
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ml-4 w-[200px] p-0">
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search for airport..."
            onValueChange={(value) => setSearchTerm(value)}
          />
          <CommandList>
            <CommandEmpty>Nothing found.</CommandEmpty>
            <CommandGroup>
              {filteredAirports.map((airport) => (
                <CommandItem
                  key={airport.iata_code}
                  onSelect={() => handleSelect(airport)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedAirport?.iata_code === airport.iata_code
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {airport.name} ({airport.iata_code}), {airport.city}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchLocation;
