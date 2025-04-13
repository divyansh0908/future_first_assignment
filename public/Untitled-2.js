// Data for the bar chart
const data = [10, 15, 20, 25, 30];

// Set dimensions and margins
const width = 600;
const height = 400;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };

// Create the SVG container
const svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height);

// Create the x and y scales
const x = d3.scaleBand()
  .domain(data.map((d, i) => i))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .nice()
  .range([height - margin.bottom, margin.top]);

// Add the bars
svg.selectAll(".bar")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .attr("x", (d, i) => x(i))
  .attr("y", d => y(d))
  .attr("height", d => y(0) - y(d))
  .attr("width", x.bandwidth());

// Add the x-axis
svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).tickFormat(i => `Item ${i + 1}`))
  .selectAll("text")
  .attr("class", "axis-label");

// Add the y-axis
svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y))
  .selectAll("text")
  .attr("class", "axis-label");