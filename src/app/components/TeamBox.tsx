import React from "react";
import LastFmComponent from "./LastFmTrack";
import SocialBarComponent from "./SocialBar";
import AvatarComponent from "./Avatar";

import { Social, TeamBoxProps } from "../types";

const TeamBox: React.FC<TeamBoxProps> = ({ member, status, lastFm }) => {
    return (
        <div
            style={{ backgroundImage: member.bg_color }}
            className="flex flex-row px-10 py-6 m-4 border-2 border-white rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] gap-5"
            key={member.id}
        >
            <div className="place-content-center min-w-48">
                <AvatarComponent _imgname={member._imgname} status={status} />
                <span className="nameArea flex-row">
                    <p className="text-[32px] text-white font-bold text-center leading-9">{member.name}</p>
                    <p className="text-[16px] text-white font-thin text-center">&quot;{member.tagline}&quot;</p>
                </span>
            </div>
            <span className="flex-row align-top">
                <div>
                    <LastFmComponent track={lastFm} />
                    <p className="text-[18px] font-bold text-center text-white mt-3">Links/Socials</p>
                    <div className="grid grid-cols-2 gap-1 justify-items-center">
                        {member.socials.map((social: Social) => {
                            return (
                                <SocialBarComponent
                                    key={`${member.id}-${social.name}`}
                                    name={social.name}
                                    url={social.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </span>
        </div>
    );
};

export default TeamBox;
