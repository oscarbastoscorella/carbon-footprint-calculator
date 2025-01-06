import { render, screen } from "@test-utils";

import Logo from "./Logo";

describe("Logo", () => {
  it("renders the logo with the provided title and a leaf icon", () => {
    render(<Logo title="Carbon Footprint Calculator" />);

    expect(
      screen.getByRole("heading", { name: "Carbon Footprint Calculator" }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("leaf icon")).toBeInTheDocument();
  });
});
