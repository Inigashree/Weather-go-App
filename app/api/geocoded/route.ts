import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = "c6fd6a1e097b19e9ff40756791a588ec";
    const searchParams = req.nextUrl.searchParams;

    const city = searchParams.get("search");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const res = await axios.get(url);

    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching geocoded data");
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}