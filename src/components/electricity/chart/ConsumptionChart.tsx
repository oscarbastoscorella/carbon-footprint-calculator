import * as Highcharts from "highcharts/highstock";

import { AspectRatio, Box, Show, Skeleton } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@ui/color-mode";
import { useEffect, useMemo, useRef } from "react";

import HighchartsReact from "highcharts-react-official";

const commonLabelStyle = { style: { color: "#b0abab" } };
const buttonThemeBase = {
  fill: "none",
  stroke: "none",
  "stroke-width": 0,
  r: 8,
  style: { color: "#d9d7d7", fontWeight: "bold", fontSize: "1em" },
};

const gradientFillLight: Highcharts.GradientColorObject = {
  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
  stops: [
    [0, "#F26989"],
    [1, "#EEF1F3"],
  ],
};

const gradientFillDark: Highcharts.GradientColorObject = {
  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
  stops: [
    [0, "#5c0d13"],
    [1, "#000000"],
  ],
};
Highcharts.setOptions({
  lang: { rangeSelectorZoom: "" },
  chart: {
    backgroundColor: "none",
    zooming: {
      resetButton: {
        theme: {
          fill: "#f23644",
          stroke: "none",
          style: { color: "#ffffff" },
          r: 8,
          states: { hover: { style: { color: "#000000" } } },
        },
      },
    },
  },
  title: { style: { color: "#b0abab", fontSize: "2em" } },
  xAxis: { labels: commonLabelStyle },
  yAxis: {
    labels: {
      ...commonLabelStyle,
      formatter: function () {
        return this.value + " kg";
      },
      x: 5,
    },
  },
  credits: {
    enabled: false,
  },
  navigator: {
    xAxis: {
      labels: {
        style: { color: "#ffffff", opacity: 1, textOutline: "#000000" },
      },
    },
    maskFill: "rgba(181, 145, 143, 0.2)",
    handles: {
      backgroundColor: "#5f5959",
      borderRadius: 50,
      width: 20,
      height: 20,
    },
  },
  scrollbar: { barBackgroundColor: "#5f5959", trackBorderColor: "#5f5959" },
  rangeSelector: {
    buttonTheme: {
      ...buttonThemeBase,
      style: { color: "#939393" },
      states: {
        select: { fill: "#f96772", style: { color: "#000000" } },
      },
    },
    buttonPosition: { align: "right" },
    buttonSpacing: 10,
    inputEnabled: false,
    buttons: [
      { type: "week", count: 1, text: "1w" },
      { type: "month", count: 1, text: "1m" },
      { type: "month", count: 3, text: "3m" },
      { type: "month", count: 6, text: "6m" },
      { type: "all", text: "All" },
    ],
  },
  tooltip: {
    backgroundColor: "#212020",
    style: { color: "#ffffff" },
  },
});

export type ConsumptionChartProps = {
  data?: (string | number)[][];
  isLoading?: boolean;
};

export function ConsumptionChart({
  data,
  isLoading = false,
}: ConsumptionChartProps) {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const { colorMode } = useColorMode();
  const gradientFill = useColorModeValue(gradientFillLight, gradientFillDark);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.chart.reflow();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = useMemo(
    () => ({
      xAxis: {
        tickLength: 0,
        lineWidth: 0,
        crosshair: { width: 1, color: "#616161", zIndex: 3 },
        labels: {
          style: {
            color: colorMode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
      scrollbar: {
        barBorderRadius: 4,
        height: 8,
        margin: 0,
        trackBorderRadius: 4,
      },
      yAxis: {
        gridLineWidth: 0,
        offset: 30,
        accessibility: {
          description: "CO2 emissions in kg",
        },
        labels: {
          style: {
            color: colorMode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
      legend: {
        itemStyle: {
          color: colorMode === "light" ? "#000000" : "#ffffff",
        },
      },
      navigator: {
        series: [{ type: "area", fillColor: gradientFill }],
        enabled: false,
        xAxis: { gridLineWidth: 0 },
        outlineWidth: 0,
        handles: { lineWidth: 0 },
      },
      rangeSelector: {
        selected: 0,
      },
      accessibility: {
        enabled: false,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              title: { style: { fontSize: "14px" } },
              yAxis: { labels: { style: { fontSize: "10px" } } },
            },
          },
        ],
      },
      plotOptions: {
        area: {
          threshold: null,
          color: "#f23644",
          fillColor: gradientFill,
        },
      },
      series: [
        {
          name: "CO2",
          type: "area",
          data,
          animation: false,
          tooltip: { valueDecimals: 2, pointFormat: "{point.y} kg" },
        },
      ],
    }),
    [colorMode, data, gradientFill],
  );

  return (
    <Box
      w="100%"
      h="auto"
      p={4}
      bg={"whiteAlpha.500"}
      _dark={{ bg: "blackAlpha.900" }}
      aria-label="Consumption Chart"
    >
      <AspectRatio ratio={16 / 9}>
        <>
          <Show when={isLoading}>
            <Skeleton h="100%" w="100%" role="status" bg={"whiteAlpha.50"} />
          </Show>
          <Show when={!isLoading}>
            <HighchartsReact
              ref={chartRef}
              highcharts={Highcharts}
              constructorType="stockChart"
              options={options}
            />
          </Show>
        </>
      </AspectRatio>
    </Box>
  );
}

export default ConsumptionChart;
