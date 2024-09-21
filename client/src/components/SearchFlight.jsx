import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchLocation from "./SearchLocation";
import DatePicker from "./DatePicker";
import { Button } from "./ui/button";
import { PlaneTakeoffIcon } from "lucide-react";
import { PlaneTakeoff } from "lucide-react";
import PlaneLandingSvg from "@/assets/PlaneLandingSvg";
import PlaneSvg from "@/assets/PlaneSvg";
const SearchFlight = () => {
  return (
    <div className="relative w-full rounded-xl bg-white shadow-sm sm:h-48">
      <div className="mb-4 flex flex-col items-center justify-between">
        <div className="ml-0 flex items-center self-start p-4">
          <PlaneSvg className="h-6 text-black" />
          <h2 className="font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <Tabs defaultValue="round-trip" className="w-[400px]">
          <TabsList className="absolute right-4 top-4 rounded-full p-0">
            <TabsTrigger className="h-full rounded-l-full" value="round-trip">
              Round Trip
            </TabsTrigger>
            <TabsTrigger className="h-full rounded-r-full" value="one-way">
              One Way
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="round-trip"
            className="flex items-center justify-center gap-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="relative items-center">
                <SearchLocation
                  className="rounded-l-full"
                  variant="departure"
                />
              </div>
              <SearchLocation className="rounded-r-full" variant="arrival" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <DatePicker className="rounded-l-full" />
              <DatePicker className="rounded-r-full" />
            </div>
          </TabsContent>
          <TabsContent
            value="one-way"
            className="flex items-center justify-end gap-3 pl-6"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="relative items-center">
                <SearchLocation
                  className="rounded-l-full"
                  variant="departure"
                />
              </div>
              <SearchLocation className="rounded-r-full" variant="arrival" />
            </div>
            <div className="flex items-center justify-start">
              <DatePicker className="rounded-l-full" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Button variant="default" className="absolute bottom-5 left-5">
        Show flights
      </Button>
    </div>
  );
};

export default SearchFlight;
