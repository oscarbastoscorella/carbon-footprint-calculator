import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@ui/select";

import { ListCollection } from "@chakra-ui/react";
import { RefObject } from "react";

type InputSelectProps = {
  label: string;
  options: ListCollection<{
    label: string;
    value: string;
  }>;
  placeholder: string;
  value?: string[];
  onValueChange: (value: string[]) => void;
  contentRef?: RefObject<HTMLDivElement>;
};

export default function InputSelect({
  label,
  options,
  placeholder,
  value,
  onValueChange,
  contentRef,
}: InputSelectProps) {
  return (
    <SelectRoot
      collection={options}
      size="sm"
      value={value}
      onValueChange={(e) => onValueChange(e.value)}
    >
      <SelectLabel fontSize={"xs"}>{`${label}:`}</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent portalRef={contentRef}>
        {options.items.map((country) => (
          <SelectItem item={country} key={country.value}>
            {country.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
