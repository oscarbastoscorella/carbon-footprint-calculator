import { Location, LocationProps } from "./Location";
import { render, screen } from "@test-utils";

describe("Location", () => {
  const defaultProps: LocationProps = {
    location: {
      id: "test-id",
      country: "UnitedStates",
      state: "California",
    },
  };

  const renderComponent = (props: Partial<LocationProps> = {}) =>
    render(<Location {...defaultProps} {...props} />);

  it("renders the provided country and state", () => {
    renderComponent({
      location: { id: "test-id", country: "United States", state: "Florida" },
    });
    expect(screen.getByText("Country")).toBeInTheDocument();
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("State")).toBeInTheDocument();
    expect(screen.getByText("Florida")).toBeInTheDocument();
  });
});
