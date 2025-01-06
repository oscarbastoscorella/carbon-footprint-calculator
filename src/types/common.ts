import { ListCollection } from "@chakra-ui/react";

export type SelectItem = ListCollection<{
  label: string;
  value: string;
}>;
