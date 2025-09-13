import React, { useState, useEffect, useRef } from "react";
import ColorThief, { RGBColor } from "colorthief";
import { adjustBrightness } from "../utils";
import Image from "next/image";
import { LastFmTrackProps } from "../types";

const containerWidth = 232;
const scrollSpeed = 40;

const LastFmTrack: React.FC<LastFmTrackProps> = ({ track }) => {
    const [scroll, setScroll] = useState(false);

    const [bgGradient, setBgGradient] = useState<string>("linear-gradient(to right, #000000, #333333)");
    const [bgHoverGradient, setbgHoverGradient] = useState<string>("linear-gradient(to right, rgba(0,0,0,0), #333333)");

    const textRef = useRef<HTMLInputElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // https://github.com/usenocturne/nocturne-ui/blob/main/src/hooks/useTrackScroll.js
        if (textRef.current) {
            const offsetWidth = textRef.current.offsetWidth;
            const scrollDistance = Math.max(0, offsetWidth - containerWidth);
            const scrollDuration = (scrollDistance / scrollSpeed) * 2;

            textRef.current.style.setProperty("--scroll-duration", `${scrollDuration}s`);
            textRef.current.style.setProperty("--scroll-distance", `-${scrollDistance}px`);

            setScroll(offsetWidth > containerWidth);
        }
    }, [track]);

    const generateGradients = (colors: RGBColor[]) => {
        if (!colors) return;

        const hoverColorString = `linear-gradient(to right, ${adjustBrightness(colors[0].join(","), 1)}, ${adjustBrightness(
            colors[1].join(","),
            1
        )})`;
        const unhoverColorString = `linear-gradient(to right, ${adjustBrightness(
            colors[0].join(","),
            0.5
        )}, ${adjustBrightness(colors[1].join(","), 0.5)})`;

        setBgGradient(hoverColorString);
        setbgHoverGradient(unhoverColorString);
    };

    const extractTrackColors = () => {
        if (!imgRef.current) return;

        const colorThief = new ColorThief();
        const img = imgRef.current;

        if (img.complete) {
            generateGradients(colorThief.getPalette(img, 2));
        } else {
            img.onload = () => {
                generateGradients(colorThief.getPalette(img, 2));
            };
        }
    };

    return (
        <div>
            <p className="text-[18px] font-bold text-center text-white">
                {track?.["@attr"]?.nowplaying ? "Now Playing" : "Recently Played"}
            </p>
            <a href={track ? track.url : "?"} target="_blank" rel="noreferrer">
                <div
                    style={
                        {
                            "--startGradient": `${bgHoverGradient}`,
                            "--endGradient": `${bgGradient}`,
                        } as React.CSSProperties
                    }
                    className={`gradient relative z-10 flex flex-row content-center rounded-full mb-2 p-1.5 w-[300px] h-[55px] gap-2 border-2 border-solid group overflow-hidden drop-shadow-lg outline hover:outline-1 hover:outline-white`}
                >
                    <Image
                        ref={imgRef}
                        src={track ? track.image[2]["#text"] : "/no_art.png"}
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded-full border-2 solid drop-shadow-md"
                        alt="album"
                        onLoad={extractTrackColors}
                    />
                    <div className="content-center">
                        <div className="relative overflow-hidden">
                            <p
                                ref={textRef}
                                className={`text-[18px] text-white leading-[1.25] font-bold whitespace-nowrap drop-shadow-sm ${
                                    scroll ? `animate-scroll` : "truncate"
                                }`}
                            >
                                {track ? track.name : "No Track Available"}
                            </p>
                        </div>
                        <p className="text-[13px] text-slate-100 leading-none font-light italic drop-shadow-sm truncate">
                            {track ? track.artist["#text"] : ""}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default LastFmTrack;
