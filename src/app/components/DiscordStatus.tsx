import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { DiscordStatusProps } from "../types";

const DiscordStatusComponent: React.FC<DiscordStatusProps> = ({ status }) => {
    const [hover, onHover] = useState(false);

    const getState = (state: string) => {
        switch (state) {
            case "online":
                return "Online";
            case "offline":
                return "Offline";
            case "idle":
                return "AFK";
            case "dnd":
                return "Busy";
        }
    };

    const statusClasses = {
        online: "from-[#23a55a]",
        offline: "from-[#80848e]",
        idle: "from-[#f0b232]",
        dnd: "from-[#f23f43]",
    };

    const backgroundClass = status ? statusClasses[status.discord_status] : "from-discord-offline";

    return (
        <div
            className={`bg-gradient-to-r ${backgroundClass} to-neutral-600 rounded-full my-2 min-width-100 p-1.5 gap-1 border-2 border-solid`}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            <div className="flex flex-row gap-1 place-content-center px-1.5">
                <FaDiscord className="text-white font-bold" />
                {
                    <p className="text-[16px] text-white leading-none font-bold">
                        {hover ? status?.discord_user.username : getState(status?.discord_status || "offline")}
                    </p>
                }
            </div>
        </div>
    );
};

export default DiscordStatusComponent;
