
import { useRef } from "react";
import Image from "next/image";
import { SitesComponentProps } from "../types";
import { url } from "inspector";
import { adjustBrightness } from "../utils";

const SitesComponent: React.FC<SitesComponentProps> = ({site}) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const bgColor = site.color || "rbga(0, 0, 0, 0)";
    const bgGradient = `linear-gradient(${bgColor}, ${adjustBrightness(bgColor, 1.5)})`;
    
    return (
        <div className=""
            style={
                    {
                        "--startGradient": `linear-gradient(${bgColor}, ${bgColor})`,
                        "--endGradient": `${bgGradient}`,
                    } as React.CSSProperties
                }
        >
            <a href={site.url} target="_blank" rel="noopener noreferrer">
                <div 
                    className={`flex flex-row justify-left items-center justify-center gap-2 gradient min-w-[150px] max-w-[250px] h-12 rounded-full before:rounded-full border-2 solid group hover:border-4`}
                    style={{backgroundColor: site.color}}
                >
                        <Image
                            ref={imgRef}
                            src={site.favicon} alt={"favicon"} height={25} width={25}
                            className="flex text-white"
                        />
                    <p className=" text-[14px] text-left text-white font-bold gap-2">{site.name}</p>
                </div>
            </a>
        </div>
    );
}

export default SitesComponent;