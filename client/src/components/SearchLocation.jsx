import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlaneTakeoffIcon } from "lucide-react";
import { PlaneLandingIcon } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SearchLocation = ({ className, variant }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const Icon = () => {
    const style = "absolute left-2 w-5 text-primary";
    if (variant === "departure") {
      return <PlaneTakeoffIcon className={style} />;
    } else if (variant === "arrival") {
      return <PlaneLandingIcon className={style} />;
    }
  };

  const dispatch = useDispatch();

  const [airports, setAirports] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredAirports, setFilteredAirports] = React.useState([]);

  const departure = useSelector((state) => state.searchFlight.departure);
  const arrival = useSelector((state) => state.searchFlight.arrival);

  React.useEffect(() => {
    const fetchAirports = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/algolia/datasets/master/airports/airports.json",
      );
      const data = await response.json();
      setAirports(data);
    };

    fetchAirports();
  }, []);

  React.useEffect(() => {
    if (searchTerm.length < 2) {
      setFilteredAirports([]); // 2 harften azsa boş dizi
      return;
    }

    const regex = new RegExp(searchTerm, "i"); // Regex oluşturma
    const fits = airports.filter(
      (airport) =>
        regex.test(airport.name) ||
        regex.test(airport.city) ||
        regex.test(airport.country) || // Ülke adı ile arama
        regex.test(airport.iata_code), // IATA kodu ile arama
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

  const selectedAirport = variant === "departure" ? departure : arrival;

  useEffect(() => {
    console.log("filtered", filteredAirports);
  }, [filteredAirports]);

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("relative w-[200px] justify-between", className)}
        >
          {/* {value ? (
            <span className="ml-4">
              {
                filteredAirports.find((airport) => airport.iata_code === value)
                  ?.name
              }
              {", "}
              {
                filteredAirports.find((airport) => airport.iata_code === value)
                  ?.city
              }
            </span>
          ) : (
            <span className="ml-4">Select airport...</span>
          )} */}
          {selectedAirport ? (
            <span className="ml-4">
              {selectedAirport.name}, {selectedAirport.city}
            </span>
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
                  value={airport.iata_code}
                  onSelect={() => handleSelect(airport)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === airport.iata_code ? "opacity-100" : "opacity-0",
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
