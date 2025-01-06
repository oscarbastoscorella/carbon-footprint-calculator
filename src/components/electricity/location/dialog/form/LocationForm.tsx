import { Button } from "@ui/button";
import { Flex } from "@chakra-ui/react";
import { FootprintLocation } from "@ts-types/electricity";
import InputSelect from "@common/form/InputSelect";
import { SelectItem } from "@ts-types/common";
import styled from "@emotion/styled";
import { useState } from "react";

type LocationFormProps = {
  countries: SelectItem;
  states: SelectItem;
  onSubmit: (location: { country: string; state: string }) => void;
  onClose: () => void;
  contentRef?: React.RefObject<HTMLDivElement>;
  selectedLocation?: FootprintLocation;
  isLoading?: boolean;
};

export default function LocationForm({
  countries,
  states,
  onSubmit,
  onClose,
  contentRef,
  selectedLocation = initialLocation,
  isLoading = false,
}: LocationFormProps) {
  const [location, setLocation] = useState(selectedLocation);

  const handleLocationChange = (key: "country" | "state", value: string[]) => {
    const newValue = value[0];
    setLocation((prev) => ({ ...prev, [key]: newValue }));
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(location);
      }}
    >
      <Flex direction="column" gap={4} w="100%">
        <InputSelect
          label="Country"
          placeholder="Select a Country"
          options={countries}
          value={[location.country]}
          onValueChange={(value) => handleLocationChange("country", value)}
          contentRef={contentRef}
        />
        <InputSelect
          label="State"
          placeholder="Select a State"
          options={states}
          value={[location.state]}
          onValueChange={(value) => handleLocationChange("state", value)}
          contentRef={contentRef}
        />
        <Flex gap={4} justify="flex-end">
          <Button size="md" onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button loading={isLoading} loadingText="Saving..." type="submit">
            Save
          </Button>
        </Flex>
      </Flex>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
`;

const initialLocation = {
  id: "",
  country: "United States",
  state: "California",
};
