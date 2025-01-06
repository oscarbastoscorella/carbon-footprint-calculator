import { render, screen } from "@test-utils";

import Carousel from "./Carousel";
import type { EnergyConsumption } from "@ts-types/electricity";

vi.mock("./Card", () => ({
  default: () => <li>mocked card</li>,
}));

describe("Carousel", () => {
  it("should display a card list with 6 cards", () => {
    const energyConsumptionsTest: EnergyConsumption[] = Array.from(
      { length: 6 },
      (_, i) => ({
        id: `${i + 1}`,
        date: `Date ${i + 1}`,
        consumption: (i + 1) * 10,
      }),
    );

    render(<Carousel data={energyConsumptionsTest} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });

  it("should display a skeleton list when loading", () => {
    render(<Carousel isLoading />);
    expect(screen.getAllByRole("status")).toHaveLength(10);
  });
});
