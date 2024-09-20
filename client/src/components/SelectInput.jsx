import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
export function SelectInput({ className, options }) {
  return (
    <Select defaultValue={options?.items[0]}>
      <SelectTrigger className={cn(`w-[180px]`, className)}>
        <SelectValue placeholder={options?.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{options?.label}</SelectLabel>
          {options?.items?.map((item) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
