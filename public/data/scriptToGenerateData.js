/**
 * Generate 50 one-minute (1M) periods of randomized candlestick data
 * Returns OHLCV data (Open, High, Low, Close, Volume)
 */

function generate1MCandlestickData(count = 50) {
    const data = [];
    let basePrice = 100; // Starting price
    const volatility = 0.3; // Lower volatility for 1M candles
    let currentTime = new Date();
    
    // Round to nearest minute
    currentTime.setSeconds(0, 0);
    
    for (let i = count - 1; i >= 0; i--) {
      // For 1M data, subtract 1 minute each time
      const timestamp = new Date(currentTime.getTime() - i * 60 * 1000);
      
      // Get previous close or use base price for first candle
      const prevClose = data.length > 0 ? data[data.length - 1].close : basePrice;
      
      // Generate price movement with lower volatility for 1M candles
      const movement = (Math.random() - 0.5) * volatility;
      const open = prevClose;
      const close = Number((prevClose + movement).toFixed(3));
      
      // Create high and low with appropriate volatility
      // Smaller ranges for 1M timeframe
      const highAdd = Math.random() * volatility * 0.3;
      const high = Number((Math.max(open, close) + highAdd).toFixed(3));
      
      const lowSubtract = Math.random() * volatility * 0.3;
      const low = Number((Math.min(open, close) - lowSubtract).toFixed(3));
      
      // Generate volume between 100-1000 (lower volume for 1M candles)
      const volume = Math.floor(Math.random() * 900) + 100;
      
      // Format timestamp as YYYY-MM-DD HH:MM:00
      const formattedDate = timestamp.toISOString().replace('T', ' ').substring(0, 19);
      
      data.push({
        time: formattedDate,
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
  const oneMinuteCandlestickData = generate1MCandlestickData(50);
  
  // Print results
  console.log(JSON.stringify(oneMinuteCandlestickData, null, 2));
  
  // Optional: Export to CSV format
  function toCSV(data) {
    const headers = "time,open,high,low,close,volume\n";
    const rows = data.map(candle => 
      `${candle.time},${candle.open},${candle.high},${candle.low},${candle.close},${candle.volume}`
    ).join('\n');
    return headers + rows;
  }
  
  const csvData = toCSV(oneMinuteCandlestickData);
  console.log("\nCSV Format:");
  console.log(csvData);
  
  // Sample output to verify the data format
  console.log("\nFirst 5 candles sample:");
  console.table(oneMinuteCandlestickData.slice(0, 5));