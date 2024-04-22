import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = "https://api.chucknorris.io/jokes/random";

    const featureExtractor = await fetch(url, {
      cache: "force-cache",
    });
    if (!featureExtractor.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await featureExtractor.text();
    console.log(data);
    const response = NextResponse.json({ risk: data });
    return response;
  } catch (e) {
    throw new Error("Failed to fetch");
  }
}
