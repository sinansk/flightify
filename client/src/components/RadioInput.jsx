import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioInput = ({ options }) => {
  console.log(options, "options");
  return (
    <RadioGroup defaultValue={options[0]?.option}>
      {options.map((option) => (
        <div key={option.option} className="flex items-center space-x-2">
          <RadioGroupItem value={option.option} id={option.option} />
          <Label
            htmlFor={option.option}
            className="flex w-full justify-between"
          >
            <span>{option.option}</span>
            <span className="ml-auto mr-0">{option?.value}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};
