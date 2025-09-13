import React, { useEffect, useState } from "react";
import { WeatherInfo } from "../types";
import Image from "next/image";

const WidgetBarComponent = ({ weather }: { weather: WeatherInfo | null }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row justify-between items-center p-5 max-w-[900px] max-h-[100px] mx-auto w-full py-6 m-4 bg-gray-800 border-2 border-white rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="flex flex-row items-center text-white">
                <span className="w-20 h-20">
                    {weather && (
                        <Image src={weather?.iconUrl} alt="weather?.weather[0].description" height={64} width={64} />
                    )}
                </span>
                <div>
                    <p className="font-bold">{weather ? `${weather.name}, ${weather?.sys.country}` : "--"}</p>
                    <p>
                        {Math.floor(weather?.main.temp || 0)}°F | {weather?.weather[0].description || "--"}
                    </p>
                </div>
            </div>
            <div className="text-white text-right">
                <p>{time.toLocaleString("en-US", { timeZone: "America/Denver" })}</p>
                <p className="font-bold">Mountain Standard Time (MST), UTC-7:00</p>
                {/* <Clock value={time}/> */}
            </div>
        </div>
    );
};

export default WidgetBarComponent;
