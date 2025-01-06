import { render, screen, within } from "@test-utils";

import AddEnergyForm from "./AddEnergyForm";

const onCloseMocked = vitest.fn();
const onFormSubmitMocked = vitest.fn();

describe("AddEnergyForm", () => {
  it("should render heading and labels correctly", () => {
    render(
      <AddEnergyForm onClose={onCloseMocked} onSubmit={onFormSubmitMocked} />,
    );

    expect(
      screen.getByPlaceholderText("Please enter date"),
    ).toBeInTheDocument();

    expect(screen.getByText(/date/i)).toBeInTheDocument();

    const slider = screen.getByRole("slider");
    within(slider).getByRole("textbox", {
      hidden: true,
    });

    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
});
