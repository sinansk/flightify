import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const DatePicker = ({ value, onChange, className }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [date, setDate] = useState();
  const handleDate = (date) => {
    setDate(date);
    onChange(date);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-violet-900" />
          {value ? format(new Date(value), "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate}
          initialFocus
          disabled={(date) => {
            const compareDate = new Date(date);
            compareDate.setHours(0, 0, 0, 0);
            return compareDate < today;
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
