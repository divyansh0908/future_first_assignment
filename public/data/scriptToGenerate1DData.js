/**
 * Generate 50 days of randomized candlestick data
 * Returns OHLCV data (Open, High, Low, Close, Volume)
 */

function generateDailyCandlestickData(count = 50) {
    const data = [];
    let basePrice = 100; // Starting price
    const volatility = 3.5; // Increased volatility for daily candles
    let currentDate = new Date();
    
    // Reset to start of day
    currentDate.setHours(0, 0, 0, 0);
    
    for (let i = count - 1; i >= 0; i--) {
      // For daily data, subtract days instead of hours
      const timestamp = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000);
      
      // Get previous close or use base price for first candle
      const prevClose = data.length > 0 ? data[data.length - 1].close : basePrice;
      
      // Generate price movement with slightly more volatility for daily candles
      const movement = (Math.random() - 0.48) * volatility;
      const open = prevClose;
      const close = Number((prevClose + movement).toFixed(2));
      
      // Create high and low with additional volatility
      const highAdd = Math.random() * volatility * 0.7; // More intraday volatility
      const high = Number((Math.max(open, close) + highAdd).toFixed(2));
      
      const lowSubtract = Math.random() * volatility * 0.7;
      const low = Number((Math.min(open, close) - lowSubtract).toFixed(2));
      
      // Generate volume between 5000-50000 (higher volume for daily candles)
      const volume = Math.floor(Math.random() * 45000) + 5000;
      
      data.push({
        date: timestamp.toISOString().split('T')[0], // Just the date portion for daily data
        open,
        high,
        low,
        close,
        volume
      });
    }
    
    return data;
  }
  
  // Generate the data
  const dailyCandlestickData = generateDailyCandlestickData(50);
  
  // Print results
  console.log(JSON.stringify(dailyCandlestickData, null, 2));
  
  // Optional: Export to CSV format
  function toCSV(data) {
    const headers = "date,open,high,low,close,volume\n";
    const rows = data.map(candle => 
      `${candle.date},${candle.open},${candle.high},${candle.low},${candle.close},${candle.volume}`
    ).join('\n');
    return headers + rows;
  }
  
  const csvData = toCSV(dailyCandlestickData);
  console.log("\nCSV Format:");
  console.log(csvData);
  
  // Sample output to verify the data format
  console.log("\nFirst 5 candles sample:");
  console.table(dailyCandlestickData.slice(0, 5));