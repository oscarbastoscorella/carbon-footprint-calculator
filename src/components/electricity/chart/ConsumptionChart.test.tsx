import { ConsumptionChart, ConsumptionChartProps } from "./ConsumptionChart";
import { render, screen } from "@test-utils";

vitest.mock("highcharts-react-official", () => ({
  default: () => <div>mocked chart</div>,
}));

describe("ConsumptionChart", () => {
  const renderComponent = (props: ConsumptionChartProps) =>
    render(<ConsumptionChart {...props} />);

  it("renders the chart successfully with data", () => {
    const testData = [
      ["2024-01-01", 1],
      ["2024-01-02", 2],
    ];
    renderComponent({ data: testData });
    expect(screen.getByText(/mocked chart/i)).toBeInTheDocument();
  });

  it("renders the chart successfully with empty data", () => {
    renderComponent({ data: [] });
    expect(screen.getByText(/mocked chart/i)).toBeInTheDocument();
  });

  it("displays a loading skeleton when loading", () => {
    renderComponent({ isLoading: true });
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.queryByText(/mocked chart/i)).not.toBeInTheDocument();
  });
});
