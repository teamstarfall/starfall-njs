import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type ISourceOptions } from "@tsparticles/engine";

const ParallaxBackground: React.FC<object> = () => {
    const [particlesInit, setParticlesInit] = useState(false);

    const starsConfig: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            fullScreen: {
                enable: true,
                zIndex: -500,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        parallax: {
                            enable: true,
                            force: 100,
                            smooth: 30,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: { enable: false },
                // move: {
                //   direction: MoveDirection.none,
                //   enable: true,
                //   outModes: { default: OutMode.out },
                //   random: false,
                //   speed: 0.1,
                //   straight: false
                // },
                number: {
                    density: { enable: true },
                    value: 100,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    const generateBodyConfig = (name: string, color: string, size: number, force: number, smooth: number, zIndex: number, posx: number, posy: number) => {
        const particleOptions = {
            background: {
                color: "transparent",
            },
            fullScreen: {
                enable: true,
                zIndex: zIndex,
            },
            particles: {
                number: { value: 0 },
                shape: { type: "circle" },
                size: { value: size },
                color: { value: color },
                shadow: {
                    enable: true, // Enable shadow effect
                    color: color, // Color of the shadow
                    blur: 50, // Adjust the blur level
                },
            },
    
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        parallax: {
                            enable: true,
                            force: force,
                            smooth: smooth,
                        },
                    },
                },
            },
            manualParticles: [
                {
                    position: { x: posx, y: posy },
                },
            ],
        };

        return <Particles id={name} options={particleOptions} style={{ filter: "blur(50px)" }} />;
    };

    useEffect(() => {
        // Initialize the particles engine only once
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesInit(true);
        });
    }, []);

    // Render particles only when they are initialized
    if (particlesInit) {
        return (
            <div className="absolute top-0 left-0 w-full h-full z-[-9999]">
                <span>
                    <Particles
                        id="stars"
                        options={starsConfig} // The particles configuration is memoized
                    />
                </span>
                <span>
                    {generateBodyConfig("sun1", "rgba(255, 255, 255, 1)", 50, 15000, 10, -501, 50, 50)}
                    {generateBodyConfig("sun2", "rgba(81, 128, 113, 0.9)", 75, 12500, 10, -502, 50, 50)}
                    {generateBodyConfig("sun3", "rgba(0, 144, 111, 0.8)", 120, 10000, 10, -503, 50, 50)}
                    {generateBodyConfig("sun4", "rgba(200, 252, 234, 0.7)", 180, 7500, 10, -504, 50, 50)}
                    {generateBodyConfig("sun5", "rgba(108, 186, 162, 0.6)", 250, 6000, 10, -505, 50, 50)}
                    {generateBodyConfig("sun6", "rgba(0, 143, 145, 0.5)", 325, 5500, 10, -506, 50, 50)}
                    {generateBodyConfig("sun7", "rgba(11, 144, 143, 0.4)", 400, 5000, 10, -507, 50, 50)}
                    {generateBodyConfig("sun8", "rgba(56, 94, 82, 0.3)", 550, 4500, 10, -508, 50, 50)}
                    {generateBodyConfig("sun9", "rgba(26, 37, 34, 0.2)", 750, 4000, 10, -509, 50, 50)}


                    {generateBodyConfig("planet1", "rgba(14, 46, 71, 1)", 500, 5000, 10, -401, 10, 100)}
                    {generateBodyConfig("planet1bg", "rgba(45, 101, 144, 1)", 505, 5000, 10, -402, 10, 100)}
                    {generateBodyConfig("planet2", "rgba(37, 80, 103, 1)", 200, 5000, 10, -403, 30, 65)}
                    {generateBodyConfig("planet2bg", "rgba(36, 103, 140, 1)", 205, 5000, 10, -404, 30, 65)}
                    {generateBodyConfig("planet2bg", "rgba(36, 103, 140, 1)", 205, 5000, 10, -404, 30, 65)}
                    {generateBodyConfig("earth", "rgba(156, 218, 220, 1)", 10, 250, 10, -405, 73, 25)}
                </span>
                
                
            </div>
        );
    }

    return <></>;
};

export default ParallaxBackground;
