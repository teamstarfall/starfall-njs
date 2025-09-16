export type TeamMember = {
    id: number;
    discord_id: string;
    name: string;
    aka: string;
    tagline: string;
    socials: Social[];
    _imgname: string;
    bg_color: string;
};

export type Site = {
    id: number;
    name: string;
    url: string;
    favicon: string;
    color: string;
};

export type Social = {
    name: string;
    url: string;
};

import { Url } from "next/dist/shared/lib/router/router";
import { Dispatch, SetStateAction } from "react";
import { LanyardData } from "react-use-lanyard";

export type DevMenuProps = {
    showTeamBoxes: boolean;
    showText: boolean;
    showWidgets: boolean;
    showFooter: boolean;
    showBackground: boolean;
    setShowTeamBoxes: Dispatch<SetStateAction<boolean>>;
    setShowDev: Dispatch<SetStateAction<boolean>>;
    setShowText: Dispatch<SetStateAction<boolean>>;
    setShowWidgets: Dispatch<SetStateAction<boolean>>;
    setShowFooter: Dispatch<SetStateAction<boolean>>;
    setShowBackground: Dispatch<SetStateAction<boolean>>;
};

export type AvatarProps = {
    _imgname: string;
    status: LanyardData | undefined;
};

export type WeatherInfo = {
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        }
    ];
    main: {
        temp: number;
    };
    name: string;
    sys: {
        country: string;
    };
    iconUrl: string;
};

export type Track = {
    name: string;
    artist: { "#text": string };
    image: { "#text": string }[];
    url: string;
    "@attr"?: { nowplaying: string };
};

export type MainPageProps = {
    weather: WeatherInfo | null;
    lastFmData: { [key: string]: Track | null };
};

export type TeamBoxProps = {
    member: TeamMember;
    status: LanyardData | undefined;
    lastFm: Track | null;
};

export type SitesComponentProps = {
    site: Site;
};

export type DiscordStatus = {
    discord_status: string;
    discord_user: {
        id: string;
        username: string;
    };
};

export type DiscordStatusProps = {
    status: LanyardData | null;
};

export type LastFmTrackProps = {
    track: Track | null;
};
