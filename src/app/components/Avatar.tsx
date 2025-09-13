import React from "react";
import DiscordStatusComponent from "./DiscordStatus";
import Image from "next/image";
import { AvatarProps } from "../types";

const AvatarComponent: React.FC<AvatarProps> = ({ _imgname, status }) => {
    return (
        <div className="flex justify-center relative mb-5">
            <Image
                width={500}
                height={500}
                className="w-48 h-48 border-4 border-white rounded-3xl z-0"
                src={`/icons/${_imgname}`}
                alt={`${_imgname}`}
            />
            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2">
                {status ? <DiscordStatusComponent status={status} /> : <DiscordStatusComponent status={null} />}
            </div>
        </div>
    );
};

export default AvatarComponent;
