import { AddEnergyFormValues, formSchema } from "./formSchema";
import { Controller, useForm } from "react-hook-form";
import { Flex, Input } from "@chakra-ui/react";

import { Button } from "@ui/button";
import { Field } from "@ui/field";
import { Slider } from "@ui/slider";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";

type AddEnergyFormProps = {
  onClose: () => void;
  onSubmit: (data: AddEnergyFormValues) => void;
  isLoading?: boolean;
};

export default function AddEnergyForm({
  onClose,
  onSubmit,
  isLoading = false,
}: AddEnergyFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddEnergyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { value: [40], date: "" },
  });

  return (
    <StyledForm onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Flex direction="column" gap={8} w="100%">
        <Field
          label="Date:"
          invalid={!!errors.date}
          errorText={errors.date?.message}
        >
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Input placeholder="Please enter date" {...field} />
            )}
          />
        </Field>

        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <Field
              label={`Energy: ${field.value[0]}`}
              invalid={!!errors.value?.length}
              errorText={errors.value?.[0]?.message}
            >
              <Slider
                width="full"
                onFocusChange={({ focusedIndex }) => {
                  if (focusedIndex !== -1) return;
                  field.onBlur();
                }}
                name={field.name}
                value={field.value}
                onValueChange={({ value }) => {
                  field.onChange(value);
                }}
              />
            </Field>
          )}
        />
        <Flex gap={4} justify="flex-end">
          <Button size="md" variant={"outline"} onClick={onClose}>
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
