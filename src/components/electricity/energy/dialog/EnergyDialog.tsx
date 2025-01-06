import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";

import AddEnergyForm from "./form/AddEnergyForm";
import type { AddEnergyFormValues } from "./form/formSchema";
import { EnergyConsumption } from "@ts-types/electricity";
import { FaPlus } from "react-icons/fa6";
import { IconButton } from "@chakra-ui/react";
import { createEnergyConsumption } from "@services/electricity";

export function EnergyDialog() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null!);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createEnergyConsumption,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["energyConsumption"] });
      closeDialog();
    },
    throwOnError: true,
  });

  function handleSubmit(data: AddEnergyFormValues) {
    const newEnergyConsumption: EnergyConsumption = {
      date: data.date,
      consumption: data.value[0],
      id: "",
    };
    mutation.mutate(newEnergyConsumption);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={"sm"}
      placement={"center"}
    >
      <DialogTrigger asChild>
        <IconButton
          aria-label="Add energy consumption"
          size={"sm"}
          variant={"ghost"}
        >
          <FaPlus />
        </IconButton>
      </DialogTrigger>
      <DialogContent ref={contentRef}>
        <DialogHeader>
          <DialogTitle
            fontSize="md"
            color={"yellow.600"}
            _dark={{ color: "yellow.500" }}
          >
            Add Energy Consumption
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <AddEnergyForm
            onClose={closeDialog}
            onSubmit={handleSubmit}
            isLoading={mutation.isPending}
          />
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}

export default EnergyDialog;
