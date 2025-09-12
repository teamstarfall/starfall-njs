import React from 'react';

import { RxDiscordLogo } from 'react-icons/rx';
import { LuTwitter } from 'react-icons/lu';
import { RiBlueskyLine } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiKofi } from 'react-icons/si';
import { IoIosGlobe } from 'react-icons/io';
import { adjustBrightness } from '../utils';

interface SocialBarProps {
  name: string;
  url: string;
}

const SocialBarComponent: React.FC<SocialBarProps> = ({ name, url }) => {
  const colors: Record<string, string> = {
    website: '#06b6d4',
    discord: '#5765f2',
    twitter: '#1ca0f1',
    bluesky: '#1185fe',
    youtube: '#ff0033',
    twitch: '#9146ff',
    github: '#2b3137',
    'ko-fi': '#ff5a16'
  };

  const bgColor = colors[name.toLowerCase()] || '#000000';
  const bgGradient = `linear-gradient(${bgColor}, ${adjustBrightness(bgColor, 1.5)})`;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'website': {
        return <IoIosGlobe className="text-white" />;
      }
      case 'Discord': {
        return <RxDiscordLogo />;
      }
      case 'twitter': {
        return <LuTwitter />;
      }
      case 'bluesky': {
        return <RiBlueskyLine />;
      }
      case 'youtube': {
        return <FaYoutube />;
      }
      case 'twitch': {
        return <FaTwitch />;
      }
      case 'github': {
        return <FaGithub />;
      }
      case 'ko-fi': {
        return <SiKofi />;
      }
    }
  };

  return (
    <div
      style={{
        '--startGradient': `linear-gradient(${bgColor}, ${bgColor})`,
        '--endGradient': `${bgGradient}`
      } as React.CSSProperties}
      className={`gradient w-[140px] h-10 rounded-full before:rounded-full border-2 solid group hover:border-4`}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <div
          style={{ fontSize: '25px' }}
          className="flex justify-center h-full size items-center text-white gap-2"
        >
          {getIcon(name)}
          <p className="text-[14px] text-left text-white font-bold">{name}</p>
        </div>
      </a>
    </div>
  );
};

export default SocialBarComponent;
