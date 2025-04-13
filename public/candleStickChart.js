import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export const parseDate = (dateStr) => new Date(dateStr);
let showSMA = false;

export const getCursorPoint = (id, evt) => {
  let svg = document.querySelector(`#${id}`);
  let pt = svg.createSVGPoint();
  let cursorPoint = (evt) => {
    if (evt.touches && evt.touches[0]) {
      pt.x = evt.touches[0].clientX;
      pt.y = evt.touches[0].clientY;
    } else {
      pt.x = evt.clientX;
      pt.y = evt.clientY;
    }

    return pt.matrixTransform(svg.getScreenCTM().inverse());
  };

  return cursorPoint(evt);
};

export const findFixedDataIndex = (dataPoint, data) => {
  let index = 0;
  let min = Math.abs(parseDate(dataPoint) - parseDate(data[0].date));
  for (let i = 0; i < data.length; i++) {
    let newMin = Math.abs(parseDate(dataPoint) - parseDate(data[i].date));
    if (newMin < min) {
      min = newMin;
      index = i;
    }
  }
  return index;
};

export const colors = () => {
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

export const config = (width, height) => {
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
    yLabelWidth: undefined,
    paddingRight: undefined,
    svgWidth: undefined,
    svgHeight: undefined,
  };
};

let data = [
  {
    date: "2018-10-22",
    open: 180.82,
    high: 181.4,
    low: 177.56,
    close: 178.75,
  },
  {
    date: "2018-10-23",
    open: 175.77,
    high: 179.49,
    low: 175.44,
    close: 178.53,
  },
  {
    date: "2018-10-24",
    open: 178.58,
    high: 182.37,
    low: 176.31,
    close: 176.97,
  },
  {
    date: "2018-10-25",
    open: 177.52,
    high: 180.5,
    low: 176.83,
    close: 179.07,
  },
  {
    date: "2018-10-26",
    open: 176.88,
    high: 177.34,
    low: 170.91,
    close: 172.23,
    long: 174,
    sl: 170,
    tp: 178,
  },
  {
    date: "2018-10-29",
    open: 173.74,
    high: 175.99,
    low: 170.95,
    close: 173.2,
  },
  {
    date: "2018-10-30",
    open: 173.16,
    high: 176.43,
    low: 172.64,
    close: 176.24,
  },
  {
    date: "2018-10-31",
    open: 177.98,
    high: 178.85,
    low: 175.59,
    close: 175.88,
  },
  {
    date: "2018-11-01",
    open: 176.84,
    high: 180.86,
    low: 175.9,
    close: 180.46,
  },
  {
    date: "2018-11-02",
    open: 182.47,
    high: 183.01,
    low: 177.39,
    close: 179.93,
    long: 180,
    sl: 170,
    tp: 190,
  },
  {
    date: "2018-11-05",
    open: 181.02,
    high: 182.41,
    low: 179.3,
    close: 182.19,
  },
  {
    date: "2018-11-06",
    open: 181.93,
    high: 182.65,
    low: 180.05,
    close: 182.01,
  },
  {
    date: "2018-11-07",
    open: 183.79,
    high: 187.68,
    low: 182.06,
    close: 187.23,
    short: 183,
    sl: 185,
    tp: 181,
  },
  {
    date: "2018-11-08",
    open: 187.13,
    high: 188.69,
    low: 185.72,
    close: 188.0,
  },
  {
    date: "2018-11-09",
    open: 188.32,
    high: 188.48,
    low: 184.96,
    close: 185.99,
  },
  {
    date: "2018-11-12",
    open: 185.23,
    high: 186.95,
    low: 179.02,
    close: 179.43,
  },
  {
    date: "2018-11-13",
    open: 177.3,
    high: 181.62,
    low: 172.85,
    close: 179.0,
  },
  {
    date: "2018-11-14",
    open: 182.61,
    high: 182.9,
    low: 179.15,
    close: 179.9,
  },
  {
    date: "2018-11-15",
    open: 179.01,
    high: 179.67,
    low: 173.61,
    close: 177.36,
  },
  {
    date: "2018-11-16",
    open: 173.99,
    high: 177.6,
    low: 173.51,
    close: 177.02,
  },
  {
    date: "2018-11-19",
    open: 176.71,
    high: 178.88,
    low: 172.3,
    close: 173.59,
    short: 175,
    sl: 185,
    tp: 165,
  },
  {
    date: "2018-11-20",
    open: 169.25,
    high: 172.0,
    low: 167.0,
    close: 169.05,
  },
  {
    date: "2018-11-21",
    open: 170.0,
    high: 170.93,
    low: 169.15,
    close: 169.3,
  },
  {
    date: "2018-11-23",
    open: 169.39,
    high: 170.33,
    low: 168.47,
    close: 168.85,
  },
  {
    date: "2018-11-26",
    open: 170.2,
    high: 172.39,
    low: 168.87,
    close: 169.82,
  },
  {
    date: "2018-11-27",
    open: 169.11,
    high: 173.38,
    low: 168.82,
    close: 173.22,
    long: 173,
    sl: 171,
    tp: 175,
  },
  {
    date: "2018-11-28",
    open: 172.91,
    high: 177.65,
    low: 170.62,
    close: 177.43,
  },
  {
    date: "2018-11-29",
    open: 176.8,
    high: 177.27,
    low: 174.92,
    close: 175.66,
  },
  {
    date: "2018-11-30",
    open: 175.75,
    high: 180.37,
    low: 175.11,
    close: 180.32,
  },
  {
    date: "2018-12-03",
    open: 183.29,
    high: 183.5,
    low: 179.35,
    close: 181.74,
  },
  {
    date: "2018-12-04",
    open: 181.06,
    high: 182.23,
    low: 174.55,
    close: 175.3,
  },
  {
    date: "2018-12-06",
    open: 173.5,
    high: 176.04,
    low: 170.46,
    close: 175.96,
    short: 176.21,
    sl: 178.81,
    tp: 172.21,
  },
  {
    date: "2018-12-07",
    open: 175.35,
    high: 178.36,
    low: 172.24,
    close: 172.79,
  },
  {
    date: "2018-12-10",
    open: 173.39,
    high: 173.99,
    low: 167.73,
    close: 171.69,
  },
  {
    date: "2018-12-11",
    open: 174.3,
    high: 175.6,
    low: 171.24,
    close: 172.21,
  },
  {
    date: "2018-12-12",
    open: 173.75,
    high: 176.87,
    low: 172.81,
    close: 174.21,
  },
  {
    date: "2018-12-13",
    open: 174.31,
    high: 174.91,
    low: 172.07,
    close: 173.87,
  },
  {
    date: "2018-12-14",
    open: 172.98,
    high: 175.14,
    low: 171.95,
    close: 172.29,
  },
  {
    date: "2018-12-17",
    open: 171.51,
    high: 171.99,
    low: 166.93,
    close: 167.97,
  },
  {
    date: "2018-12-18",
    open: 168.9,
    high: 171.95,
    low: 168.5,
    close: 170.04,
  },
  {
    date: "2018-12-19",
    open: 170.92,
    high: 174.95,
    low: 166.77,
    close: 167.56,
  },
  {
    date: "2018-12-20",
    open: 166.28,
    high: 167.31,
    low: 162.23,
    close: 164.16,
  },
  {
    date: "2018-12-21",
    open: 162.81,
    high: 167.96,
    low: 160.17,
    close: 160.48,
  },
  {
    date: "2018-12-24",
    open: 160.16,
    high: 161.4,
    low: 158.09,
    close: 158.14,
  },
  {
    date: "2018-12-26",
    open: 159.46,
    high: 168.28,
    low: 159.44,
    close: 168.28,
  },
  {
    date: "2018-12-27",
    open: 166.44,
    high: 170.46,
    low: 163.36,
    close: 170.32,
  },
  {
    date: "2018-12-28",
    open: 171.22,
    high: 173.12,
    low: 168.6,
    close: 170.22,
  },
  {
    date: "2018-12-31",
    open: 171.47,
    high: 173.24,
    low: 170.65,
    close: 171.82,
  },
  {
    date: "2019-01-02",
    open: 169.71,
    high: 173.18,
    low: 169.05,
    close: 172.41,
  },
  {
    date: "2019-01-03",
    open: 171.84,
    high: 171.84,
    low: 168.21,
    close: 168.61,
  },
  {
    date: "2019-01-04",
    open: 170.18,
    high: 174.74,
    low: 169.52,
    close: 173.62,
  },
  {
    date: "2019-01-07",
    open: 173.83,
    high: 178.18,
    low: 173.83,
    close: 177.04,
  },
  {
    date: "2019-01-08",
    open: 178.57,
    high: 179.59,
    low: 175.61,
    close: 177.89,
  },
  {
    date: "2019-01-09",
    open: 177.87,
    high: 181.27,
    low: 177.1,
    close: 179.73,
  },
  {
    date: "2019-01-10",
    open: 178.03,
    high: 179.24,
    low: 176.34,
    close: 179.06,
  },
  {
    date: "2019-01-11",
    open: 177.93,
    high: 180.26,
    low: 177.12,
    close: 179.41,
  },
  {
    date: "2019-01-14",
    open: 177.59,
    high: 179.23,
    low: 176.9,
    close: 178.81,
  },
  {
    date: "2019-01-15",
    open: 176.08,
    high: 177.82,
    low: 175.2,
    close: 176.47,
  },
  {
    date: "2019-01-16",
    open: 177.09,
    high: 177.93,
    low: 175.86,
    close: 177.04,
  },
  {
    date: "2019-01-17",
    open: 174.01,
    high: 175.46,
    low: 172.0,
    close: 174.87,
  },
  {
    date: "2019-01-18",
    open: 176.98,
    high: 180.04,
    low: 176.18,
    close: 179.58,
  },
  {
    date: "2019-01-22",
    open: 177.49,
    high: 178.6,
    low: 175.36,
    close: 177.11,
  },
  {
    date: "2019-01-23",
    open: 176.59,
    high: 178.06,
    low: 174.53,
    close: 176.89,
  },
  {
    date: "2019-01-24",
    open: 177.0,
    high: 177.53,
    low: 175.3,
    close: 177.29,
  },
  {
    date: "2019-01-25",
    open: 179.78,
    high: 180.87,
    low: 178.61,
    close: 180.4,
  },
  {
    date: "2019-01-28",
    open: 178.97,
    high: 179.99,
    low: 177.41,
    close: 179.83,
  },
  {
    date: "2019-01-29",
    open: 178.96,
    high: 180.15,
    low: 178.09,
    close: 179.69,
  },
  {
    date: "2019-01-30",
    open: 180.47,
    high: 184.2,
    low: 179.78,
    close: 182.18,
  },
];
const calculateSMA = (data, period) => {
  let sma = [];
  for (let i = 0; i < data.length; i++) {
    if (i < period - 1) {
      sma.push(null); // Not enough data for SMA
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

class CandleStickChart {
  #colors;
  #config;
  #maxPrice;
  #lockSelectorX;
  #objectIDs;
  #xScaleFunc;
  #yScaleFunc;
  #candleWidth;
  #candleWidthDate;
  #candleLockerWidth;
  #candleLockerWidthDate;
  #filteredData;
  #mode;
  #isMouseDown = false;
  #zoomPoint1;
  #zoomPoint2;
  #zoomRange1;
  #zoomRange2;
  #minMaxDate;
  #zoomFactor = 1;
  #panTargetDate;

  constructor(width, height, data, id) {
    this.#colors = colors();
    this.#config = config(width, height);
    this.#maxPrice = d3.max(data.map((x) => x.high));
    this.data = data.sort((a, b) => parseDate(a) - parseDate(b));
    this.#filteredData = data;
    this.id = id;
    this.#lockSelectorX = false;
    this.#calculateExtendConfigs();
    this.#setObjectIDs();
    let minMaxDate = d3.extent(data.map((x) => parseDate(x.date)));
    this.#calculateCandleWidthDate();
    this.#minMaxDate = minMaxDate;
    this.#zoomRange1 = minMaxDate[0].getTime() - this.#candleWidthDate / 2;
    this.#zoomRange2 = minMaxDate[1].getTime() + this.#candleWidthDate / 2;
    this.#createToolsBtns();
    this.#modeHandler("pan");
  }

  /**
   *
   * @param {*} id : "1D", "1H", "4H", "5M", "15M", "30M"
   */
  #loadData(id) {
    console.log("load data", this.data.slice(0, 5));
    let fileToLoad = "";
    switch (id) {
      case "1D":
        fileToLoad = "/data/BTC1D.csv";
        break;
      case "1H":
        fileToLoad = "/data/BTC1H.csv";
        break;
      case "4H":
        fileToLoad = "/data/BTC4H.csv";
        break;
      case "5M":
        fileToLoad = "/data/BTC5Min.csv";
        break;
      case "15M":
        fileToLoad = "/data/BTC15Min.csv";
        break;
      case "30M":
        fileToLoad = "/data/BTC30Min.csv";
        break;
      default:
        fileToLoad = "/data/BTC1H.csv";
        break;
    }

    d3.csv(fileToLoad).then((dataRow) => {
      dataRow = dataRow.slice(dataRow.length - 1000, dataRow.length);
      this.data = dataRow.map((x) => ({
        date: x.datetime,
        open: +x.open,
        high: +x.high,
        low: +x.low,
        close: +x.close,
      }));
      console.log(this.data.slice(0, 5));
      this.#filteredData = this.data;

      // Recalculate configurations
      this.destroy();
      this.#calculateCandleWidthDate();
      this.#calculateXscale();
      this.#createYaxis();
      this.#createXaxis();
      this.#calculateYscale();
      this.#calculateCandleWidth();

      this.draw();
    });
  }

  #calculateInfoTextWidth() {
    console.log(this.#maxPrice);
    this.#config.infoTextWidth =
      (parseFloat(this.#maxPrice).toFixed(this.#config.decimal).toString()
        .length *
        4 +
        11) *
      this.#config.charWidth;
  }

  #drawSMA(period = 5) {
    const smaData = calculateSMA(this.#filteredData, period);
    const line = d3
      .line()
      .x((d, i) => this.#xScaleFunc(parseDate(this.#filteredData[i].date)))
      .y((d) => (d !== null ? this.#yScaleFunc(d) : null))
      .defined((d) => d !== null);

    d3.select(`#${this.#objectIDs.svgId}`)
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
      (this.#maxPrice.toFixed(this.#config.decimal).toString().length * 3 +
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
    this.#config.paddingRight = this.#config.yLabelWidth;
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
      .domain([minDate, maxDate]) // Update domain based on new date range
      .range([0, this.#config.svgWidth]);
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
          ...this.#filteredData.map((x) => x.sl),
          ...this.#filteredData.map((x) => x.tp),
        ])
        .reverse();

      yMinMax[0] += yMinMax[0] * this.#config.yPaddingScaleTop;
      yMinMax[1] -= yMinMax[1] * this.#config.yPaddingScaleBottom;
    }
    this.#yScaleFunc = d3
      .scaleLinear()
      .domain(yMinMax)
      .range([0, this.#config.svgHeight]);
  }

  #calculateCandleWidth() {
    if (this.#filteredData.length === 0) {
      this.#candleLockerWidth = 0;
      this.#candleWidth = 0;
      return;
    }
    let minMax = d3.extent(this.#filteredData.map((x) => parseDate(x.date)));
    this.#candleLockerWidth =
      this.#xScaleFunc(minMax[0].getTime() + this.#candleLockerWidthDate) -
      this.#xScaleFunc(minMax[0].getTime());
    console.log("this.#candleLockerWidth", this.#candleLockerWidth);
    this.#candleWidth =
      this.#candleLockerWidth - this.#candleLockerWidth * 0.13;
    console.log("this.#candleWidth", this.#candleWidth);
  }

  #calculateCandleWidthDate() {
    let times = this.#filteredData.map((x) => x.date).sort();
    let indexes = [0, 1];
    let min = parseDate(times[1]) - parseDate(times[0]);
    for (let i = 1; i < times.length; i++) {
      if (parseDate(times[i + 1]) - parseDate(times[i]) < min) {
        min = parseDate(times[i + 1]) - parseDate(times[i]);
        indexes = [i, i + 1];
      }
    }

    let rWidth = parseDate(times[indexes[1]]) - parseDate(times[indexes[0]]);
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
      .attr("width", this.#config.svgWidth)
      .attr("height", this.#config.svgHeight)
      .style("overflow", "inherit")
      .style("cursor", "crosshair")
      .attr("id", this.#objectIDs.svgId)
      .style("margin-top", "-50px");
  }

  #createYaxis() {
    console.log(this.#yScaleFunc);
    let yAxis = d3.axisRight(this.#yScaleFunc).tickSize(this.#config.svgWidth);
    d3.select(`#${this.#objectIDs.svgId}`)
      .append("g")
      .attr("id", this.#objectIDs.yAxisId)
      .call(yAxis);

    d3.selectAll(`#${this.#objectIDs.yAxisId} .domain`).each(function (d, i) {
      this.remove();
    });

    d3.selectAll(`#${this.#objectIDs.yAxisId}  g text`).attr(
      "transform",
      "translate(5,0)"
    );

    let gridColor = this.#colors.grid;
    d3.selectAll(`#${this.#objectIDs.yAxisId}  .tick line`).each(function (
      d,
      i
    ) {
      this.style.stroke = gridColor;
    });
    d3.selectAll(`#${this.#objectIDs.yAxisId} .tick text`).style(
      "fill",
      this.#colors.tickColor
    );
  }

  #createXaxis() {
    let xAxis = d3
      .axisBottom(this.#xScaleFunc)
      .ticks(this.#config.svgWidth / 100)
      .tickSize(this.#config.svgHeight);

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
      this.style.stroke = gridColor;
    });
    d3.selectAll(`#${this.#objectIDs.xAxisId} .domain`).each(function (d, i) {
      this.remove();
    });
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
      .attr("width", this.#config.infoTextWidth)
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
      .attr("width", this.#config.infoTextWidthMeta)
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
      .attr("width", this.#config.svgWidth)
      .attr("height", this.#config.svgHeight)
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
    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle-locker`)
      .append("rect")
      .attr("width", this.#candleLockerWidth)
      .attr("height", this.#config.svgHeight)
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
    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle`)
      .append("rect")
      .attr("width", this.#candleWidth)
      .attr("height", (d) =>
        d.open > d.close
          ? this.#yScaleFunc(d.close) - this.#yScaleFunc(d.open)
          : this.#yScaleFunc(d.open) - this.#yScaleFunc(d.close)
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
    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle`)
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
    d3.selectAll(`#${this.#objectIDs.candleContainerId} .candle`)
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
      .style("align-items", "center")

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

    const intervals = ["1D", "1H", "4H", "5M", "15M", "30M"];
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

    document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-sma`
    ).innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21H7C4.791 21 3 19.209 3 17V7C3 4.791 4.791 3 7 3H17C19.209 3 21 4.791 21 7V17C21 19.209 19.209 21 17 21Z" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 15L10 10L14 14L21 9" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

    document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-0`
    ).innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd" stroke="${
        this.#colors.deActiveTools
      }" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">
      <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/>
      <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/>
      </g>
    </svg>`;

    document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`
    ).innerHTML = `
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

    document.querySelector(
      `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`
    ).innerHTML = `
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

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-0`).on(
      "click",
      (e) => {
        this.#modeHandler("pan");
        this.#handleResetZoom();
      }
    );
  }

  #handleTimeIntervalChange(interval) {
    console.log(`Time interval changed to: ${interval}`);
    this.#loadData(interval);
    // Add logic to fetch and update data based on the selected interval
    // For example:
    // if (interval === "1D") {
    //   this.data = fetchDataForInterval("1D");
    // }
    // this.#filteredData = this.data;
    // this.draw();
  }

  #modeHandler(mode) {
    this.#mode = mode;
    if (mode === "pan") {
      document
        .querySelector(
          `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2 svg g g`
        )
        .setAttribute("fill", this.#colors.activeTools);

      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).style(
        "border",
        `1px solid ${this.#colors.activeTools}`
      );

      document
        .querySelector(
          `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1 svg`
        )
        .setAttribute("fill", this.#colors.deActiveTools);
      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1`).style(
        "border",
        `1px solid ${this.#colors.deActiveTools}`
      );
    } else if (mode === "zoom") {
      document
        .querySelector(
          `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2 svg g g`
        )
        .setAttribute("fill", this.#colors.deActiveTools);
      d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-2`).style(
        "border",
        `1px solid ${this.#colors.deActiveTools}`
      );

      document
        .querySelector(
          `#${this.#objectIDs.toolsBtnsContainer} #tools-btn-1 svg`
        )
        .setAttribute("fill", this.#colors.activeTools);
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

  #xLineHandler(d, position) {
    let xPosition;
    if (position) xPosition = position;
    else xPosition = this.#xScaleFunc(parseDate(d.date));

    let xLine = document.getElementById(this.#objectIDs.xLineSelectorId);

    if (xLine) {
      d3.select(xLine)
        .attr("x1", xPosition)
        .attr("y1", 0)
        .attr("x2", xPosition)
        .attr("y2", this.#config.svgHeight);
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .insert("line", `#${this.#objectIDs.xAxisId}`)
        .attr("id", this.#objectIDs.xLineSelectorId)
        .attr("stroke", this.#colors.selectorLine)
        .attr("stroke-dasharray", this.#config.selectoreStrokeDashArray)
        .attr("x1", xPosition)
        .attr("y1", 0)
        .attr("x2", xPosition)
        .attr("y2", this.#config.svgHeight);
    }
  }

  #xLabelHandler(d, position) {
    let xPosition;
    if (position) xPosition = position;
    else xPosition = this.#xScaleFunc(parseDate(d.date));

    let xLabel = document.getElementById(this.#objectIDs.xLabelSelectorId);
    if (xLabel) {
      d3.select(xLabel).attr(
        "transform",
        `translate(
      ${
        xPosition >= this.#config.svgWidth - this.#config.xLabelWidth / 2
          ? this.#config.svgWidth - this.#config.xLabelWidth
          : xPosition <= this.#config.xLabelWidth / 2
          ? 0
          : xPosition - this.#config.xLabelWidth / 2
      },${this.#config.svgHeight})`
      );
      document.querySelector(
        `#${this.#objectIDs.xLabelSelectorId} text`
      ).innerHTML = d3.timeFormat(this.#config.timeFormat)(
        this.#xScaleFunc.invert(xPosition)
      );
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .append("g")
        .attr("id", this.#objectIDs.xLabelSelectorId)
        .attr(
          "transform",
          `translate(
          ${
            xPosition >= this.#config.svgWidth - this.#config.xLabelWidth / 2
              ? this.#config.svgWidth - this.#config.xLabelWidth
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

      document.querySelector(
        `#${this.#objectIDs.xLabelSelectorId} text`
      ).innerHTML = d3.timeFormat(this.#config.timeFormat)(
        this.#xScaleFunc.invert(xPosition)
      );
    }
  }

  #yLineHandler(d, position) {
    let yLine = document.getElementById(this.#objectIDs.yLineSelectorId);
    if (yLine) {
      d3.select(yLine)
        .attr("x1", 0)
        .attr("y1", position)
        .attr("x2", this.#config.svgWidth)
        .attr("y2", position);
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .insert("line", `#${this.#objectIDs.xAxisId}`)
        .attr("id", this.#objectIDs.yLineSelectorId)
        .attr("stroke", this.#colors.selectorLine)
        .attr("stroke-dasharray", this.#config.selectoreStrokeDashArray)
        .attr("x1", 0)
        .attr("y1", position)
        .attr("x2", this.#config.svgHeight)
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
          position >= this.#config.svgHeight - this.#config.yLabelHeight / 2
            ? this.#config.svgHeight - this.#config.yLabelHeight
            : position <= this.#config.yLabelHeight / 2
            ? 0
            : position - this.#config.yLabelHeight / 2
        })`
      );
      document.querySelector(
        `#${this.#objectIDs.yLabelSelectorId} text`
      ).innerHTML = this.#yScaleFunc
        .invert(position)
        .toFixed(this.#config.decimal);
    } else {
      d3.select(`#${this.#objectIDs.svgId}`)
        .append("g")
        .attr("id", this.#objectIDs.yLabelSelectorId)
        .attr(
          "transform",
          `translate(${this.#config.svgWidth},
            ${
              position >= this.#config.svgHeight - this.#config.yLabelHeight / 2
                ? this.#config.svgHeight - this.#config.yLabelHeight
                : position <= this.#config.yLabelHeight / 2
                ? 0
                : position - this.#config.yLabelHeight / 2
            })`
        );

      d3.select(`#${this.#objectIDs.yLabelSelectorId}`)
        .append("rect")
        .attr("fill", this.#colors.selectorLableBackground)
        .attr("width", this.#config.yLabelWidth)
        .attr("height", this.#config.yLabelHeight);

      d3.select(`#${this.#objectIDs.yLabelSelectorId}`)
        .append("text")
        .style("font-size", `${this.#config.yLabelFontSize}px`)
        .attr("fill", this.#colors.selectorLabelText)
        .style("font-family", "monospace")
        .attr("x", 5)
        .attr("y", 15);

      document.querySelector(
        `#${this.#objectIDs.yLabelSelectorId} text`
      ).innerHTML = this.#yScaleFunc.invert(position).toFixed(1);
    }
  }

  #candleInfoHandler(d) {
    let isUp = d.open > d.close;
    document.getElementById(this.#objectIDs.candleInfoId).innerHTML = `
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
    }'>${d.close.toFixed(this.#config.decimal)}</tspan>`;
    document.getElementById(
      this.#objectIDs.candleInfoIdBackground
    ).style.display = "block";

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

      document.getElementById(this.#objectIDs.candleInfoIdPosition).innerHTML =
        text;
      document.getElementById(
        this.#objectIDs.candleInfoIdBackgroundPosition
      ).style.display = "block";
    }
  }

  #candleInfoLeaveHandler() {
    document.getElementById(this.#objectIDs.candleInfoId).innerHTML = ``;
    document.getElementById(
      this.#objectIDs.candleInfoIdBackground
    ).style.display = "none";

    document.getElementById(
      this.#objectIDs.candleInfoIdPosition
    ).innerHTML = ``;
    document.getElementById(
      this.#objectIDs.candleInfoIdBackgroundPosition
    ).style.display = "none";
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

    let height = document.getElementById(`${this.#objectIDs.candleContainerId}`)
      .height.baseVal.value;
    let width = document.getElementById(`${this.#objectIDs.candleContainerId}`)
      .width.baseVal.value;

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

    let leftDate = parseDate(this.#xScaleFunc.invert(minMaxZoom[0]));
    let rightDate = parseDate(this.#xScaleFunc.invert(minMaxZoom[1]));

    if (leftDate - rightDate === 0) {
      return;
    }

    let filteredData = this.data.filter((x) => {
      return (
        parseDate(x.date).getTime() >
          leftDate.getTime() - this.#candleWidthDate &&
        parseDate(x.date).getTime() <
          rightDate.getTime() + this.#candleWidthDate
      );
    });

    let oldZoomRange1 = this.#minMaxDate[0];
    let oldZoomRange2 = this.#minMaxDate[1];

    let newZoomRange1 = parseDate(this.#xScaleFunc.invert(minMaxZoom[0]));
    let newZoomRange2 = parseDate(this.#xScaleFunc.invert(minMaxZoom[1]));

    this.#zoomFactor =
      (oldZoomRange2 - oldZoomRange1) / (newZoomRange2 - newZoomRange1);

    this.#zoomRange1 = newZoomRange1;
    this.#zoomRange2 = newZoomRange2;

    this.#filteredData = filteredData;
    this.draw();
  }

  #handlePan(location) {
    let dateWidth = this.#zoomRange2 - this.#zoomRange1;
    let width = document.getElementById(`${this.#objectIDs.candleContainerId}`)
      .width.baseVal.value;

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

  #handleScrollZoom(e) {
    let location = getCursorPoint(this.#objectIDs.svgId, e.sourceEvent);
    this.#zoomFactor *= e.transform.k > 1 ? 1.1 : 0.9;

    let width = parseDate(this.#minMaxDate[1]) - parseDate(this.#minMaxDate[0]);

    let newWidth = Math.round(width / this.#zoomFactor);

    let svgWidth = document.getElementById(
      `${this.#objectIDs.candleContainerId}`
    ).width.baseVal.value;

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

    d3.select(`#${this.#objectIDs.svgId}`)
      .call(zoom)
      .on("mousedown.zoom", null)
      .on("touchstart.zoom", null)
      .on("touchmove.zoom", null)
      .on("touchend.zoom", null);

    d3.select(`#${this.#objectIDs.toolsBtnsContainer} #tools-btn-sma`).on(
      "click",
      () => {
        showSMA = !showSMA;
        if (showSMA) {
          this.#drawSMA(10); // Default SMA period is 10
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

  setColors(colorObj) {
    for (const key in colorObj) {
      let color = colorObj[key];
      this.#colors[key] = color;
    }
  }

  setConfig(configObj) {
    for (const key in configObj) {
      let config = configObj[key];
      this.#config[key] = config;
    }

    this.#calculateExtendConfigs();
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
    if (document.getElementById(this.#objectIDs.svgId))
      document.getElementById(this.#objectIDs.svgId).remove();
  }

  draw() {
    // this.#filteredData = this.data;

    this.destroy();
    this.#createLayout();
    this.#calculateXscale();
    this.#calculateYscale();
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
    // this.#createShortPositions();
    // this.#createLongPositions();
    // this.#createStopLosses();
    // this.#createTakeProfits();
    this.#addEvenetListeners();
  }
}

export default CandleStickChart;

let chart = new CandleStickChart(
  window.innerWidth,
  window.innerHeight - 50,
  data,
  "chart1"
);
chart.draw();

window.addEventListener("resize", () => {
  chart.setConfig({
    width: window.innerWidth,
    height: window.innerHeight - 50,
  });
  chart.draw();
});
