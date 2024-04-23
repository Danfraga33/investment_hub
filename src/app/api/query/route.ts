import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   const query = await fetch("https://api.chucknorris.io/jokes/random");
//   const data = await query.json();
//   return NextResponse.json({ data });
// }
export async function POST(req: NextRequest) {
  const queryObject = await req.json();
  const apiKey = process.env.SEC_API_KEY; // Replace with your API key
  // const url = `https://api.sec-api.io?token=${apiKey}`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(queryObject),
  };

  try {
    const response = await fetch(url, options);
    const secData = await response.json();
    return NextResponse.json({ data: secData });
  } catch (err) {
    console.error("Error fetching SEC data:", err);
    return NextResponse.json({ error: "Error fetching data" });
  }
}
