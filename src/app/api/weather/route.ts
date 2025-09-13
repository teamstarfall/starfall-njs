import { NextResponse } from "next/server";
import { fetchWeather } from "@/app/server";

export async function GET() {
    try {
        return NextResponse.json(await fetchWeather());
    } catch {
        return new Response("Error fetching weather.", { status: 500 });
    }
}
