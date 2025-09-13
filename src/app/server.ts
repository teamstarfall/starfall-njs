import "server-only";

export async function fetchWeather() {
    const cityId = 5586437;
    const openWeatherApiKey = process.env.OPEN_WEATHER_API_KEY;
    const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${openWeatherApiKey}&units=Imperial`;

    const res = await fetch(openWeatherUrl, {
        next: { revalidate: 600 },
    });
    const data = await res.json();

    if (res.ok) {
        return {
            weather: data.weather,
            main: data.main,
            name: data.name,
            sys: data.sys,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
    }

    return null;
}

export async function fetchLastfm(username: string | null) {
    let lastFmApiKey = null;
    switch (username) {
        case "angelolz":
            lastFmApiKey = process.env.LASTFM_API_KEY_ANGEL;
            break;
        case "azuretst":
            lastFmApiKey = process.env.LASTFM_API_KEY_JOSH;
            break;
        default:
            throw new Error("Invalid username.");
    }

    const lastFmUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${lastFmApiKey}&format=json`;

    try {
        const res = await fetch(lastFmUrl, {
            next: { revalidate: 60 },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from Last.fm:", error);
        throw new Error("Error fetching data from Last.fm");
    }
}
