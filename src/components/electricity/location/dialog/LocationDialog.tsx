import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import { IconButton, createListCollection } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";

import { FootprintLocation } from "@ts-types/electricity";
import { GoGear } from "react-icons/go";
import LocationForm from "./form/LocationForm";
import { updateFootprintLocation } from "@services/electricity";
import { useFootprintLocationStore } from "@store/useFootprintLocationStore";

export function LocationDialog() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null!);

  const location = useFootprintLocationStore((state) => state.location);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateFootprintLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["footprintLocation"] });
      closeDialog();
    },
  });

  function onSubmit(newLocation: { country: string; state: string }) {
    const updatedFootprintLocation: FootprintLocation = {
      id: "location-1",
      country: newLocation.country,
      state: newLocation.state,
    };
    mutation.mutate(updatedFootprintLocation);
  }

  function closeDialog() {
    setOpen(false);
  }

  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={"md"}
    >
      <DialogTrigger asChild>
        <IconButton
          aria-label="Configure location"
          size={"sm"}
          variant={"ghost"}
        >
          <GoGear />
        </IconButton>
      </DialogTrigger>
      <DialogContent ref={contentRef}>
        <DialogHeader>
          <DialogTitle
            fontSize="md"
            color={"yellow.600"}
            _dark={{ color: "yellow.500" }}
          >
            Configure Location
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <LocationForm
            countries={countries}
            states={states}
            onSubmit={onSubmit}
            onClose={closeDialog}
            contentRef={contentRef}
            selectedLocation={location}
            isLoading={mutation.isPending}
          />
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}

export default LocationDialog;

const countries = createListCollection({
  items: [{ label: "United States", value: "United States" }],
});

const states = createListCollection({
  items: [
    { label: "California", value: "California" },
    { label: "Florida", value: "Florida" },
    { label: "New York", value: "New York" },
  ],
});
