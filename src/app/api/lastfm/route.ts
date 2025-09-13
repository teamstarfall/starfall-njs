import { NextRequest, NextResponse } from "next/server";
import { fetchLastfm, fetchWeather } from "@/app/server";

export async function GET(req: NextRequest) {
    const username = req.nextUrl.searchParams.get("username");
    try {
        return NextResponse.json(await fetchLastfm(username));
    } catch {
        return new Response(`Error fetching lastfm info for ${username}.`, { status: 500 });
    }
}
