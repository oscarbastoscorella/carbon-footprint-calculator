import { render, screen } from "@test-utils";

import Card from "./Card";

describe("Card", () => {
  it("renders details correctly", () => {
    const mockData = { id: "1", date: "Dec 27, 2024", consumption: 15.52 };

    render(<Card energyConsumption={mockData} />);

    expect(screen.getByText(/Dec 27, 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/15.52/i)).toBeInTheDocument();
  });
});
