const WebSocket = require("ws");

const API_KEY = "YOUR_API"; // Replace this with your actual API key
const STREAM_API_URL = "wss://stream.sec-api.io?apiKey=" + API_KEY;

const ws = new WebSocket(STREAM_API_URL);

ws.on("open", () => console.log("✅ Connected to:", STREAM_API_URL));
ws.on("close", () => console.log("Connection closed"));
ws.on("error", (err) => console.log("Error:", err.message));

ws.on("message", (message) => {
  const filings = JSON.parse(message.toString());
  filings.forEach((filing) => {
    console.log(
      filing.id,
      filing.cik,
      filing.formType,
      filing.filedAt,
      filing.linkToFilingDetails,
    );
  });
});
