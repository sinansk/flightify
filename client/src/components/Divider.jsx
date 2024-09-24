import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
const Divider = ({ className }) => {
  return (
    <Separator
      className={cn("h-0.5 w-10 bg-gray-400 sm:w-24", className)}
      orientation="horizontal"
    />
  );
};

export default Divider;
