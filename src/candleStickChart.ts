import * as d3 from "d3";
import { D3ZoomEvent } from "d3";

interface IOHLCVCandleData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

/**
 * {
    width: width,
    height: height,
    candleTailWidth: 1,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 30,
    yPaddingScaleTop: 0.04,
    yPaddingScaleBottom: 0.03,
    xTicksTransform: 10,
    xLabelWidth: 150,
    xLabelHeight: 25,
    xLabelFontSize: 12,
    yLabelHeight: 25,
    yLabelFontSize: 12,
    decimal: 3,
    charWidth: 7.8,
    selectoreStrokeDashArray: "2,2",
    timeFormat: "%a %d %b '%y %H:%M",
    mobileBreakPoint: 600,
    //calcualte after set data//
    infoTextWidth: undefined,
    infoTextWidthMeta: undefined,
    yLabelWidth: undefined,
    paddingRight: undefined,
    svgWidth: undefined,
    svgHeight: undefined,
  };
 */
interface IChartConfig {
  width: number;
  height: number;
  candleTailWidth: number;
  paddingLeft: number;
  paddingTop: number;
  paddingBottom: number;
  yPaddingScaleTop: number;
  yPaddingScaleBottom: number;
  xTicksTransform: number;
  xLabelWidth: number;
  xLabelHeight: number;
  xLabelFontSize: number;
  yLabelHeight: number;
  yLabelFontSize: number;
  decimal: number;
  charWidth: number;
  selectoreStrokeDashArray: string;
  timeFormat: string;
  mobileBreakPoint: number;
  infoTextWidth?: number;
  infoTextWidthMeta?: number;
  yLabelWidth?: number;
  paddingRight: number;
  svgWidth: number;
  svgHeight: number;
}

interface IColors {
  grid: string;
  background: string;
  candleInfoText: string;
  candleInfoTextUp: string;
  candleInfoTextDown: string;
  tickColor: string;
  downCandlesStroke: string;
  downCandlesFill: string;
  downCandlesTail: string;
  upCandlesStroke: string;
  upCandlesFill: string;
  upCandlesTail: string;
  selectorLine: string;
  selectorLableBackground: string;
  selectorLabelText: string;
  short: string;
  shortStroke: string;
  long: string;
  longStroke: string;
  sl: string;
  slStroke: string;
  tp: string;
  tpStroke: string;
  activeTools: string;
  deActiveTools: string;
}

type TInterval = "1M" | "1H" | "4H" | "1D";

const oneDayData: IOHLCVCandleData[] = [
  {
    date: "2025-02-23",
    open: 100,
    high: 102.19,
    low: 97.72,
    close: 98.95,
    volume: 17447,
  },
  {
    date: "2025-02-24",
    open: 98.95,
    high: 101,
    low: 98.27,
    close: 98.89,
    volume: 32417,
  },
  {
    date: "2025-02-25",
    open: 98.89,
    high: 101.28,
    low: 96.27,
    close: 98.06,
    volume: 20189,
  },
  {
    date: "2025-02-26",
    open: 98.06,
    high: 98.46,
    low: 97.16,
    close: 97.26,
    volume: 32989,
  },
  {
    date: "2025-02-27",
    open: 97.26,
    high: 98.29,
    low: 95.22,
    close: 97.62,
    volume: 10248,
  },
  {
    date: "2025-02-28",
    open: 97.62,
    high: 100.75,
    low: 96.74,
    close: 98.82,
    volume: 7194,
  },
  {
    date: "2025-03-01",
    open: 98.82,
    high: 99.24,
    low: 97.65,
    close: 98.6,
    volume: 45807,
  },
  {
    date: "2025-03-02",
    open: 98.6,
    high: 100.17,
    low: 98.08,
    close: 98.21,
    volume: 48257,
  },
  {
    date: "2025-03-03",
    open: 98.21,
    high: 98.78,
    low: 97.02,
    close: 97.33,
    volume: 23993,
  },
  {
    date: "2025-03-04",
    open: 97.33,
    high: 98.65,
    low: 96.93,
    close: 98.39,
    volume: 7772,
  },
  {
    date: "2025-03-05",
    open: 98.39,
    high: 101.23,
    low: 96.64,
    close: 99.33,
    volume: 12557,
  },
  {
    date: "2025-03-06",
    open: 99.33,
    high: 100.61,
    low: 97.08,
    close: 99.08,
    volume: 5733,
  },
  {
    date: "2025-03-07",
    open: 99.08,
    high: 99.31,
    low: 96.9,
    close: 98.39,
    volume: 44536,
  },
  {
    date: "2025-03-08",
    open: 98.39,
    high: 100.47,
    low: 97.74,
    close: 98.73,
    volume: 42123,
  },
  {
    date: "2025-03-09",
    open: 98.73,
    high: 99.1,
    low: 96.62,
    close: 97.99,
    volume: 30209,
  },
  {
    date: "2025-03-10",
    open: 97.99,
    high: 98.93,
    low: 94.89,
    close: 97.29,
    volume: 47508,
  },
  {
    date: "2025-03-11",
    open: 97.29,
    high: 99.66,
    low: 96.71,
    close: 97.92,
    volume: 35517,
  },
  {
    date: "2025-03-12",
    open: 97.92,
    high: 98.27,
    low: 97.13,
    close: 98.06,
    volume: 41221,
  },
  {
    date: "2025-03-13",
    open: 98.06,
    high: 98.68,
    low: 95.02,
    close: 96.52,
    volume: 28586,
  },
  {
    date: "2025-03-14",
    open: 96.52,
    high: 97.13,
    low: 93.78,
    close: 95.72,
    volume: 38010,
  },
  {
    date: "2025-03-15",
    open: 95.72,
    high: 95.72,
    low: 92.46,
    close: 94.58,
    volume: 41061,
  },
  {
    date: "2025-03-16",
    open: 94.58,
    high: 95.7,
    low: 93.33,
    close: 95.05,
    volume: 20050,
  },
  {
    date: "2025-03-17",
    open: 95.05,
    high: 97.18,
    low: 92.98,
    close: 95.52,
    volume: 10470,
  },
  {
    date: "2025-03-18",
    open: 95.52,
    high: 96.27,
    low: 95.13,
    close: 96.11,
    volume: 10689,
  },
  {
    date: "2025-03-19",
    open: 96.11,
    high: 97.33,
    low: 92.9,
    close: 94.88,
    volume: 38314,
  },
  {
    date: "2025-03-20",
    open: 94.88,
    high: 97.94,
    low: 92.54,
    close: 96.18,
    volume: 49500,
  },
  {
    date: "2025-03-21",
    open: 96.18,
    high: 96.83,
    low: 94.2,
    close: 95.42,
    volume: 28624,
  },
  {
    date: "2025-03-22",
    open: 95.42,
    high: 96.51,
    low: 93.91,
    close: 96.41,
    volume: 33676,
  },
  {
    date: "2025-03-23",
    open: 96.41,
    high: 97.72,
    low: 93.31,
    close: 95.71,
    volume: 48729,
  },
  {
    date: "2025-03-24",
    open: 95.71,
    high: 97.87,
    low: 95.19,
    close: 97,
    volume: 8134,
  },
  {
    date: "2025-03-25",
    open: 97,
    high: 99.08,
    low: 95.13,
    close: 97.99,
    volume: 39098,
  },
  {
    date: "2025-03-26",
    open: 97.99,
    high: 98.35,
    low: 96.48,
    close: 97.23,
    volume: 44973,
  },
  {
    date: "2025-03-27",
    open: 97.23,
    high: 98.06,
    low: 94.3,
    close: 96.52,
    volume: 38388,
  },
  {
    date: "2025-03-28",
    open: 96.52,
    high: 97.32,
    low: 92.78,
    close: 95.16,
    volume: 35988,
  },
  {
    date: "2025-03-29",
    open: 95.16,
    high: 97,
    low: 93.49,
    close: 96.11,
    volume: 29086,
  },
  {
    date: "2025-03-30",
    open: 96.11,
    high: 96.95,
    low: 95.37,
    close: 96.12,
    volume: 26065,
  },
  {
    date: "2025-03-31",
    open: 96.12,
    high: 98.17,
    low: 92.95,
    close: 94.66,
    volume: 27976,
  },
  {
    date: "2025-04-01",
    open: 94.66,
    high: 96.85,
    low: 93.89,
    close: 95.55,
    volume: 7377,
  },
  {
    date: "2025-04-02",
    open: 95.55,
    high: 96.91,
    low: 93.42,
    close: 94.78,
    volume: 40035,
  },
  {
    date: "2025-04-03",
    open: 94.78,
    high: 95.6,
    low: 92.54,
    close: 94.31,
    volume: 24108,
  },
  {
    date: "2025-04-04",
    open: 94.31,
    high: 95.74,
    low: 91.85,
    close: 93.74,
    volume: 5877,
  },
  {
    date: "2025-04-05",
    open: 93.74,
    high: 94.44,
    low: 92.27,
    close: 94.25,
    volume: 8054,
  },
  {
    date: "2025-04-06",
    open: 94.25,
    high: 95.71,
    low: 92.27,
    close: 93.94,
    volume: 47940,
  },
  {
    date: "2025-04-07",
    open: 93.94,
    high: 95.98,
    low: 92.15,
    close: 95.25,
    volume: 28787,
  },
  {
    date: "2025-04-08",
    open: 95.25,
    high: 97.47,
    low: 93.98,
    close: 95.91,
    volume: 40005,
  },
  {
    date: "2025-04-09",
    open: 95.91,
    high: 98.85,
    low: 95.35,
    close: 97.5,
    volume: 40819,
  },
  {
    date: "2025-04-10",
    open: 97.5,
    high: 100.16,
    low: 95.9,
    close: 99.13,
    volume: 33879,
  },
  {
    date: "2025-04-11",
    open: 99.13,
    high: 101.39,
    low: 97.55,
    close: 99.19,
    volume: 21980,
  },
  {
    date: "2025-04-12",
    open: 99.19,
    high: 101.5,
    low: 97,
    close: 98.25,
    volume: 44529,
  },
  {
    date: "2025-04-13",
    open: 98.25,
    high: 99.45,
    low: 96.98,
    close: 99.15,
    volume: 45281,
  },
];

const oneHourData: IOHLCVCandleData[] = [
  {
    date: "2025-04-07T09:30:00.000Z",
    open: 100,
    high: 101.32,
    close: 100.63,
    low: 99.07,
    volume: 3909,
  },
  {
    date: "2025-04-07T10:30:00.000Z",
    open: 100.63,
    high: 100.94,
    close: 99.71,
    low: 99.04,
    volume: 5438,
  },
  {
    date: "2025-04-07T11:30:00.000Z",
    open: 99.71,
    high: 100.89,
    close: 100.24,
    low: 99.7,
    volume: 4604,
  },
  {
    date: "2025-04-07T12:30:00.000Z",
    open: 100.24,
    high: 100.6,
    close: 99.91,
    low: 99.81,
    volume: 1327,
  },
  {
    date: "2025-04-07T13:30:00.000Z",
    open: 99.91,
    high: 100.21,
    close: 99.5,
    low: 98.76,
    volume: 9108,
  },
  {
    date: "2025-04-07T14:30:00.000Z",
    open: 99.5,
    high: 99.83,
    close: 99.75,
    low: 99.42,
    volume: 5475,
  },
  {
    date: "2025-04-07T15:30:00.000Z",
    open: 99.75,
    high: 100.82,
    close: 100.74,
    low: 99.34,
    volume: 3232,
  },
  {
    date: "2025-04-07T16:30:00.000Z",
    open: 100.74,
    high: 101.08,
    close: 100.94,
    low: 100.37,
    volume: 6992,
  },
  {
    date: "2025-04-07T17:30:00.000Z",
    open: 100.94,
    high: 102.47,
    close: 101.66,
    low: 100.19,
    volume: 5545,
  },
  {
    date: "2025-04-07T18:30:00.000Z",
    open: 101.66,
    high: 101.8,
    close: 101.41,
    low: 100.73,
    volume: 1904,
  },
  {
    date: "2025-04-07T19:30:00.000Z",
    open: 101.41,
    high: 102,
    close: 101.27,
    low: 100.85,
    volume: 6027,
  },
  {
    date: "2025-04-07T20:30:00.000Z",
    open: 101.27,
    high: 101.64,
    close: 100.75,
    low: 100.3,
    volume: 1793,
  },
  {
    date: "2025-04-07T21:30:00.000Z",
    open: 100.75,
    high: 101.06,
    close: 99.87,
    low: 99.86,
    volume: 7017,
  },
  {
    date: "2025-04-07T22:30:00.000Z",
    open: 99.87,
    high: 100.06,
    close: 99.47,
    low: 98.99,
    volume: 8022,
  },
  {
    date: "2025-04-07T23:30:00.000Z",
    open: 99.47,
    high: 99.94,
    close: 99.37,
    low: 98.66,
    volume: 7084,
  },
  {
    date: "2025-04-08T00:30:00.000Z",
    open: 99.37,
    high: 100.04,
    close: 99.13,
    low: 98.69,
    volume: 4837,
  },
  {
    date: "2025-04-08T01:30:00.000Z",
    open: 99.13,
    high: 100.32,
    close: 99.87,
    low: 98.69,
    volume: 4123,
  },
  {
    date: "2025-04-08T02:30:00.000Z",
    open: 99.87,
    high: 101.22,
    close: 100.83,
    low: 99.47,
    volume: 8419,
  },
  {
    date: "2025-04-08T03:30:00.000Z",
    open: 100.83,
    high: 101.47,
    close: 100.03,
    low: 99.61,
    volume: 2887,
  },
  {
    date: "2025-04-08T04:30:00.000Z",
    open: 100.03,
    high: 100.96,
    close: 100.54,
    low: 99.46,
    volume: 3557,
  },
  {
    date: "2025-04-08T05:30:00.000Z",
    open: 100.54,
    high: 100.92,
    close: 100.56,
    low: 100.12,
    volume: 1870,
  },
  {
    date: "2025-04-08T06:30:00.000Z",
    open: 100.56,
    high: 101.83,
    close: 101.07,
    low: 99.86,
    volume: 6466,
  },
  {
    date: "2025-04-08T07:30:00.000Z",
    open: 101.07,
    high: 101.97,
    close: 100.31,
    low: 99.49,
    volume: 5448,
  },
  {
    date: "2025-04-08T08:30:00.000Z",
    open: 100.31,
    high: 100.59,
    close: 100.25,
    low: 99.65,
    volume: 4397,
  },
  {
    date: "2025-04-08T09:30:00.000Z",
    open: 100.25,
    high: 101.14,
    close: 99.66,
    low: 99.19,
    volume: 8482,
  },
  {
    date: "2025-04-08T10:30:00.000Z",
    open: 99.66,
    high: 100.05,
    close: 99.48,
    low: 99.35,
    volume: 4838,
  },
  {
    date: "2025-04-08T11:30:00.000Z",
    open: 99.48,
    high: 100.48,
    close: 98.99,
    low: 98.87,
    volume: 8634,
  },
  {
    date: "2025-04-08T12:30:00.000Z",
    open: 98.99,
    high: 99,
    close: 98.68,
    low: 98.42,
    volume: 5222,
  },
  {
    date: "2025-04-08T13:30:00.000Z",
    open: 98.68,
    high: 100.18,
    close: 99.62,
    low: 98.59,
    volume: 4076,
  },
  {
    date: "2025-04-08T14:30:00.000Z",
    open: 99.62,
    high: 100.41,
    close: 100.05,
    low: 99.43,
    volume: 4220,
  },
  {
    date: "2025-04-08T15:30:00.000Z",
    open: 100.05,
    high: 100.88,
    close: 99.95,
    low: 99.28,
    volume: 2572,
  },
  {
    date: "2025-04-08T16:30:00.000Z",
    open: 99.95,
    high: 101.01,
    close: 100.05,
    low: 99.71,
    volume: 7650,
  },
  {
    date: "2025-04-08T17:30:00.000Z",
    open: 100.05,
    high: 100.62,
    close: 100.2,
    low: 99.3,
    volume: 9712,
  },
  {
    date: "2025-04-08T18:30:00.000Z",
    open: 100.2,
    high: 100.99,
    close: 100.62,
    low: 99.5,
    volume: 3271,
  },
  {
    date: "2025-04-08T19:30:00.000Z",
    open: 100.62,
    high: 101.95,
    close: 101.02,
    low: 100.1,
    volume: 8796,
  },
  {
    date: "2025-04-08T20:30:00.000Z",
    open: 101.02,
    high: 101.24,
    close: 100.77,
    low: 100.18,
    volume: 4930,
  },
  {
    date: "2025-04-08T21:30:00.000Z",
    open: 100.77,
    high: 101.52,
    close: 100.52,
    low: 100.04,
    volume: 2623,
  },
  {
    date: "2025-04-08T22:30:00.000Z",
    open: 100.52,
    high: 100.54,
    close: 99.96,
    low: 99.32,
    volume: 5186,
  },
  {
    date: "2025-04-08T23:30:00.000Z",
    open: 99.96,
    high: 100.89,
    close: 100.29,
    low: 99.72,
    volume: 4063,
  },
  {
    date: "2025-04-09T00:30:00.000Z",
    open: 100.29,
    high: 102.08,
    close: 101.15,
    low: 100.04,
    volume: 6257,
  },
  {
    date: "2025-04-09T01:30:00.000Z",
    open: 101.15,
    high: 102.12,
    close: 100.84,
    low: 100.38,
    volume: 9196,
  },
  {
    date: "2025-04-09T02:30:00.000Z",
    open: 100.84,
    high: 101.6,
    close: 100.76,
    low: 100.34,
    volume: 1020,
  },
  {
    date: "2025-04-09T03:30:00.000Z",
    open: 100.76,
    high: 101.43,
    close: 101.08,
    low: 100.72,
    volume: 3195,
  },
  {
    date: "2025-04-09T04:30:00.000Z",
    open: 101.08,
    high: 101.59,
    close: 101.06,
    low: 100.63,
    volume: 6552,
  },
  {
    date: "2025-04-09T05:30:00.000Z",
    open: 101.06,
    high: 101.48,
    close: 101.24,
    low: 100.25,
    volume: 3427,
  },
  {
    date: "2025-04-09T06:30:00.000Z",
    open: 101.24,
    high: 101.66,
    close: 101.53,
    low: 101.14,
    volume: 7926,
  },
  {
    date: "2025-04-09T07:30:00.000Z",
    open: 101.53,
    high: 102.81,
    close: 102.21,
    low: 100.77,
    volume: 8920,
  },
  {
    date: "2025-04-09T08:30:00.000Z",
    open: 102.21,
    high: 103.4,
    close: 102.48,
    low: 102.14,
    volume: 4141,
  },
  {
    date: "2025-04-09T09:30:00.000Z",
    open: 102.48,
    high: 103.55,
    close: 103.07,
    low: 101.81,
    volume: 4564,
  },
  {
    date: "2025-04-09T10:30:00.000Z",
    open: 103.07,
    high: 103.68,
    close: 102.82,
    low: 102.75,
    volume: 7098,
  },
  {
    date: "2025-04-09T11:30:00.000Z",
    open: 102.82,
    high: 103.71,
    close: 103.05,
    low: 102.3,
    volume: 7653,
  },
  {
    date: "2025-04-09T12:30:00.000Z",
    open: 103.05,
    high: 103.8,
    close: 103.3,
    low: 102.32,
    volume: 1324,
  },
  {
    date: "2025-04-09T13:30:00.000Z",
    open: 103.3,
    high: 104.96,
    close: 104.25,
    low: 103.13,
    volume: 9934,
  },
  {
    date: "2025-04-09T14:30:00.000Z",
    open: 104.25,
    high: 104.75,
    close: 103.87,
    low: 103.7,
    volume: 8208,
  },
  {
    date: "2025-04-09T15:30:00.000Z",
    open: 103.87,
    high: 104.3,
    close: 103.69,
    low: 103.6,
    volume: 1429,
  },
  {
    date: "2025-04-09T16:30:00.000Z",
    open: 103.69,
    high: 105.2,
    close: 104.58,
    low: 103.45,
    volume: 1535,
  },
  {
    date: "2025-04-09T17:30:00.000Z",
    open: 104.58,
    high: 105.94,
    close: 105.54,
    low: 103.84,
    volume: 3196,
  },
  {
    date: "2025-04-09T18:30:00.000Z",
    open: 105.54,
    high: 106.94,
    close: 106.41,
    low: 104.71,
    volume: 3634,
  },
  {
    date: "2025-04-09T19:30:00.000Z",
    open: 106.41,
    high: 107.46,
    close: 106.87,
    low: 106.38,
    volume: 8733,
  },
  {
    date: "2025-04-09T20:30:00.000Z",
    open: 106.87,
    high: 107.72,
    close: 107.19,
    low: 106.56,
    volume: 8944,
  },
  {
    date: "2025-04-09T21:30:00.000Z",
    open: 107.19,
    high: 108.42,
    close: 107.76,
    low: 106.52,
    volume: 6745,
  },
  {
    date: "2025-04-09T22:30:00.000Z",
    open: 107.76,
    high: 108.17,
    close: 107.13,
    low: 106.44,
    volume: 2555,
  },
  {
    date: "2025-04-09T23:30:00.000Z",
    open: 107.13,
    high: 108.66,
    close: 108.16,
    low: 106.65,
    volume: 6179,
  },
  {
    date: "2025-04-10T00:30:00.000Z",
    open: 108.16,
    high: 109.8,
    close: 108.82,
    low: 107.67,
    volume: 6443,
  },
  {
    date: "2025-04-10T01:30:00.000Z",
    open: 108.82,
    high: 110.19,
    close: 109.68,
    low: 108.15,
    volume: 6057,
  },
  {
    date: "2025-04-10T02:30:00.000Z",
    open: 109.68,
    high: 110.6,
    close: 109.51,
    low: 108.79,
    volume: 2852,
  },
  {
    date: "2025-04-10T03:30:00.000Z",
    open: 109.51,
    high: 109.64,
    close: 108.97,
    low: 108.23,
    volume: 2071,
  },
  {
    date: "2025-04-10T04:30:00.000Z",
    open: 108.97,
    high: 109.98,
    close: 109.45,
    low: 108.8,
    volume: 5140,
  },
  {
    date: "2025-04-10T05:30:00.000Z",
    open: 109.45,
    high: 109.71,
    close: 109.22,
    low: 109.09,
    volume: 3222,
  },
  {
    date: "2025-04-10T06:30:00.000Z",
    open: 109.22,
    high: 109.9,
    close: 108.68,
    low: 108.1,
    volume: 6034,
  },
  {
    date: "2025-04-10T07:30:00.000Z",
    open: 108.68,
    high: 109.02,
    close: 107.8,
    low: 107.71,
    volume: 9721,
  },
  {
    date: "2025-04-10T08:30:00.000Z",
    open: 107.8,
    high: 108.39,
    close: 107.6,
    low: 107.02,
    volume: 6570,
  },
  {
    date: "2025-04-10T09:30:00.000Z",
    open: 107.6,
    high: 108.55,
    close: 107.29,
    low: 106.72,
    volume: 4924,
  },
  {
    date: "2025-04-10T10:30:00.000Z",
    open: 107.29,
    high: 107.63,
    close: 106.81,
    low: 106.62,
    volume: 7330,
  },
  {
    date: "2025-04-10T11:30:00.000Z",
    open: 106.81,
    high: 106.97,
    close: 106.21,
    low: 106.01,
    volume: 6606,
  },
  {
    date: "2025-04-10T12:30:00.000Z",
    open: 106.21,
    high: 106.75,
    close: 105.52,
    low: 104.93,
    volume: 9627,
  },
  {
    date: "2025-04-10T13:30:00.000Z",
    open: 105.52,
    high: 105.68,
    close: 104.68,
    low: 103.95,
    volume: 6285,
  },
  {
    date: "2025-04-10T14:30:00.000Z",
    open: 104.68,
    high: 105.2,
    close: 104.58,
    low: 103.98,
    volume: 9663,
  },
  {
    date: "2025-04-10T15:30:00.000Z",
    open: 104.58,
    high: 105.42,
    close: 105.26,
    low: 103.61,
    volume: 8469,
  },
  {
    date: "2025-04-10T16:30:00.000Z",
    open: 105.26,
    high: 105.91,
    close: 105.61,
    low: 104.48,
    volume: 8136,
  },
  {
    date: "2025-04-10T17:30:00.000Z",
    open: 105.61,
    high: 106.51,
    close: 106.13,
    low: 105.35,
    volume: 3404,
  },
  {
    date: "2025-04-10T18:30:00.000Z",
    open: 106.13,
    high: 106.43,
    close: 105.96,
    low: 105.79,
    volume: 3948,
  },
  {
    date: "2025-04-10T19:30:00.000Z",
    open: 105.96,
    high: 106.35,
    close: 106.15,
    low: 105.12,
    volume: 4538,
  },
  {
    date: "2025-04-10T20:30:00.000Z",
    open: 106.15,
    high: 107.58,
    close: 106.77,
    low: 105.35,
    volume: 2929,
  },
  {
    date: "2025-04-10T21:30:00.000Z",
    open: 106.77,
    high: 107.04,
    close: 105.86,
    low: 105.09,
    volume: 6312,
  },
  {
    date: "2025-04-10T22:30:00.000Z",
    open: 105.86,
    high: 106.77,
    close: 106.43,
    low: 105.72,
    volume: 1114,
  },
  {
    date: "2025-04-10T23:30:00.000Z",
    open: 106.43,
    high: 107.15,
    close: 105.69,
    low: 105.54,
    volume: 4542,
  },
  {
    date: "2025-04-11T00:30:00.000Z",
    open: 105.69,
    high: 106.09,
    close: 105.59,
    low: 104.67,
    volume: 2027,
  },
  {
    date: "2025-04-11T01:30:00.000Z",
    open: 105.59,
    high: 105.69,
    close: 105.6,
    low: 104.9,
    volume: 7686,
  },
  {
    date: "2025-04-11T02:30:00.000Z",
    open: 105.6,
    high: 105.66,
    close: 105.29,
    low: 104.88,
    volume: 3138,
  },
  {
    date: "2025-04-11T03:30:00.000Z",
    open: 105.29,
    high: 107.09,
    close: 106.22,
    low: 104.42,
    volume: 2542,
  },
  {
    date: "2025-04-11T04:30:00.000Z",
    open: 106.22,
    high: 106.27,
    close: 105.83,
    low: 105.63,
    volume: 5292,
  },
  {
    date: "2025-04-11T05:30:00.000Z",
    open: 105.83,
    high: 106.81,
    close: 106.58,
    low: 105.72,
    volume: 6335,
  },
  {
    date: "2025-04-11T06:30:00.000Z",
    open: 106.58,
    high: 107.58,
    close: 106.88,
    low: 106.39,
    volume: 3499,
  },
  {
    date: "2025-04-11T07:30:00.000Z",
    open: 106.88,
    high: 107.6,
    close: 107.44,
    low: 106.54,
    volume: 4367,
  },
  {
    date: "2025-04-11T08:30:00.000Z",
    open: 107.44,
    high: 108.52,
    close: 107.77,
    low: 107.39,
    volume: 2982,
  },
  {
    date: "2025-04-11T09:30:00.000Z",
    open: 107.77,
    high: 108.45,
    close: 107.11,
    low: 106.36,
    volume: 7813,
  },
  {
    date: "2025-04-11T10:30:00.000Z",
    open: 107.11,
    high: 107.51,
    close: 106.57,
    low: 105.8,
    volume: 9273,
  },
  {
    date: "2025-04-11T11:30:00.000Z",
    open: 106.57,
    high: 106.57,
    close: 105.89,
    low: 105.66,
    volume: 7977,
  },
  {
    date: "2025-04-11T12:30:00.000Z",
    open: 105.89,
    high: 106.6,
    close: 106.21,
    low: 105.75,
    volume: 8490,
  },
  {
    date: "2025-04-11T13:30:00.000Z",
    open: 106.21,
    high: 106.68,
    close: 106.17,
    low: 105.17,
    volume: 4162,
  },
  {
    date: "2025-04-11T14:30:00.000Z",
    open: 106.17,
    high: 107.57,
    close: 106.81,
    low: 105.51,
    volume: 6466,
  },
  {
    date: "2025-04-11T15:30:00.000Z",
    open: 106.81,
    high: 107.46,
    close: 106.51,
    low: 105.96,
    volume: 1998,
  },
  {
    date: "2025-04-11T16:30:00.000Z",
    open: 106.51,
    high: 107.61,
    close: 107.54,
    low: 106.25,
    volume: 3478,
  },
  {
    date: "2025-04-11T17:30:00.000Z",
    open: 107.54,
    high: 108.5,
    close: 108.1,
    low: 107.29,
    volume: 3550,
  },
  {
    date: "2025-04-11T18:30:00.000Z",
    open: 108.1,
    high: 109.29,
    close: 108.89,
    low: 107.4,
    volume: 4639,
  },
  {
    date: "2025-04-11T19:30:00.000Z",
    open: 108.89,
    high: 109.45,
    close: 108.67,
    low: 107.97,
    volume: 2945,
  },
  {
    date: "2025-04-11T20:30:00.000Z",
    open: 108.67,
    high: 109.34,
    close: 107.89,
    low: 107.23,
    volume: 9303,
  },
  {
    date: "2025-04-11T21:30:00.000Z",
    open: 107.89,
    high: 108.33,
    close: 108.19,
    low: 107.38,
    volume: 3489,
  },
  {
    date: "2025-04-11T22:30:00.000Z",
    open: 108.19,
    high: 108.31,
    close: 108.28,
    low: 107.6,
    volume: 3677,
  },
  {
    date: "2025-04-11T23:30:00.000Z",
    open: 108.28,
    high: 109.29,
    close: 108.31,
    low: 108.15,
    volume: 9867,
  },
  {
    date: "2025-04-12T00:30:00.000Z",
    open: 108.31,
    high: 109.79,
    close: 109.13,
    low: 108.02,
    volume: 3898,
  },
  {
    date: "2025-04-12T01:30:00.000Z",
    open: 109.13,
    high: 109.7,
    close: 108.72,
    low: 108.71,
    volume: 3941,
  },
  {
    date: "2025-04-12T02:30:00.000Z",
    open: 108.72,
    high: 109.38,
    close: 108.89,
    low: 108.24,
    volume: 1054,
  },
  {
    date: "2025-04-12T03:30:00.000Z",
    open: 108.89,
    high: 109.51,
    close: 108.02,
    low: 107.88,
    volume: 7227,
  },
  {
    date: "2025-04-12T04:30:00.000Z",
    open: 108.02,
    high: 108.79,
    close: 107.39,
    low: 106.91,
    volume: 9570,
  },
  {
    date: "2025-04-12T05:30:00.000Z",
    open: 107.39,
    high: 107.69,
    close: 107.31,
    low: 106.87,
    volume: 1271,
  },
  {
    date: "2025-04-12T06:30:00.000Z",
    open: 107.31,
    high: 107.62,
    close: 106.43,
    low: 105.58,
    volume: 9232,
  },
  {
    date: "2025-04-12T07:30:00.000Z",
    open: 106.43,
    high: 107.61,
    close: 106.93,
    low: 105.66,
    volume: 5361,
  },
  {
    date: "2025-04-12T08:30:00.000Z",
    open: 106.93,
    high: 108.27,
    close: 107.62,
    low: 106.73,
    volume: 2856,
  },
];

const oneMinuteData: IOHLCVCandleData[] = [
  {
    date: "2025-04-14 09:15:00",
    open: 100,
    high: 100.021,
    low: 99.941,
    close: 99.994,
    volume: 528,
  },
  {
    date: "2025-04-14 09:16:00",
    open: 99.994,
    high: 100.151,
    low: 99.922,
    close: 100.092,
    volume: 718,
  },
  {
    date: "2025-04-14 09:17:00",
    open: 100.092,
    high: 100.133,
    low: 99.949,
    close: 99.997,
    volume: 562,
  },
  {
    date: "2025-04-14 09:18:00",
    open: 99.997,
    high: 100.082,
    low: 99.913,
    close: 100.017,
    volume: 531,
  },
  {
    date: "2025-04-14 09:19:00",
    open: 100.017,
    high: 100.144,
    low: 99.972,
    close: 100.097,
    volume: 262,
  },
  {
    date: "2025-04-14 09:20:00",
    open: 100.097,
    high: 100.122,
    low: 99.928,
    close: 100.006,
    volume: 282,
  },
  {
    date: "2025-04-14 09:21:00",
    open: 100.006,
    high: 100.006,
    low: 99.824,
    close: 99.86,
    volume: 303,
  },
  {
    date: "2025-04-14 09:22:00",
    open: 99.86,
    high: 100.025,
    low: 99.847,
    close: 99.953,
    volume: 779,
  },
  {
    date: "2025-04-14 09:23:00",
    open: 99.953,
    high: 100.012,
    low: 99.908,
    close: 100,
    volume: 366,
  },
  {
    date: "2025-04-14 09:24:00",
    open: 100,
    high: 100.05,
    low: 99.868,
    close: 99.932,
    volume: 665,
  },
  {
    date: "2025-04-14 09:25:00",
    open: 99.932,
    high: 100.012,
    low: 99.839,
    close: 99.894,
    volume: 102,
  },
  {
    date: "2025-04-14 09:26:00",
    open: 99.894,
    high: 99.926,
    low: 99.854,
    close: 99.87,
    volume: 682,
  },
  {
    date: "2025-04-14 09:27:00",
    open: 99.87,
    high: 99.938,
    low: 99.764,
    close: 99.812,
    volume: 117,
  },
  {
    date: "2025-04-14 09:28:00",
    open: 99.812,
    high: 99.905,
    low: 99.776,
    close: 99.873,
    volume: 181,
  },
  {
    date: "2025-04-14 09:29:00",
    open: 99.873,
    high: 99.954,
    low: 99.852,
    close: 99.889,
    volume: 303,
  },
  {
    date: "2025-04-14 09:30:00",
    open: 99.889,
    high: 99.969,
    low: 99.806,
    close: 99.9,
    volume: 711,
  },
  {
    date: "2025-04-14 09:31:00",
    open: 99.9,
    high: 99.913,
    low: 99.828,
    close: 99.835,
    volume: 819,
  },
  {
    date: "2025-04-14 09:32:00",
    open: 99.835,
    high: 99.87,
    low: 99.805,
    close: 99.826,
    volume: 468,
  },
  {
    date: "2025-04-14 09:33:00",
    open: 99.826,
    high: 99.903,
    low: 99.731,
    close: 99.787,
    volume: 453,
  },
  {
    date: "2025-04-14 09:34:00",
    open: 99.787,
    high: 99.806,
    low: 99.714,
    close: 99.789,
    volume: 451,
  },
  {
    date: "2025-04-14 09:35:00",
    open: 99.789,
    high: 99.852,
    low: 99.614,
    close: 99.685,
    volume: 940,
  },
  {
    date: "2025-04-14 09:36:00",
    open: 99.685,
    high: 99.724,
    low: 99.634,
    close: 99.697,
    volume: 548,
  },
  {
    date: "2025-04-14 09:37:00",
    open: 99.697,
    high: 99.768,
    low: 99.586,
    close: 99.647,
    volume: 747,
  },
  {
    date: "2025-04-14 09:38:00",
    open: 99.647,
    high: 99.718,
    low: 99.511,
    close: 99.59,
    volume: 263,
  },
  {
    date: "2025-04-14 09:39:00",
    open: 99.59,
    high: 99.667,
    low: 99.505,
    close: 99.646,
    volume: 743,
  },
  {
    date: "2025-04-14 09:40:00",
    open: 99.646,
    high: 99.72,
    low: 99.474,
    close: 99.55,
    volume: 698,
  },
  {
    date: "2025-04-14 09:41:00",
    open: 99.55,
    high: 99.66,
    low: 99.54,
    close: 99.595,
    volume: 447,
  },
  {
    date: "2025-04-14 09:42:00",
    open: 99.595,
    high: 99.604,
    low: 99.476,
    close: 99.532,
    volume: 952,
  },
  {
    date: "2025-04-14 09:43:00",
    open: 99.532,
    high: 99.616,
    low: 99.485,
    close: 99.51,
    volume: 480,
  },
  {
    date: "2025-04-14 09:44:00",
    open: 99.51,
    high: 99.654,
    low: 99.442,
    close: 99.585,
    volume: 705,
  },
  {
    date: "2025-04-14 09:45:00",
    open: 99.585,
    high: 99.765,
    low: 99.546,
    close: 99.688,
    volume: 709,
  },
  {
    date: "2025-04-14 09:46:00",
    open: 99.688,
    high: 99.702,
    low: 99.513,
    close: 99.562,
    volume: 446,
  },
  {
    date: "2025-04-14 09:47:00",
    open: 99.562,
    high: 99.565,
    low: 99.338,
    close: 99.421,
    volume: 637,
  },
  {
    date: "2025-04-14 09:48:00",
    open: 99.421,
    high: 99.572,
    low: 99.385,
    close: 99.498,
    volume: 456,
  },
  {
    date: "2025-04-14 09:49:00",
    open: 99.498,
    high: 99.62,
    low: 99.477,
    close: 99.58,
    volume: 627,
  },
  {
    date: "2025-04-14 09:50:00",
    open: 99.58,
    high: 99.662,
    low: 99.447,
    close: 99.512,
    volume: 223,
  },
  {
    date: "2025-04-14 09:51:00",
    open: 99.512,
    high: 99.651,
    low: 99.5,
    close: 99.595,
    volume: 415,
  },
  {
    date: "2025-04-14 09:52:00",
    open: 99.595,
    high: 99.597,
    low: 99.442,
    close: 99.49,
    volume: 401,
  },
  {
    date: "2025-04-14 09:53:00",
    open: 99.49,
    high: 99.642,
    low: 99.462,
    close: 99.582,
    volume: 329,
  },
  {
    date: "2025-04-14 09:54:00",
    open: 99.582,
    high: 99.788,
    low: 99.516,
    close: 99.726,
    volume: 510,
  },
  {
    date: "2025-04-14 09:55:00",
    open: 99.726,
    high: 99.782,
    low: 99.584,
    close: 99.584,
    volume: 111,
  },
  {
    date: "2025-04-14 09:56:00",
    open: 99.584,
    high: 99.669,
    low: 99.406,
    close: 99.487,
    volume: 258,
  },
  {
    date: "2025-04-14 09:57:00",
    open: 99.487,
    high: 99.643,
    low: 99.409,
    close: 99.587,
    volume: 653,
  },
  {
    date: "2025-04-14 09:58:00",
    open: 99.587,
    high: 99.653,
    low: 99.501,
    close: 99.562,
    volume: 219,
  },
  {
    date: "2025-04-14 09:59:00",
    open: 99.562,
    high: 99.706,
    low: 99.546,
    close: 99.691,
    volume: 458,
  },
  {
    date: "2025-04-14 10:00:00",
    open: 99.691,
    high: 99.756,
    low: 99.601,
    close: 99.667,
    volume: 214,
  },
  {
    date: "2025-04-14 10:01:00",
    open: 99.667,
    high: 99.751,
    low: 99.612,
    close: 99.655,
    volume: 739,
  },
  {
    date: "2025-04-14 10:02:00",
    open: 99.655,
    high: 99.737,
    low: 99.611,
    close: 99.715,
    volume: 225,
  },
  {
    date: "2025-04-14 10:03:00",
    open: 99.715,
    high: 99.748,
    low: 99.571,
    close: 99.647,
    volume: 881,
  },
  {
    date: "2025-04-14 10:04:00",
    open: 99.647,
    high: 99.714,
    low: 99.631,
    close: 99.648,
    volume: 264,
  },
];

const fourHourData: IOHLCVCandleData[] = [
  {
    date: "2025-04-06 02:30",
    open: 100,
    high: 102.61,
    low: 98.85,
    close: 101.28,
    volume: 22180,
  },
  {
    date: "2025-04-06 06:30",
    open: 101.28,
    high: 102.71,
    low: 99.42,
    close: 100.52,
    volume: 29669,
  },
  {
    date: "2025-04-06 10:30",
    open: 100.52,
    high: 102.4,
    low: 99.93,
    close: 101.31,
    volume: 27738,
  },
  {
    date: "2025-04-06 14:30",
    open: 101.31,
    high: 101.56,
    low: 100.09,
    close: 100.25,
    volume: 9588,
  },
  {
    date: "2025-04-06 18:30",
    open: 100.25,
    high: 101.73,
    low: 99.8,
    close: 100.15,
    volume: 3367,
  },
  {
    date: "2025-04-06 22:30",
    open: 100.15,
    high: 102.6,
    low: 98.51,
    close: 101.09,
    volume: 6185,
  },
  {
    date: "2025-04-07 02:30",
    open: 101.09,
    high: 102.46,
    low: 98.6,
    close: 100.24,
    volume: 4881,
  },
  {
    date: "2025-04-07 06:30",
    open: 100.24,
    high: 100.77,
    low: 98.72,
    close: 99.37,
    volume: 5555,
  },
  {
    date: "2025-04-07 10:30",
    open: 99.37,
    high: 99.68,
    low: 98.28,
    close: 98.36,
    volume: 12657,
  },
  {
    date: "2025-04-07 14:30",
    open: 98.36,
    high: 100.09,
    low: 97.26,
    close: 98.57,
    volume: 14756,
  },
  {
    date: "2025-04-07 18:30",
    open: 98.57,
    high: 100,
    low: 97.65,
    close: 97.75,
    volume: 29220,
  },
  {
    date: "2025-04-07 22:30",
    open: 97.75,
    high: 99.06,
    low: 97.49,
    close: 98.88,
    volume: 15603,
  },
  {
    date: "2025-04-08 02:30",
    open: 98.88,
    high: 99.76,
    low: 98,
    close: 98.64,
    volume: 8692,
  },
  {
    date: "2025-04-08 06:30",
    open: 98.64,
    high: 98.91,
    low: 97.62,
    close: 97.7,
    volume: 12200,
  },
  {
    date: "2025-04-08 10:30",
    open: 97.7,
    high: 97.7,
    low: 95.38,
    close: 96.9,
    volume: 4617,
  },
  {
    date: "2025-04-08 14:30",
    open: 96.9,
    high: 99.1,
    low: 96.73,
    close: 97.88,
    volume: 21315,
  },
  {
    date: "2025-04-08 18:30",
    open: 97.88,
    high: 98.98,
    low: 96.98,
    close: 98.72,
    volume: 19841,
  },
  {
    date: "2025-04-08 22:30",
    open: 98.72,
    high: 101.6,
    low: 97.45,
    close: 99.94,
    volume: 19000,
  },
  {
    date: "2025-04-09 02:30",
    open: 99.94,
    high: 101.43,
    low: 99.74,
    close: 101.35,
    volume: 8977,
  },
  {
    date: "2025-04-09 06:30",
    open: 101.35,
    high: 102,
    low: 100.19,
    close: 101.35,
    volume: 18668,
  },
  {
    date: "2025-04-09 10:30",
    open: 101.35,
    high: 102.99,
    low: 101,
    close: 101.81,
    volume: 15224,
  },
  {
    date: "2025-04-09 14:30",
    open: 101.81,
    high: 102.3,
    low: 100.21,
    close: 100.52,
    volume: 5692,
  },
  {
    date: "2025-04-09 18:30",
    open: 100.52,
    high: 101.25,
    low: 100.3,
    close: 100.59,
    volume: 21081,
  },
  {
    date: "2025-04-09 22:30",
    open: 100.59,
    high: 101.52,
    low: 100.08,
    close: 100.5,
    volume: 27016,
  },
  {
    date: "2025-04-10 02:30",
    open: 100.5,
    high: 102.06,
    low: 100.25,
    close: 101.28,
    volume: 23835,
  },
  {
    date: "2025-04-10 06:30",
    open: 101.28,
    high: 101.87,
    low: 100.99,
    close: 101.13,
    volume: 26092,
  },
  {
    date: "2025-04-10 10:30",
    open: 101.13,
    high: 102.61,
    low: 100.33,
    close: 100.71,
    volume: 26553,
  },
  {
    date: "2025-04-10 14:30",
    open: 100.71,
    high: 100.86,
    low: 99.93,
    close: 100,
    volume: 9036,
  },
  {
    date: "2025-04-10 18:30",
    open: 100,
    high: 101.11,
    low: 99.8,
    close: 100.5,
    volume: 22376,
  },
  {
    date: "2025-04-10 22:30",
    open: 100.5,
    high: 101.57,
    low: 100.34,
    close: 101.11,
    volume: 8810,
  },
  {
    date: "2025-04-11 02:30",
    open: 101.11,
    high: 102.03,
    low: 99.18,
    close: 100.2,
    volume: 25599,
  },
  {
    date: "2025-04-11 06:30",
    open: 100.2,
    high: 100.47,
    low: 98.1,
    close: 99.6,
    volume: 9132,
  },
  {
    date: "2025-04-11 10:30",
    open: 99.6,
    high: 101.96,
    low: 98.65,
    close: 100.6,
    volume: 23638,
  },
  {
    date: "2025-04-11 14:30",
    open: 100.6,
    high: 102.56,
    low: 99.16,
    close: 101.91,
    volume: 4996,
  },
  {
    date: "2025-04-11 18:30",
    open: 101.91,
    high: 103.26,
    low: 101.04,
    close: 101.85,
    volume: 9878,
  },
  {
    date: "2025-04-11 22:30",
    open: 101.85,
    high: 102.25,
    low: 100.29,
    close: 101.46,
    volume: 7087,
  },
  {
    date: "2025-04-12 02:30",
    open: 101.46,
    high: 103.43,
    low: 100.28,
    close: 101.96,
    volume: 11597,
  },
  {
    date: "2025-04-12 06:30",
    open: 101.96,
    high: 103.28,
    low: 100.77,
    close: 100.88,
    volume: 12383,
  },
  {
    date: "2025-04-12 10:30",
    open: 100.88,
    high: 101.76,
    low: 98.73,
    close: 100.05,
    volume: 14977,
  },
  {
    date: "2025-04-12 14:30",
    open: 100.05,
    high: 101.47,
    low: 99.55,
    close: 99.94,
    volume: 27139,
  },
  {
    date: "2025-04-12 18:30",
    open: 99.94,
    high: 100.35,
    low: 97.96,
    close: 98.79,
    volume: 5279,
  },
  {
    date: "2025-04-12 22:30",
    open: 98.79,
    high: 100.5,
    low: 98.07,
    close: 99.39,
    volume: 15138,
  },
  {
    date: "2025-04-13 02:30",
    open: 99.39,
    high: 100.82,
    low: 97.22,
    close: 98.5,
    volume: 15543,
  },
  {
    date: "2025-04-13 06:30",
    open: 98.5,
    high: 100.92,
    low: 96.89,
    close: 99.57,
    volume: 7338,
  },
  {
    date: "2025-04-13 10:30",
    open: 99.57,
    high: 100.91,
    low: 98.56,
    close: 100.9,
    volume: 12862,
  },
  {
    date: "2025-04-13 14:30",
    open: 100.9,
    high: 103.3,
    low: 99.36,
    close: 101.78,
    volume: 4844,
  },
  {
    date: "2025-04-13 18:30",
    open: 101.78,
    high: 102.12,
    low: 100.21,
    close: 101.79,
    volume: 3642,
  },
  {
    date: "2025-04-13 22:30",
    open: 101.79,
    high: 103.21,
    low: 100.14,
    close: 102.77,
    volume: 27811,
  },
  {
    date: "2025-04-14 02:30",
    open: 102.77,
    high: 104.06,
    low: 101.44,
    close: 101.76,
    volume: 16604,
  },
  {
    date: "2025-04-14 06:30",
    open: 101.76,
    high: 103.41,
    low: 101.6,
    close: 102.97,
    volume: 28702,
  },
];

/**
 * Function to parse date strings into Date objects
 * @param {string} dateStr - The date string to parse
 * @return {Date} - The parsed Date object
 */
const parseDate = (dateStr: string) => new Date(dateStr);

/**
 * Function to get the cursor point in SVG coordinates, this is used to get the
 * position of the mouse in the SVG element.
 */
export const getCursorPoint = (id: unknown, evt: unknown) => {
  let svg: SVGSVGElement = document.querySelector(`#${id}`) as SVGSVGElement;
  if (!svg) {
    throw new Error(`SVG element with id "${id}" not found.`);
  }
  let pt = (svg as SVGSVGElement).createSVGPoint();
  let cursorPoint = (evt) => {
    if (evt.touches && evt.touches[0]) {
      pt.x = evt.touches[0].clientX;
      pt.y = evt.touches[0].clientY;
    } else {
      pt.x = evt.clientX;
      pt.y = evt.clientY;
    }

    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) {
      throw new Error("Unable to get screen CTM from the SVG element.");
    }
    return pt.matrixTransform(screenCTM.inverse());
  };

  return cursorPoint(evt);
};

export const findFixedDataIndex = (dataPoint, data) => {
  let index = 0;
  let min = Math.abs(
    parseDate(dataPoint).getTime() - parseDate(data[0].date).getTime()
  );
  for (let i = 0; i < data.length; i++) {
    let newMin = Math.abs(
      parseDate(dataPoint).getTime() - parseDate(data[i].date).getTime()
    );
    if (newMin < min) {
      min = newMin;
      index = i;
    }
  }
  return index;
};

/**
 * Function that returns the colors used in the chart
 */
export const colors = (): IColors => {
  return {
    grid: "#222631",
    background: "#171b26",
    candleInfoText: "#b2b5be",
    candleInfoTextUp: "#089981",
    candleInfoTextDown: "#e13443",
    tickColor: "#b2b5be",
    downCandlesStroke: "#e13443",
    downCandlesFill: "#e13443",
    downCandlesTail: "#e13443",
    upCandlesStroke: "#089981",
    upCandlesFill: "#089981",
    upCandlesTail: "#089981",
    selectorLine: "rgba(178,181,190,0.5)",
    selectorLableBackground: "#2a2e39",
    selectorLabelText: "#b2b5be",
    short: "#fff",
    shortStroke: "#fff",
    long: "#fff",
    longStroke: "#fff",
    sl: "#F9DB04",
    slStroke: "#F9DB04",
    tp: "#04F5F9",
    tpStroke: "#04F5F9",
    activeTools: "#04F5F9",
    deActiveTools: "#ffffff",
  };
};

interface Colors {
  // Define color properties based on your colors() function
  [key: string]: string;
}

export const config = (width: number, height: number): IChartConfig => {
  return {
    width: width,
    height: height,
    candleTailWidth: 1,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 30,
    yPaddingScaleTop: 0.04,
    yPaddingScaleBottom: 0.03,
    xTicksTransform: 10,
    xLabelWidth: 150,
    xLabelHeight: 25,
    xLabelFontSize: 12,
    yLabelHeight: 25,
    yLabelFontSize: 12,
    decimal: 3,
    charWidth: 7.8,
    selectoreStrokeDashArray: "2,2",
    timeFormat: "%a %d %b '%y %H:%M",
    mobileBreakPoint: 600,
    //calcualte after set data//
    infoTextWidth: undefined,
    infoTextWidthMeta: undefined,
    yLabelWidth: 20,
    paddingRight: 10,
    svgWidth: window.innerWidth,
    svgHeight: window.innerHeight - 50,
  };
};

const calculateSMA = (data: IOHLCVCandleData[], period: number) => {
  let sma: (number | undefined)[] = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      sma.push(undefined); // Not enough data for SMA
    } else {
      let sum = 0;
      for (let j = 0; j < period; j++) {
        sum += data[i - j].close;
      }
      sma.push(sum / period);
    }
  }
  return sma;
};

type TMode = "pan" | "zoom";

class CandleStickChart {
  #colors: IColors;
  #config: IChartConfig;
  #maxPrice: number;
  #lockSelectorX: boolean;
  #objectIDs!: Record<string, string>;
  #xScaleFunc!: d3.ScaleTime<number, number>;
  #yScaleFunc!: d3.ScaleLinear<number, number>;
  #volumeScaleFunc!: d3.ScaleLinear<number, number>;
  #candleWidth!: number;
  #candleWidthDate!: number;
  #candleLockerWidth!: number;
  #candleLockerWidthDate!: number;
  #filteredData: IOHLCVCandleData[];
  #mode!: TMode;
  data: IOHLCVCandleData[];
  id: string;
  isLiveChart: boolean;
  isLineChart: boolean;
  smaPeriod: number;
  #getColors!: () => IColors;
  #getConfig!: (width: number, height: number) => IChartConfig;
  #isMouseDown: boolean = false;
  #zoomPoint1!: number;
  #zoomPoint2!: number;
  #zoomRange1: number;
  #zoomRange2: number;
  #minMaxDate: [Date, Date];
  #zoomFactor: number = 1;
  #panTargetDate!: number;
  #selectedTimeInterval: TInterval;
  #showSma: boolean;
  liveFeedInterval: NodeJS.Timeout | number | undefined;

  constructor(
    width: number,
    height: number,
    data: IOHLCVCandleData[],
    id: string
  ) {
    this.#colors = this.#getColors();
    this.#config = this.#getConfig(width, height);
    this.#maxPrice = d3.max(data.map((x) => x.high)) || 0;
    this.data = data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    this.#filteredData = data;
    this.id = id;
    this.#lockSelectorX = false;
    const minMaxDate = d3.extent(data.map((x) => new Date(x.date))) as [
      Date,
      Date
    ];
    this.#calculateCandleWidthDate();
    this.#minMaxDate = minMaxDate;
    this.#zoomRange1 = minMaxDate[0].getTime() - this.#candleWidthDate / 2;
    this.#zoomRange2 = minMaxDate[1].getTime() + this.#candleWidthDate / 2;
    this.#modeHandler("pan");
    this.isLiveChart = false;
    this.isLineChart = false;
    this.#selectedTimeInterval = "1M";
    this.#showSma = false;
    this.smaPeriod = 5;
  }

  /**
   *
   * @param {*} id : "1D", "1H", "4H"
   */
  #loadData(id: TInterval) {
    console.log("load data", this.data.slice(0, 5));
    let data = oneHourData;
    switch (id) {
      case "1D":
        data = oneDayData;
        break;
      case "1H":
        data = oneHourData;
        break;
      case "4H":
        data = fourHourData;
        break;
      case "1M":
        data = oneMinuteData;
        break;

      default:
        data = oneMinuteData;
        break;
    }

    this.data = data;
    console.log(this.data.slice(0, 5));
    this.#filteredData = this.data;

    // Recalculate configurations
    this.destroy();
    this.#calculateCandleWidthDate();
    this.#calculateXscale();
    this.#calculateYscale();
    this.#calculateCandleWidth();

    this.draw();
  }

  #calculateInfoTextWidth() {
    console.log(this.#maxPrice);
    this.#config.infoTextWidth =
      (this.#maxPrice.toFixed(this.#config.decimal).toString().length * 4 +
        11) *
      this.#config.charWidth;
  }

  // use filteredData - 1
  #drawSMA() {
    const period = this.smaPeriod;
    if (!this.#showSma) {
      d3.select(`#${this.#objectIDs.svgId} .sma-line`).remove();
      return;
    }
    const smaData = calculateSMA(
      this.#filteredData.slice(0, this.#filteredData.length - 1),
      period
    );
    const line = d3
      .line<number>()
      .x((d, i) => this.#xScaleFunc(parseDate(this.#filteredData[i].date)))
      .y((d) => (d !== null ? this.#yScaleFunc(d) : null))
      .defined((d) => d !== null);

    d3.select<SVGElement, IOHLCVCandleData>(`#${this.#objectIDs.svgId}`)
      .append("path")
      .datum(smaData)
      .attr("fill", "none")
      .attr("stroke", this.#colors.activeTools)
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("class", "sma-line");
  }

  #calculateInfoTextWidthMeta() {
    this.#config.infoTextWidthMeta =
      (this.#maxPrice.toFixed(this.#config.decimal).toString().length * 4 +
        14) *
      this.#config.charWidth;
  }

  #calculateYLabelWidth() {
    this.#config.yLabelWidth =
      2.5 +
      this.#maxPrice.toFixed(this.#config.decimal).toString().length *
        this.#config.charWidth;
  }

  #calculatePaddingRight() {
    this.#config.paddingRight = this.#config.yLabelWidth ?? 10;
  }

  #calculateSvgWidth() {
    this.#config.svgWidth =
      this.#config.width -
      (this.#config.paddingLeft + this.#config.paddingRight) -
      2;
  }

  #calculateSvgHeight() {
    this.#config.svgHeight =
      this.#config.height -
      (this.#config.paddingBottom + this.#config.paddingTop + 6);
  }

  #calculateXscale() {
    const minDate = d3.min(this.#filteredData, (d) => parseDate(d.date));
    const maxDate = d3.max(this.#filteredData, (d) => parseDate(d.date));

    this.#xScaleFunc = d3
      .scaleTime()
      .domain([minDate ?? new Date(0), maxDate ?? new Date()]) // Ensure no undefined values
      .range([0, this.#config.svgWidth ?? 0]);
  }

  #calculateYscale() {
    let yMinMax;
    if (this.#filteredData.length === 0) {
      yMinMax = [0, 1];
    } else {
      yMinMax = d3
        .extent([
          ...this.#filteredData.map((x) => x.high),
          ...this.#filteredData.map((x) => x.low),
        ])
        .reverse();

      yMinMax[0] =
        (yMinMax[0] ?? 0) + (yMinMax[0] ?? 0) * this.#config.yPaddingScaleTop;
      if (yMinMax[1] !== undefined) {
        yMinMax[1] -= yMinMax[1] * this.#config.yPaddingScaleBottom;
      }
    }
    this.#yScaleFunc = d3
      .scaleLinear()
      .domain(yMinMax)
      .range([0, this.#config.svgHeight * 0.7]); // Adjust height for candlestick chart

    // Volume scale
    const volumeMax = d3.max(this.#filteredData, (d) => d.volume);
    this.#volumeScaleFunc = d3
      .scaleLinear()
      .domain([0, volumeMax ?? 0])
      .range([
        (this.#config.svgHeight ?? 0) * 0.7,
        this.#config.svgHeight ?? 0,
      ]);
  }

  #calculateCandleWidth() {
    if (this.#filteredData.length === 0) {
      this.#candleLockerWidth = 0;
      this.#candleWidth = 0;
      return;
    }
    let minMax = d3.extent(this.#filteredData.map((x) => parseDate(x.date)));
    this.#candleLockerWidth =
      this.#xScaleFunc(
        (minMax[0]?.getTime() ?? 0) + this.#candleLockerWidthDate
      ) - this.#xScaleFunc(minMax[0]?.getTime() ?? 0);
    console.log("this.#candleLockerWidth", this.#candleLockerWidth);
    this.#candleWidth =
      this.#candleLockerWidth - this.#candleLockerWidth * 0.13;
    console.log("this.#candleWidth", this.#candleWidth);
  }

  #calculateCandleWidthDate() {
    let times = this.#filteredData.map((x) => x.date).sort();
    let indexes = [0, 1];
    let min = parseDate(times[1]).getTime() - parseDate(times[0]).getTime();
    for (let i = 1; i < times.length; i++) {
      if (
        parseDate(times[i + 1]).getTime() - parseDate(times[i]).getTime() <
        min
      ) {
        min = parseDate(times[i + 1]).getTime() - parseDate(times[i]).getTime();
        indexes = [i, i + 1];
      }
    }

    let rWidth =
      parseDate(times[indexes[1]]).getTime() -
      parseDate(times[indexes[0]]).getTime();
    this.#candleLockerWidthDate = rWidth;
    rWidth -= rWidth * 0.3;
    this.#candleWidthDate = rWidth;
  }

  #calculateExtendConfigs() {
    this.#calculateInfoTextWidth();
    this.#calculateInfoTextWidthMeta();
    this.#calculateYLabelWidth();
    this.#calculatePaddingRight();
    this.#calculateSvgWidth();
    this.#calculateSvgHeight();
  }

  #setObjectIDs() {
    let randomNumber = (Math.random() * 10000).toFixed(0);
    this.#objectIDs = {};
    this.#objectIDs.svgId = `${this.id}-${randomNumber}`;
    this.#objectIDs.yAxisId = `yAxisG-${randomNumber}`;
    this.#objectIDs.xAxisId = `xAxisG-${randomNumber}`;
    this.#objectIDs.candleContainerId = `candles-${randomNumber}`;
    this.#objectIDs.xLineSelectorId = `xLineSelector-${randomNumber}`;
    this.#objectIDs.yLineSelectorId = `yLineSelector-${randomNumber}`;
    this.#objectIDs.xLabelSelectorId = `xLabelSelector-${randomNumber}`;
    this.#objectIDs.yLabelSelectorId = `yLabelSelector-${randomNumber}`;
    this.#objectIDs.candleInfoId = `candle-info-${randomNumber}`;
    this.#objectIDs.candleInfoIdBackground = `bc-candle-info-${randomNumber}`;
    this.#objectIDs.candleInfoIdPosition = `candle-info-${randomNumber}-position`;
    this.#objectIDs.candleInfoIdBackgroundPosition = `bc-candle-info-${randomNumber}-position`;
    this.#objectIDs.zoomBoxId1 = `zoom-box-${randomNumber}-1`;
    this.#objectIDs.zoomBoxId2 = `zoom-box-${randomNumber}-2`;
    this.#objectIDs.toolsBtnsContainer = `tools-btns-${randomNumber}`;
  }

  #createLayout() {
    d3.select(`#${this.id}`)
      .style(
        "padding",
        `${this.#config.paddingTop}px ${this.#config.paddingRight}px ${
          this.#config.paddingBottom
        }px ${this.#config.paddingLeft}px`
      )
      .style("display", "inline-block")
      .attr("width", this.#config.width)
      .attr("height", this.#config.height)
      .append("svg")
      .attr("width", this.#config.svgWidth ?? 0)
      .attr("height", this.#config.svgHeight ?? 0)
      .style("overflow", "inherit")
      .style("cursor", "crosshair")
      .attr("id", this.#objectIDs.svgId)
      .style("margin-top", "-50px");
  }

  #createYaxis() {
    console.log(this.#yScaleFunc);
    let yAxis = d3
      .axisRight(this.#yScaleFunc)
      .tickSize(this.#config.svgWidth ?? 10);
    d3.select(`#${this.#objectIDs.svgId}`)
      .append("g")
      .attr("id", this.#objectIDs.yAxisId)
      .call(yAxis);

    // d3.selectAll(`#${this.#objectIDs.yAxisId} .domain`).each(function (d, i) {
    //   this.remove();
    // });

    d3.selectAll(`#${this.#objectIDs.yAxisId}  g text`).attr(
      "transform",
      "translate(5,0)"
    );

    let gridColor = this.#colors.grid;
    d3.selectAll(`#${this.#objectIDs.yAxisId}  .tick line`).each(function (
      d,
      i
    ) {
      d3.select(this).style("stroke", gridColor);
    });
    d3.selectAll(`#${this.#objectIDs.yAxisId} .tick text`).style(
      "fill",
      this.#colors.tickColor
    );
  }

  #createXaxis() {
    let xAxis = d3
      .axisBottom(this.#xScaleFunc)
      .ticks((this.#config.svgWidth ?? 0) / 100)
      .tickSize(this.#config.svgHeight ?? 10);

    d3.select(`#${this.#objectIDs.svgId}`)
      .append("g")
      .attr("id", this.#objectIDs.xAxisId)
      .call(xAxis);

    d3.selectAll(`#${this.#objectIDs.xAxisId} g text`).attr(
      "transform",
      "translate(0,10)"
    );

    let gridColor = this.#colors.grid;
    d3.selectAll(`#${this.#objectIDs.xAxisId} .tick line`).each(function (
      d,
      i
    ) {
      d3.select(this).style("stroke", gridColor);
    });
    // d3.selectAll(`#${this.#objectIDs.xAxisId} .domain`).each(function (d, i) {
    //   this.remove();
    // });
    d3.selectAll(`#${this.#objectIDs.xAxisId} .tick text`).style(
      "fill",
      this.#colors.tickColor
    );
  }

  #createInfoText() {
    d3.select(`#${this.#objectIDs.svgId}`)
      .append("rect")
      .attr("id", this.#objectIDs.candleInfoIdBackground)
      .attr("x", window.innerWidth > this.#config.mobileBreakPoint ? 20 : 0)
      .attr("y", window.innerWidth > this.#config.mobileBreakPoint ? 10 : 50)
      .attr("width", this.#config.infoTextWidth ?? 50)
      .attr("height", 14)
      .attr("fill", this.#colors.background)
      .style("display", "none");

    d3.select(`#${this.#objectIDs.svgId}`)
      .append("text")
      .attr("id", this.#objectIDs.candleInfoId)
      .style("font-size", "14px")
      .style("font-family", "monospace")
      .attr("x", window.innerWidth > this.#config.mobileBreakPoint ? 20 : 0)
      .attr("y", window.innerWidth > this.#config.mobileBreakPoint ? 20 : 60)
      .style("fill", this.#colors.candleInfoText);

    d3.select(`#${this.#objectIDs.svgId}`)
      .append("rect")
      .attr("id", this.#objectIDs.candleInfoIdBackgroundPosition)
      .attr("x", window.innerWidth > this.#config.mobileBreakPoint ? 20 : 0)
      .attr("y", window.innerWidth > this.#config.mobileBreakPoint ? 30 : 70)
      .attr("width", this.#config.infoTextWidthMeta ?? 50)
      .attr("height", 14)
      .attr("fill", this.#colors.background)
      .style("display", "none");

    d3.select(`#${this.#objectIDs.svgId}`)
      .append("text")
      .attr("id", this.#objectIDs.candleInfoIdPosition)
      .style("font-size", "14px")
      .style("font-family", "monospace")
      .attr("x", window.innerWidth > this.#config.mobileBreakPoint ? 20 : 0)
      .attr("y", window.innerWidth > this.#config.mobileBreakPoint ? 40 : 80)
      .style("fill", this.#colors.candleInfoText);
  }

  #createLockerGroup() {
    d3.select(`#${this.#objectIDs.svgId}`)
      .append("foreignObject")
      .attr("width", this.#config.svgWidth ?? window.innerWidth)
      .attr("height", this.#config.svgHeight ?? window.innerHeight - 50)
      .selectAll()
      .data([1])
      .enter()
      .append("svg")
      .attr("id", this.#objectIDs.candleContainerId)
      .style("width", "100%")
      .style("height", "100%")
      .selectAll()
      .data(this.#filteredData)
      .enter()
      .append("g")
      .attr("class", "candle-locker");
  }
  #createLockerBody() {
    d3.selectAll<SVGElement, IOHLCVCandleData>(
      `#${this.#objectIDs.candleContainerId} .candle-locker`
    )
      .append("rect")
      .attr("width", this.#candleLockerWidth)
      .attr("height", this.#config.svgHeight ?? 0)
      .attr(
        "x",
        (d) => this.#xScaleFunc(parseDate(d.date)) - this.#candleLockerWidth / 2
      )
      .attr("y", 0)
      .style("opacity", 0);
  }

  #createCandlesGroup() {
    d3.select(
      `#${this.#objectIDs.svgId} foreignObject #${
        this.#objectIDs.candleContainerId
      }`
    )
      .selectAll()
      .data(this.#filteredData)
      .enter()
      .append("g")
      .attr("class", "candle");
  }

  #createCandlesBody() {
    d3.selectAll<SVGElement, IOHLCVCandleData>(
      `#${this.#objectIDs.candleContainerId} .candle`
    )
      .append("rect")
      .attr("width", this.#candleWidth)
      .attr("height", (d) =>
        d.open > d.close
          ? this.#yScaleFunc(d.close) - this.#yScaleFunc(d.open)
          : this.#yScaleFunc(d.open - this.#yScaleFunc(d.close))
      )
      .attr(
        "x",
        (d) => this.#xScaleFunc(parseDate(d.date)) - this.#candleWidth / 2
      )
      .attr("y", (d) =>
        d.open > d.close ? this.#yScaleFunc(d.open) : this.#yScaleFunc(d.close)
      )
      .attr("stroke", (d) =>
        d.open > d.close
          ? this.#colors.upCandlesStroke
          : this.#colors.downCandlesStroke
      )
      .attr("fill", (d) =>
        d.open > d.close
          ? this.#colors.upCandlesFill
          : this.#colors.downCandlesFill
      );
  }

  #createCandlesHigh() {
    d3.selectAll<SVGElement, IOHLCVCandleData>(
      `#${this.#objectIDs.candleContainerId} .candle`
    )
      .append("rect")
      .attr("width", this.#config.candleTailWidth)
      .attr("height", (d) =>
        d.open > d.close
          ? this.#yScaleFunc(d.open) - this.#yScaleFunc(d.high)
          : this.#yScaleFunc(d.close) - this.#yScaleFunc(d.high)
      )
      .attr(
        "x",
        (d) =>
          this.#xScaleFunc(parseDate(d.date)) - this.#config.candleTailWidth / 2
      )
      .attr("y", (d) => this.#yScaleFunc(d.high))
      .attr("fill", (d) =>
        d.open > d.close
          ? this.#colors.upCandlesTail
          : this.#colors.downCandlesTail
      );
  }

  #createCandlesLow() {
    d3.selectAll<SVGElement, IOHLCVCandleData>(
      `#${this.#objectIDs.candleContainerId} .candle`
    )
      .append("rect")
      .attr("width", this.#config.candleTailWidth)
      .attr("height", (d) =>
        d.open > d.close
          ? this.#yScaleFunc(d.low) - this.#yScaleFunc(d.close)
          : this.#yScaleFunc(d.low) - this.#yScaleFunc(d.open)
      )
      .attr(
        "x",
        (d) =>
          this.#xScaleFunc(parseDate(d.date)) - this.#config.candleTailWidth / 2
      )
      .attr("y", (d) =>
        d.open > d.close ? this.#yScaleFunc(d.close) : this.#yScaleFunc(d.open)
      )
      .attr("fill", (d) =>
        d.open > d.close
          ? this.#colors.upCandlesTail
          : this.#colors.downCandlesTail
      );
  }

  #createToolsBtns() {
    d3.select(`#${this.id}`)
      .selectAll()
      .data([0])
      .enter()
      .append("div")
      .attr("id", this.#objectIDs.toolsBtnsContainer)
      .style("display", "flex")
      .style("height", "40px")
      .style("justify-content", "end")
      .style("gap", "10px")
      .style(
        "padding-right",
        window.innerWidth > this.#config.mobileBreakPoint ? "20px" : "0"
      )
      .style("position", "relative")
      .style("z-index", "2");

    d3.select(`#${this.#objectIDs.toolsBtnsContainer}`)
      .selectAll()
      .data([0, 1, 2])
      .enter()
      .append("div")
      .attr("id", (d) => `tools-btn-${d}`)
      .style("width", "24px")
      .style("height", "24px")
      .style("border", `1px solid ${this.#colors.deActiveTools}`)
      .style("border-radius", "4px")
      .style("cursor", "pointer")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center");

    d3.select(`#${this.#objectIDs.toolsBtnsContainer}`)
      .append("div")
      .attr("id", "tools-btn-sma")
      .style("width", "24px")
      .style("height", "24px")
      .style("border", `1px solid ${this.#colors.deActiveTools}`)
      .style("border-radius", "4px")
      .style("cursor", "pointer")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center");

    // button to edit sma period
    d3.select(`#${this.#objectIDs.toolsBtnsContainer}`)
      .append("div")
      .attr("id", "tools-btn-edit-sma")
      .style("width", "150px")
      .style("height", "24px")
      .style("border", `1px solid ${this.#colors.deActiveTools}`)
      .style("border-radius", "4px")
      .style("cursor", "pointer")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("color", this.#colors.candleInfoText)
      .text("Edit SMA")
      .on("click", () => {
        const newPeriod = parseInt(
          prompt("Enter new SMA period:", this.smaPeriod.toString()) || "5"
        );

        if (newPeriod && !isNaN(newPeriod) && newPeriod > 0) {
          this.smaPeriod = newPeriod;
          this.#drawSMA();
        }
      });

    d3.select(`#${this.id}`)
      .selectAll()
      .data([0])
      .enter()
      .append("div")
      .attr("id", this.#objectIDs.toolsBtnsContainer)
      .style("display", "flex")
      .style("height", "40px")
      .style("justify-content", "end")
      .style("gap", "10px")
      .style(
        "padding-right",
        window.innerWidth > this.#config.mobileBreakPoint ? "20px" : "0"
      )
      .style("position", "relative")
      .style("z-index", "2");

    // Add time interval buttons (1D, 1H, 4H, 5M, 15M, 30M)
    d3.select(`#${this.id}`)
      .append("div")
      .attr("id", "time-interval-buttons")
      .style("position", "absolute")
      .style("bottom", "10px")
      .style("left", "10px")
      .style("display", "flex")
      .style("gap", "10px");

    const intervals: TInterval[] = ["1D", "1H", "4H", "1M"];
    d3.select("#time-interval-buttons")
      .selectAll("div")
      .data(intervals)
      .enter()
      .append("div")
      .attr("class", "time-interval-btn")
      .style("width", "40px")
      .style("height", "24px")
      .style("border", `1px solid ${this.#colors.deActiveTools}`)
      .style("border-radius", "4px")
      .style("cursor", "pointer")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("background-color", this.#colors.background)
      .style("color", this.#colors.candleInfoText)
      .text((d) => d)
      .on("click", (e, d) => {
        this.#handleTimeIntervalChange(d);
      });

    d3.select(`#${this.#objectIDs.toolsBtnsContainer}`)
      .append("div")
      .attr("id", "tools-btn-toggle-chart")
      .style("width", "150px")
      .style("height", "24px")
      .style("border", `1px solid ${this.#colors.deActiveTools}`)
      .style("border-radius", "4px")
      .style("cursor", "pointer")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("background-color", this.#colors.background)
      .style("color", this.#colors.candleInfoText)
      .text("Line Chart")
      .on("click", () => {
        this.#toggleChartType();
      });

    d3.select(`#${this.#objectIDs.toolsBtnsContainer}`)
      .style("position", "absolute")
      .style("top", "10px")
      .style("right", "10px");

    const toolsBtnSma = document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-sma`
    );
    if (toolsBtnSma) {
      toolsBtnSma.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 15L10 10L14 14L21 9" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
    }

    const toolsBtn0 = document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-0`
    );
    if (toolsBtn0) {
      toolsBtn0.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
        <g fill="none" fill-rule="evenodd" stroke="${
          this.#colors.deActiveTools
        }" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">
        <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/>
        <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/>
        </g>
      </svg>`;
    }

    const toolsBtn1 = document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`
    );

    if (toolsBtn1) {
      toolsBtn1.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="${
        this.#colors.deActiveTools
      }" width="18" height="18" viewBox="2 2 30 30" id="icon">
        <defs>
          <style>
            .cls-1 {
              fill: none;
            }
          </style>
        </defs>
        <path d="M31,29.5859l-4.6885-4.6884a8.028,8.028,0,1,0-1.414,1.414L29.5859,31ZM20,26a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,20,26Z"/>
        <path d="M8,26H4a2.0021,2.0021,0,0,1-2-2V20H4v4H8Z"/>
        <rect x="2" y="12" width="2" height="4"/>
        <path d="M26,8H24V4H20V2h4a2.0021,2.0021,0,0,1,2,2Z"/>
        <rect x="12" y="2" width="4" height="2"/>
        <path d="M4,8H2V4A2.0021,2.0021,0,0,1,4,2H8V4H4Z"/>
        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
      </svg>`;
    }

    const toolsBtn2 = document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`
    );

    if (toolsBtn2) {
      toolsBtn2.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="21" viewBox="0 0 512 512" version="1.1">
        <title>pan</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="drop" fill="${
              this.#colors.deActiveTools
            }" transform="translate(42.666667, 42.666667)">
                <path d="M234.666667,256 L234.666667,341.333333 L277.333333,341.333333 L213.333333,426.666667 L149.333333,341.333333 L192,341.333333 L192,256 L234.666667,256 Z M341.333333,149.333333 L426.666667,213.333333 L341.333333,277.333333 L341.333333,234.666667 L256,234.666667 L256,192 L341.333333,192 L341.333333,149.333333 Z M85.3333333,149.333333 L85.3333333,192 L170.666667,192 L170.666667,234.666667 L85.3333333,234.666667 L85.3333333,277.333333 L3.55271368e-14,213.333333 L85.3333333,149.333333 Z M213.333333,3.55271368e-14 L277.333333,85.3333333 L234.666667,85.3333333 L234.666667,170.666667 L192,170.666667 L192,85.3333333 L149.333333,85.3333333 L213.333333,3.55271368e-14 Z" id="Combined-Shape">
                </path>
            </g>
        </g>
      </svg>`;
    }
  }

  #handleTimeIntervalChange(interval: TInterval) {
    console.log(`Time interval changed to: ${interval}`);
    this.stopLiveFeed();
    this.#loadData(interval);
    this.#selectedTimeInterval = interval;
    this.startLiveFeed();
    // Add logic to fetch and update data based on the selected interval
    // For example:
    // if (interval === "1D") {
    //   this.data = fetchDataForInterval("1D");
    // }
    // this.#filteredData = this.data;
    // this.draw();
  }

  #modeHandler(mode: TMode) {
    this.#mode = mode;
    if (mode === "pan") {
      const element = document.querySelector(
        `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2 svg g g`
      );
      if (element) {
        element.setAttribute("fill", this.#colors.activeTools);
      }

      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).style(
        "border",
        `1px solid ${this.#colors.activeTools}`
      );

      const toolsBtn1Svg = document.querySelector(
        `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1 svg`
      );
      if (toolsBtn1Svg) {
        toolsBtn1Svg.setAttribute("fill", this.#colors.deActiveTools);
      }
      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`).style(
        "border",
        `1px solid ${this.#colors.deActiveTools}`
      );
    } else if (mode === "zoom") {
      const element = document.querySelector(
        `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2 svg g g`
      );
      if (element) {
        element.setAttribute("fill", this.#colors.deActiveTools);
      }
      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).style(
        "border",
        `1px solid ${this.#colors.deActiveTools}`
      );

      const toolsBtn1Svg = document.querySelector(
        `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1 svg`
      );
      if (toolsBtn1Svg) {
        toolsBtn1Svg.setAttribute("fill", this.#colors.activeTools);
      }
      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`).style(
        "border",
        `1px solid ${this.#colors.activeTools}`
      );
    }
  }

  #handleResetZoom() {
    this.#zoomRange1 =
      this.#minMaxDate[0].getTime() - this.#candleWidthDate / 2;
    this.#zoomRange2 =
      this.#minMaxDate[1].getTime() + this.#candleWidthDate / 2;
    this.#filteredData = this.data;
    this.#zoomFactor = 1;
    this.draw();
  }

  #xLineHandler(d, position?: number) {
    let xPosition;
    if (position) xPosition = position;
    else xPosition = this.#xScaleFunc(parseDate(d.date));

    let xLine = document.getElementById(this.#objectIDs.xLineSelectorId);

    if (xLine) {
      d3.select(xLine)
        .attr("x1", xPosition)
        .attr("y1", 0)
        .attr("x2", xPosition)
        .attr("y2", this.#config.svgHeight ?? window.innerHeight - 50);
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .insert("line", `#${this.#objectIDs.xAxisId}`)
        .attr("id", this.#objectIDs.xLineSelectorId)
        .attr("stroke", this.#colors.selectorLine)
        .attr("stroke-dasharray", this.#config.selectoreStrokeDashArray)
        .attr("x1", xPosition)
        .attr("y1", 0)
        .attr("x2", xPosition)
        .attr("y2", this.#config.svgHeight ?? window.innerHeight - 50);
    }
  }

  #xLabelHandler(d, position?: number) {
    let xPosition;
    if (position) xPosition = position;
    else xPosition = this.#xScaleFunc(parseDate(d.date));

    let xLabel = document.getElementById(this.#objectIDs.xLabelSelectorId);
    if (xLabel) {
      d3.select(xLabel).attr(
        "transform",
        `translate(
          ${
            xPosition >=
            (this.#config.svgWidth ?? window.innerWidth) -
              this.#config.xLabelWidth / 2
              ? (this.#config.svgWidth ?? window.innerWidth) -
                this.#config.xLabelWidth
              : xPosition <= this.#config.xLabelWidth / 2
              ? 0
              : xPosition - this.#config.xLabelWidth / 2
          },${this.#config.svgHeight})`
      );
      const xLabelTextElement = document.querySelector(
        `#${this.#objectIDs.xLabelSelectorId} text`
      );
      if (xLabelTextElement) {
        xLabelTextElement.innerHTML = d3.timeFormat(this.#config.timeFormat)(
          this.#xScaleFunc.invert(xPosition)
        );
      }
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .append("g")
        .attr("id", this.#objectIDs.xLabelSelectorId)
        .attr(
          "transform",
          `translate(
              ${
                xPosition >=
                (this.#config.svgWidth ?? window.innerWidth) -
                  this.#config.xLabelWidth / 2
                  ? (this.#config.svgWidth ?? window.innerWidth) -
                    this.#config.xLabelWidth
                  : xPosition <= this.#config.xLabelWidth / 2
                  ? 0
                  : xPosition - this.#config.xLabelWidth / 2
              },${this.#config.svgHeight})`
        );

      d3.select(`#${this.#objectIDs.xLabelSelectorId}`)
        .append("rect")
        .attr("fill", this.#colors.selectorLableBackground)
        .attr("width", this.#config.xLabelWidth)
        .attr("height", this.#config.xLabelHeight);

      d3.select(`#${this.#objectIDs.xLabelSelectorId}`)
        .append("text")
        .style("font-size", `${this.#config.xLabelFontSize}px`)
        .attr("fill", this.#colors.selectorLabelText)
        .style("font-family", "monospace")
        .attr("x", 10)
        .attr("y", 15);

      const xLabelTextElement = document.querySelector(
        `#${this.#objectIDs.xLabelSelectorId} text`
      );
      if (xLabelTextElement) {
        xLabelTextElement.innerHTML = d3.timeFormat(this.#config.timeFormat)(
          this.#xScaleFunc.invert(xPosition)
        );
      }
    }
  }

  #drawLineChart() {
    const line = d3
      .line<IOHLCVCandleData>()
      .x((d) => this.#xScaleFunc(parseDate(d.date)))
      .y((d) => this.#yScaleFunc(d.close))
      .curve(d3.curveMonotoneX); // Smooth line

    d3.select(`#${this.#objectIDs.svgId}`)
      .append("path")
      .datum(this.#filteredData)
      .attr("fill", "none")
      .attr("stroke", this.#colors.activeTools)
      .attr("stroke-width", 2)
      .attr("d", line);
  }

  #yLineHandler(d, position) {
    let yLine = document.getElementById(this.#objectIDs.yLineSelectorId);
    if (yLine) {
      d3.select(yLine)
        .attr("x1", 0)
        .attr("y1", position)
        .attr("x2", this.#config.svgWidth ?? window.innerWidth)
        .attr("y2", position);
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .insert("line", `#${this.#objectIDs.xAxisId}`)
        .attr("id", this.#objectIDs.yLineSelectorId)
        .attr("stroke", this.#colors.selectorLine)
        .attr("stroke-dasharray", this.#config.selectoreStrokeDashArray)
        .attr("x1", 0)
        .attr("y1", position)
        .attr("x2", this.#config.svgHeight ?? window.innerHeight - 50)
        .attr("y2", position);
    }
  }

  #yLabelHandler(d, position) {
    let yLabel = document.getElementById(this.#objectIDs.yLabelSelectorId);
    if (yLabel) {
      d3.select(yLabel).attr(
        "transform",
        `translate(${this.#config.svgWidth},
          ${
            position >=
            (this.#config.svgHeight ?? window.innerHeight - 50) -
              this.#config.yLabelHeight / 2
              ? (this.#config.svgHeight ?? window.innerHeight - 50) -
                this.#config.yLabelHeight
              : position <= this.#config.yLabelHeight / 2
              ? 0
              : position - this.#config.yLabelHeight / 2
          })`
      );
      const yLabelTextElement = document.querySelector(
        `#${this.#objectIDs.yLabelSelectorId} text`
      );
      if (yLabelTextElement) {
        yLabelTextElement.innerHTML = this.#yScaleFunc
          .invert(position)
          .toFixed(this.#config.decimal);
      }
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .append("g")
        .attr("id", this.#objectIDs.yLabelSelectorId)
        .attr(
          "transform",
          `translate(${this.#config.svgWidth},
              ${
                position >=
                (this.#config.svgHeight ?? window.innerHeight - 50) -
                  this.#config.yLabelHeight / 2
                  ? (this.#config.svgHeight ?? window.innerHeight - 50) -
                    this.#config.yLabelHeight
                  : position <= this.#config.yLabelHeight / 2
                  ? 0
                  : position - this.#config.yLabelHeight / 2
              })`
        );

      d3.select(`#${this.#objectIDs.yLabelSelectorId}`)
        .append("rect")
        .attr("fill", this.#colors.selectorLableBackground)
        .attr("width", this.#config.yLabelWidth ?? 50)
        .attr("height", this.#config.yLabelHeight);

      d3.select(`#${this.#objectIDs.yLabelSelectorId}`)
        .append("text")
        .style("font-size", `${this.#config.yLabelFontSize}px`)
        .attr("fill", this.#colors.selectorLabelText)
        .style("font-family", "monospace")
        .attr("x", 5)
        .attr("y", 15);

      const yLabelTextElement = document.querySelector(
        `#${this.#objectIDs.yLabelSelectorId} text`
      );
      if (yLabelTextElement) {
        yLabelTextElement.innerHTML = this.#yScaleFunc
          .invert(position)
          .toFixed(1);
      }
    }
  }

  #candleInfoHandler(d) {
    let isUp = d.open > d.close;
    const candleInfoElement = document.getElementById(
      this.#objectIDs.candleInfoId
    );
    if (candleInfoElement) {
      candleInfoElement.innerHTML = `
        O <tspan style='fill:${
          isUp ? this.#colors.candleInfoTextUp : this.#colors.candleInfoTextDown
        }'>${d.open.toFixed(this.#config.decimal)}</tspan> 
        H <tspan style='fill:${
          isUp ? this.#colors.candleInfoTextUp : this.#colors.candleInfoTextDown
        }'>${d.high.toFixed(this.#config.decimal)}</tspan> 
        L <tspan style='fill:${
          isUp ? this.#colors.candleInfoTextUp : this.#colors.candleInfoTextDown
        }'>${d.low.toFixed(this.#config.decimal)}</tspan> 
        C <tspan style='fill:${
          isUp ? this.#colors.candleInfoTextUp : this.#colors.candleInfoTextDown
        }'>${d.close.toFixed(this.#config.decimal)}</tspan>
        V <tspan style='fill:${
          isUp ? this.#colors.candleInfoTextUp : this.#colors.candleInfoTextDown
        }'>${d.volume.toFixed(this.#config.decimal)}</tspan>`;
    }
    const candleInfoBackground = document.getElementById(
      this.#objectIDs.candleInfoIdBackground
    );
    if (candleInfoBackground) {
      candleInfoBackground.style.display = "block";
    }

    if (d.long || d.short) {
      let text = "";
      if (d.long) {
        text = `Long <tspan style='fill:${this.#colors.long}'> ${d.long.toFixed(
          this.#config.decimal
        )}</tspan>`;
      } else {
        text = `Short <tspan style='fill:${
          this.#colors.short
        }'> ${d.short.toFixed(this.#config.decimal)}</tspan>`;
      }
      text += ` SL <tspan style='fill:${this.#colors.sl}'> ${d.sl.toFixed(
        this.#config.decimal
      )}</tspan>`;
      text += ` TP <tspan style='fill:${this.#colors.tp}'> ${d.tp.toFixed(
        this.#config.decimal
      )}</tspan>`;

      const candleInfoElement = document.getElementById(
        this.#objectIDs.candleInfoIdPosition
      );
      if (candleInfoElement) {
        candleInfoElement.innerHTML = text;
      }
      const candleInfoBackgroundPosition = document.getElementById(
        this.#objectIDs.candleInfoIdBackgroundPosition
      );
      if (candleInfoBackgroundPosition) {
        candleInfoBackgroundPosition.style.display = "block";
      }
    }
  }

  #candleInfoLeaveHandler() {
    const candleInfoElement = document.getElementById(
      this.#objectIDs.candleInfoId
    );
    if (candleInfoElement) {
      candleInfoElement.innerHTML = ``;
    }

    const candleInfoBackground = document.getElementById(
      this.#objectIDs.candleInfoIdBackground
    );
    if (candleInfoBackground) {
      candleInfoBackground.style.display = "none";
    }

    const candleInfoPositionElement = document.getElementById(
      this.#objectIDs.candleInfoIdPosition
    );
    if (candleInfoPositionElement) {
      candleInfoPositionElement.innerHTML = ``;
    }
    const candleInfoBackgroundPosition = document.getElementById(
      this.#objectIDs.candleInfoIdBackgroundPosition
    );
    if (candleInfoBackgroundPosition) {
      candleInfoBackgroundPosition.style.display = "none";
    }
  }

  #mouseMoveLockers(d) {
    this.#lockSelectorX = true;
    //x line
    this.#xLineHandler(d);

    //x label
    this.#xLabelHandler(d);

    //info
    this.#candleInfoHandler(d);
  }

  #mouseLeaveLocker(d) {
    this.#lockSelectorX = false;
    this.#candleInfoLeaveHandler();
  }

  #handleZoomBox() {
    let zoomBox1 = document.querySelector(`#${this.#objectIDs.zoomBoxId1}`);
    if (zoomBox1) zoomBox1.remove();

    let zoomBox2 = document.querySelector(`#${this.#objectIDs.zoomBoxId2}`);
    if (zoomBox2) zoomBox2.remove();

    const containerElement = document.getElementById(
      `${this.#objectIDs.candleContainerId}`
    );
    if (!(containerElement instanceof SVGSVGElement)) {
      console.error("Candle container element is not an SVGSVGElement");
      return;
    }
    if (!containerElement) {
      console.error("Candle container element not found");
      return;
    }
    let height = containerElement.height.baseVal.value;
    let width = containerElement.width.baseVal.value;

    d3.select(`#${this.#objectIDs.candleContainerId}`)
      .selectAll()
      .data([0])
      .enter()
      .append("rect")
      .attr("id", this.#objectIDs.zoomBoxId1)
      .attr(
        "width",
        this.#zoomPoint2 > this.#zoomPoint1
          ? this.#zoomPoint1
          : this.#zoomPoint2
      )
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", height)
      .attr("fill", "black")
      .attr("stroke", "none")
      .style("opacity", 0.5);

    d3.select(`#${this.#objectIDs.candleContainerId}`)
      .selectAll()
      .data([0])
      .enter()
      .append("rect")
      .attr("id", this.#objectIDs.zoomBoxId2)
      .attr("width", width - this.#zoomPoint2)
      .attr(
        "x",
        this.#zoomPoint2 > this.#zoomPoint1
          ? this.#zoomPoint2
          : this.#zoomPoint1
      )
      .attr("y", 0)
      .attr("height", height)
      .attr("fill", "black")
      .attr("stroke", "none")
      .style("opacity", 0.5);
  }

  #handleZoom() {
    let zoomBox1 = document.querySelector(`#${this.#objectIDs.zoomBoxId1}`);
    if (zoomBox1) zoomBox1.remove();

    let zoomBox2 = document.querySelector(`#${this.#objectIDs.zoomBoxId2}`);
    if (zoomBox2) zoomBox2.remove();

    let minMaxZoom = d3.extent([this.#zoomPoint1, this.#zoomPoint2]);

    let leftDate = parseDate(
      this.#xScaleFunc.invert(minMaxZoom[0]).toISOString()
    ).getTime();
    let rightDate = parseDate(
      this.#xScaleFunc.invert(minMaxZoom[1]).toISOString()
    ).getTime();

    if (leftDate - rightDate === 0) {
      return;
    }

    let filteredData = this.data.filter((x) => {
      return (
        parseDate(x.date).getTime() > leftDate - this.#candleWidthDate &&
        parseDate(x.date).getTime() < rightDate + this.#candleWidthDate
      );
    });

    let oldZoomRange1 = this.#minMaxDate[0].getTime();
    let oldZoomRange2 = this.#minMaxDate[1].getTime();

    let newZoomRange1 = parseDate(
      this.#xScaleFunc.invert(minMaxZoom[0]).toISOString()
    ).getTime();
    let newZoomRange2 = parseDate(
      this.#xScaleFunc.invert(minMaxZoom[1]).toISOString()
    ).getTime();

    this.#zoomFactor =
      (oldZoomRange2 - oldZoomRange1) / (newZoomRange2 - newZoomRange1);

    this.#zoomRange1 = newZoomRange1;
    this.#zoomRange2 = newZoomRange2;

    this.#filteredData = filteredData;
    this.draw();
  }

  #handlePan(location) {
    let dateWidth = this.#zoomRange2 - this.#zoomRange1;
    const containerElement = document.getElementById(
      `${this.#objectIDs.candleContainerId}`
    );
    if (!(containerElement instanceof SVGSVGElement)) {
      console.error("Candle container element is not an SVGSVGElement");
      return;
    }
    let width = containerElement.width.baseVal.value;

    let fraction = location / width;

    let newZoomRange1 = this.#panTargetDate - fraction * dateWidth;
    let newZoomRange2 = newZoomRange1 + dateWidth;

    let filteredData = this.data.filter((x) => {
      return (
        parseDate(x.date).getTime() > newZoomRange1 - this.#candleWidthDate &&
        parseDate(x.date).getTime() < newZoomRange2 + this.#candleWidthDate
      );
    });

    this.#zoomRange1 = newZoomRange1;
    this.#zoomRange2 = newZoomRange2;

    this.#filteredData = filteredData;
    this.draw();
  }

  #handleScrollZoom(e: D3ZoomEvent<SVGSVGElement, unknown>) {
    let location = getCursorPoint(this.#objectIDs.svgId, e.sourceEvent);
    this.#zoomFactor *= e.transform.k > 1 ? 1.1 : 0.9;

    let width = this.#minMaxDate[1].getTime() - this.#minMaxDate[0].getTime();

    let newWidth = Math.round(width / this.#zoomFactor);

    const svgElement = document.getElementById(
      `${this.#objectIDs.candleContainerId}`
    );
    if (!svgElement || !(svgElement instanceof SVGSVGElement)) {
      throw new Error(
        "Candle container element not found or is not an SVG element"
      );
    }
    let svgWidth = svgElement.width.baseVal.value;

    let target = this.#xScaleFunc.invert(location.x).getTime();
    let coeff = Math.round((newWidth * location.x) / svgWidth);
    let left = target - coeff;
    let right = left + newWidth;

    this.#zoomRange1 = left;
    this.#zoomRange2 = right;

    let filteredData = this.data.filter((x) => {
      return (
        parseDate(x.date).getTime() > left - this.#candleWidthDate &&
        parseDate(x.date).getTime() < right + this.#candleWidthDate
      );
    });

    this.#filteredData = filteredData;

    this.draw();
  }

  #handleMouseMove(e, d) {
    let location = getCursorPoint(this.#objectIDs.svgId, e);
    if (location.x > this.#config.width) location.x = this.#config.width;
    if (location.y > this.#config.height) location.y = this.#config.svgHeight;

    //x line
    if (!this.#lockSelectorX) this.#xLineHandler(d, location.x);

    //y line
    this.#yLineHandler(d, location.y);

    //x label
    if (!this.#lockSelectorX) {
      this.#xLabelHandler(d, location.x);
    }

    //y label
    this.#yLabelHandler(d, location.y);

    if (this.#isMouseDown && this.#mode === "zoom") {
      this.#zoomPoint2 = location.x;
      this.#handleZoomBox();
    } else if (this.#isMouseDown && this.#mode === "pan") {
      this.#handlePan(location.x);
    }
  }

  #handleMouseLeave() {
    let xLine = document.getElementById(this.#objectIDs.xLineSelectorId);
    let yLine = document.getElementById(this.#objectIDs.yLineSelectorId);
    let xLabel = document.getElementById(this.#objectIDs.xLabelSelectorId);
    let yLabel = document.getElementById(this.#objectIDs.yLabelSelectorId);

    if (xLine) xLine.remove();
    if (yLine) yLine.remove();
    if (xLabel) xLabel.remove();
    if (yLabel) yLabel.remove();
  }

  #handleMouseDown(e) {
    this.#isMouseDown = true;
    let location = getCursorPoint(this.#objectIDs.svgId, e);
    if (this.#mode === "zoom") {
      this.#zoomPoint1 = location.x;
    } else if (this.#mode === "pan") {
      this.#panTargetDate = this.#xScaleFunc.invert(location.x).getTime();
    }
  }

  #handleMouseUp() {
    this.#isMouseDown = false;
    if (this.#mode === "zoom") {
      this.#handleZoom();
      this.#zoomPoint1 = 0;
      this.#zoomPoint2 = 0;
    } else if (this.#mode === "pan") {
      this.#panTargetDate = 0;
    }
  }

  #addEvenetListeners() {
    let thisProxy = this;
    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle-locker`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .sl`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .tp`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .short`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .long`)
      .on("mouseover", function (e, d) {
        thisProxy.#mouseMoveLockers(d);
      })
      .on("mouseleave", (e, d) => {
        thisProxy.#mouseLeaveLocker(d);
      });

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "mousemove",
      function (e, d) {
        thisProxy.#handleMouseMove(e, d);
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "mouseleave",
      function (e, d) {
        thisProxy.#handleMouseLeave();
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "mousedown",
      function (e, d) {
        thisProxy.#handleMouseDown(e);
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "mouseup",
      function (e, d) {
        thisProxy.#handleMouseUp();
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "touchstart",
      function (e, d) {
        thisProxy.#handleMouseDown(e);
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "touchend",
      function (e, d) {
        thisProxy.#handleMouseUp();
      }
    );

    d3.select(`#${this.#objectIDs.candleContainerId}`).on(
      "touchmove",
      function (e, d) {
        thisProxy.#handleMouseMove(e, d);
      }
    );

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`).on(
      "click",
      function (e, d) {
        thisProxy.#modeHandler("zoom");
      }
    );
    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).on(
      "click",
      function (e, d) {
        thisProxy.#modeHandler("pan");
      }
    );

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-0`).on(
      "click",
      function (e, d) {
        thisProxy.#handleResetZoom();
      }
    );

    let zoom = d3.zoom().on("zoom", function (e) {
      thisProxy.#handleScrollZoom(e);
    });

    d3.select<SVGSVGElement, unknown>(
      `#${this.#objectIDs.svgId}` as unknown as SVGSVGElement
    )
      .call(
        zoom as unknown as (
          selection: d3.Selection<SVGSVGElement, unknown, null, undefined>
        ) => void
      )
      .on("mousedown.zoom", null)
      .on("touchstart.zoom", null)
      .on("touchmove.zoom", null)
      .on("touchend.zoom", null);

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-sma`).on(
      "click",
      () => {
        this.#showSma = !this.#showSma;
        if (this.#showSma) {
          this.#drawSMA(); // Default SMA period is 10
        } else {
          d3.selectAll(".sma-line").remove();
        }
      }
    );
  }

  #removeEventListeners() {
    if (!this.#objectIDs.candleContainerId) return;

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle-locker`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .sl`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .tp`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .short`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.selectAll(`#${this.#objectIDs.candleContainerId} .long`)
      .on("mouseover", function (e, d) {
        null;
      })
      .on("mouseleave", (e, d) => {
        null;
      });

    d3.select(`#${this.#objectIDs.candleContainerId}`).on("mousemove", null);

    d3.select(`#${this.#objectIDs.candleContainerId}`).on("mouseleave", null);

    d3.select(`#${this.#objectIDs.candleContainerId}`).on("mousedown", null);

    d3.select(`#${this.#objectIDs.candleContainerId}`).on("mouseup", null);

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`).on(
      "click",
      null
    );
    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).on(
      "click",
      null
    );

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-0`).on(
      "click",
      null
    );

    d3.zoom().on("zoom", null);
  }

  getColors() {
    return this.#colors;
  }

  getConfig() {
    return {
      candleTailWidth: this.#config.candleTailWidth,
      width: this.#config.width,
      height: this.#config.height,
      xLabelFontSize: this.#config.xLabelFontSize,
      yLabelFontSize: this.#config.yLabelFontSize,
      decimal: this.#config.decimal,
      timeFormat: this.#config.timeFormat,
    };
  }

  destroy() {
    this.#removeEventListeners();
    if (document.getElementById(this.#objectIDs.svgId)) {
      const svgElement = document.getElementById(this.#objectIDs.svgId);
      if (svgElement) {
        svgElement.remove();
      }
    }
  }

  #toggleChartType() {
    this.isLineChart = !this.isLineChart;

    // Update the button text
    d3.select(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-toggle-chart`
    ).text(this.isLineChart ? "Candlestick Chart" : "Line Chart");

    // Redraw the chart based on the selected type
    this.draw();
  }

  draw() {
    // this.#filteredData = this.data;

    this.destroy();
    this.#createLayout();
    this.#calculateXscale();
    this.#calculateYscale();
    if (this.isLineChart) {
      this.#drawLineChart(); // Draw the line chart
      this.#createYaxis();
      this.#createXaxis();
      this.#createInfoText();
    } else {
      this.#calculateCandleWidth();
      this.#createYaxis();
      this.#createXaxis();
      this.#createInfoText();
      this.#createLockerGroup();
      this.#createLockerBody();
      this.#createCandlesGroup();
      this.#createCandlesBody();
      this.#createCandlesHigh();
      this.#createCandlesLow();
      this.#drawVolumeChart();
      this.#drawSMA(); // Default SMA period is 10
    }
    // this.#createShortPositions();
    // this.#createLongPositions();
    // this.#createStopLosses();
    // this.#createTakeProfits();
    this.#addEvenetListeners();
  }

  #drawVolumeChart() {
    const volumeHeight = this.#config.svgHeight * 0.2; // 20% of the chart height for volume
    const volumeYScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.#filteredData, (d) => d.volume)])
      .range([volumeHeight, 0]);

    const volumeGroup = d3
      .select(`#${this.#objectIDs.svgId}`)
      .append("g")
      .attr("id", `${this.#objectIDs.candleContainerId}-volume`)
      .attr(
        "transform",
        `translate(0, ${this.#config.svgHeight - volumeHeight})`
      );

    volumeGroup
      .selectAll("rect")
      .data(this.#filteredData)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => this.#xScaleFunc(parseDate(d.date)) - this.#candleWidth / 2
      )
      .attr("y", (d) => volumeYScale(d.volume))
      .attr("width", this.#candleWidth)
      .attr("height", (d) => volumeHeight - volumeYScale(d.volume))
      .attr("fill", (d) =>
        d.open < d.close
          ? this.#colors.downCandlesFill
          : this.#colors.upCandlesFill
      )
      .attr("opacity", 0.7);
  }

  #getTimeIntervalInMs(interval: TInterval) {
    switch (interval) {
      case "1D":
        return 24 * 60 * 60 * 1000; // 1 day
      case "1H":
        return 60 * 60 * 1000; // 1 hour
      case "4H":
        return 4 * 60 * 60 * 1000; // 4 hours
      case "1M":
        return 60 * 1000; // 1 minute
      default:
        return 60 * 1000; // Default to 1 minute
    }
  }

  // Add a method to generate random OHLCV data and update the chart dynamically
  startLiveFeed() {
    if (this.isLiveChart) return; // Prevent multiple intervals

    this.isLiveChart = true;
    const selectedTimeInterval = this.#selectedTimeInterval;

    // Set updates per timeframe
    let counterTillCloseCandle = 60 * 4; // 4 updates per second for 1 minute
    switch (selectedTimeInterval) {
      case "1D":
        counterTillCloseCandle = 60 * 60 * 24 * 4;
        break;
      case "1H":
        counterTillCloseCandle = 60 * 60 * 4;
        break;
      case "4H":
        counterTillCloseCandle = 60 * 60 * 4 * 4;
        break;
      case "1M":
        counterTillCloseCandle = 60 * 4;
        break;
      default:
        counterTillCloseCandle = 60 * 4;
        break;
    }

    let intervalValues: number[] = [];
    let updateCount = 0;
    const lastDataPoint = this.data[this.data.length - 1];
    let lastDate = parseDate(lastDataPoint.date);

    // Get the last candle as starting point

    // Create an initial current candle
    let currentCandle: IOHLCVCandleData = {
      date: new Date(
        lastDate.getTime() + this.#getTimeIntervalInMs(selectedTimeInterval)
      ).toISOString(),
      open: lastDataPoint.close,
      high: lastDataPoint.close,
      low: lastDataPoint.close,
      close: lastDataPoint.close,
      volume: 0,
    };

    // Add initial price to interval values
    intervalValues.push(lastDataPoint.close);

    const updateLiveData = () => {
      console.log("Updating live data...🥼", {
        currentCandle,
        intervalValues,
        updateCount,
        counterTillCloseCandle,
      });

      updateCount++;

      // Generate a new price with small random movement
      const lastPrice = intervalValues[intervalValues.length - 1];
      const priceChange = (Math.random() - 0.5) * (lastPrice * 0.01); // Random movement within ±0.5% of last price
      const newPrice = Math.max(0.01, lastPrice + priceChange); // Ensure price doesn't go below 0.01

      // Update interval values
      intervalValues.push(newPrice);

      // Update the current candle
      currentCandle.close = newPrice;
      currentCandle.high = Math.max(currentCandle.high, newPrice);
      currentCandle.low = Math.min(currentCandle.low, newPrice);
      currentCandle.volume += Math.floor(Math.random() * 100) + 10;

      // If it's time to close the candle
      if (updateCount >= counterTillCloseCandle) {
        // Add the completed candle to data
        this.data.push({ ...currentCandle });
        this.#filteredData.push({ ...currentCandle });

        // Create a new candle
        const newCandleDate = new Date(
          parseDate(currentCandle.date).getTime() +
            this.#getTimeIntervalInMs(selectedTimeInterval)
        );
        currentCandle = {
          date: newCandleDate.toISOString(),
          open: currentCandle.close,
          high: currentCandle.close,
          low: currentCandle.close,
          close: currentCandle.close,
          volume: 0,
        };

        // Reset counters
        updateCount = 0;
        intervalValues = [currentCandle.open];
      } else {
        // Update the last candle in the data array
        this.data[this.data.length - 1] = { ...currentCandle };
      }

      // Redraw the chart
      this.draw();
    };

    this.liveFeedInterval = setInterval(updateLiveData, 250); // 4 updates per second
  }

  stopLiveFeed() {
    if (!this.isLiveChart) return;

    clearInterval(this.liveFeedInterval);
    this.isLiveChart = false;
  }
}
