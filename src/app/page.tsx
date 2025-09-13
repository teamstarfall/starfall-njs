import { fetchWeather, fetchLastfm } from "./server";
import members from "../../resources/members";
import MainPage from "./MainPage";
import { Track } from "./types";

export default async function Home() {
    const weather = await fetchWeather();

    const lastFmData: { [key: string]: Track | null } = {};
    for (const member of members) {
        try {
            const lastFmResponse = await fetchLastfm(member.lastFm[0].userName);
            const track = lastFmResponse?.recenttracks?.track?.[0];
            lastFmData[member.lastFm[0].userName] = track || null;
        } catch (error) {
            console.error(`Failed to fetch Last.fm data for ${member.name}:`, error);
            lastFmData[member.lastFm[0].userName] = null;
        }
    }

    return <MainPage weather={weather} lastFmData={lastFmData} />;
}
