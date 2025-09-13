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

    const generateSunConfig = (name: string, color: string, size: number, force: number, smooth: number, zIndex: number) => {
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
                    blur: 100, // Adjust the blur level
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
                    position: { x: 50, y: 50 },
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
                {generateSunConfig("sun1", "rgba(255, 255, 255, 1)", 50, 950, 10, -501)}
                {generateSunConfig("sun2", "rgba(81, 128, 113, 0.9)", 75, 1200, 10, -502)}
                {generateSunConfig("sun3", "rgba(0, 144, 111, 0.8)", 120, 3000, 10, -503)}
                {generateSunConfig("sun4", "rgba(200, 252, 234, 0.7)", 180, 5000, 10, -504)}
                {generateSunConfig("sun5", "rgba(108, 186, 162, 0.6)", 250, 7000, 10, -505)}
                {generateSunConfig("sun6", "rgba(0, 143, 145, 0.5)", 325, 9000, 10, -506)}
                {generateSunConfig("sun7", "rgba(11, 144, 143, 0.4)", 400, 11000, 10, -507)}
                {generateSunConfig("sun8", "rgba(56, 94, 82, 0.3)", 550, 13000, 10, -508)}
                {generateSunConfig("sun9", "rgba(26, 37, 34, 0.2)", 750, 15000, 10, -509)}
            </div>
        );
    }

    return <></>;
};

export default ParallaxBackground;
