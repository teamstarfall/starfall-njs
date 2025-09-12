import React, { useEffect, useState } from "react";

interface WeatherInfo {
    weather: [{
        main: string;
        description: string;
        icon: string;
    }];
    main: {
        temp: number;
    }
    name: string;
    sys: {
        country: string;
    }
    iconUrl: string;
}

const WidgetBarComponent = () => {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState<WeatherInfo | null>(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval)
    }, []);
 
    useEffect(() => {
        const getWeatherInfo = async () => {
            try {
                const response = await fetch("/api/weather")
                const data = await response.json();
                setWeather(data);
            }
            catch (error) {
                console.log('Error fetching Weather info: ', error);
            }
        };

        getWeatherInfo();
    }, []);
    
    return (
        <div
            className="flex flex-row justify-between items-center p-5 max-w-[900px] max-h-[100px] mx-auto w-full py-6 m-4 bg-gray-800 border-2 border-white rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
        >
            <div className="flex flex-row items-center text-white">
                <span className="w-20 h-20">
                    {weather && 
                    <img 
                        src={weather?.iconUrl}
                        alt="weather?.weather[0].description"
                    />}
                </span>
                <div>
                    <p className="font-bold">{weather ? `${weather.name}, ${weather?.sys.country}` : "--"}</p>
                    <p>{weather?.main.temp || "--"}°F | {weather?.weather[0].description || "--"}</p>
                </div>
            </div>
            <div className="text-white text-right">
                <p>{time.toLocaleString("en-US", { timeZone: "America/Denver" })}</p>
                <p className="font-bold">Mountain Standard Time (MST), UTC-7:00</p>
                {/* <Clock value={time}/> */}
            </div>
        </div>
    );
}

export default WidgetBarComponent;