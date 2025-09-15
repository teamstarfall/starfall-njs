
import { useRef } from "react";
import Image from "next/image";
import { SitesComponentProps } from "../types";
import { url } from "inspector";

const SitesComponent: React.FC<SitesComponentProps> = ({site}) => {
    const imgRef = useRef<HTMLImageElement>(null);
    
    return (
        <div className="">
            <a href={site.url} target="_blank" rel="noopener noreferrer">
                <div 
                    className={`flex flex-row gradient items-center min-w-[140px] pl-2 h-10 rounded-full before:rounded-full group hover:border-4 gap-2`}
                    style={{backgroundColor: site.color}}
                >
                        <Image
                            ref={imgRef}
                            src={site.favicon} alt={"favicon"} height={40} width={40}
                            className="w-7 h-7 border-2 solid drop-shadow-md"
                        />
                    <p className="font-bold">{site.name}</p>
                </div>
            </a>
        </div>
    );
}

export default SitesComponent;