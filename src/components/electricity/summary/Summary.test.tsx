import { render, screen } from "@test-utils";

import { FootprintSummary } from "@ts-types/electricity";
import Summary from "./Summary";

describe("Summary Component", () => {
  it("should display details", () => {
    const footprintSummaryTest: FootprintSummary = {
      id: "summary-1",
      consumption: 210.18,
      average: 1203.86,
      emissions: 8427,
    };

    render(<Summary footprintSummary={footprintSummaryTest} />);

    expect(
      screen.getByRole("heading", { name: "Summary" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Consumption")).toBeInTheDocument();
    expect(screen.getByText("Average")).toBeInTheDocument();
    expect(screen.getByText("Total Emissions")).toBeInTheDocument();
  });
});
