import { render, screen } from "@test-utils";

import LocationForm from "./LocationForm";
import { createListCollection } from "@chakra-ui/react";
import { userEvent } from "@storybook/test";

const onSubmitMocked = vi.fn();
const onCancelMocked = vi.fn();

describe("LocationForm", () => {
  const mockCountries = createListCollection({
    items: [{ label: "United States", value: "United States" }],
  });

  const mockStates = createListCollection({
    items: [
      { label: "California", value: "California" },
      { label: "Florida", value: "Florida" },
      { label: "New York", value: "New York" },
      { label: "Texas", value: "Texas" },
    ],
  });

  const renderComponent = () =>
    render(
      <LocationForm
        countries={mockCountries}
        states={mockStates}
        onSubmit={onSubmitMocked}
        onClose={onCancelMocked}
      />,
    );

  it("should render labels for input fields", () => {
    renderComponent();
    expect(
      screen.getByRole("combobox", { name: /country/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", { name: /state/i }),
    ).toBeInTheDocument();
  });

  it("should submit the form", async () => {
    renderComponent();

    await userEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(onSubmitMocked).toBeCalledTimes(1);
    expect(onSubmitMocked).toBeCalledWith({
      country: "United States",
      state: "California",
      id: "",
    });
  });
});
