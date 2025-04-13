const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const margin = { top: 20, right: 30, bottom: 30, left: 50 };
const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;

const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

let data = [];
let chartType = "candlestick"; // Default chart type
let showSMA = false;
let smaPeriod = 5;

// Generate random OHLCV data
function generateOHLCV() {
    const open = Math.random() * 100 + 50;
    const close = Math.random() * 100 + 50;
    const high = Math.max(open, close) + Math.random() * 20;
    const low = Math.min(open, close) - Math.random() * 20;
    const volume = Math.random() * 1000;
    return { open, high, low, close, volume, time: new Date() };
}

// Update data dynamically
function updateData() {
    data.push(generateOHLCV());
    if (data.length > 50) data.shift(); // Keep only the last 50 data points
    renderChart();
}

// Calculate SMA
function calculateSMA(data, period) {
    return data.map((d, i) => {
        if (i < period - 1) return null;
        const slice = data.slice(i - period + 1, i + 1);
        const avg = d3.mean(slice, d => d.close);
        return { time: d.time, value: avg };
    });
}

// Render the chart
function renderChart() {
    g.selectAll("*").remove();

    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.time))
        .range([0, chartWidth]);

    const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.low), d3.max(data, d => d.high)])
        .range([chartHeight, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    g.append("g")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(xAxis);

    g.append("g").call(yAxis);

    if (chartType === "candlestick") {
        g.selectAll(".candlestick")
            .data(data)
            .join("line")
            .attr("class", "candlestick")
            .attr("x1", d => x(d.time))
            .attr("x2", d => x(d.time))
            .attr("y1", d => y(d.low))
            .attr("y2", d => y(d.high))
            .attr
            .attr("stroke", "black");

        g.selectAll(".candlestick-rect")
            .data(data)
            .join("rect")
            .attr("x", d => x(d.time) - 2)
            .attr("y", d => y(Math.max(d.open, d.close)))
            .attr("width", 4)
            .attr("height", d => Math.abs(y(d.open) - y(d.close)))
            .attr("fill", d => (d.open > d.close ? "red" : "green"));
    } else if (chartType === "line") {
        const line = d3.line()
            .x(d => x(d.time))
            .y(d => y(d.close));

        g.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
    }

    if (showSMA) {
        const smaData = calculateSMA(data, smaPeriod).filter(d => d !== null);

        const smaLine = d3.line()
            .x(d => x(d.time))
            .y(d => y(d.value));

        g.append("path")
            .datum(smaData)
            .attr("class", "sma")
            .attr("d", smaLine);
    }
}

// Event listeners
document.getElementById("candlestick-btn").addEventListener("click", () => {
    chartType = "candlestick";
    renderChart();
});

document.getElementById("line-btn").addEventListener("click", () => {
    chartType = "line";
    renderChart();
});

document.getElementById("sma-btn").addEventListener("click", () => {
    showSMA = !showSMA;
    if (showSMA) {
        smaPeriod = parseInt(prompt("Enter SMA period:", "5"), 10) || 5;
    }
    renderChart();
});

// Start real-time updates
setInterval(updateData, 250); // 4 updates per second