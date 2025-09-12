import React from 'react';
import LastFmComponent from './LastFmTrack';
import SocialBarComponent from './SocialBar';
import AvatarComponent from './Avatar';

interface TeamBoxProps {
  item: any;
  presences: any;
}

const TeamBox: React.FC<TeamBoxProps> = ({ item, presences }) => {
  const matchingPresence: any = presences?.find(
    (presence: { data: { discord_user: { id: any } } }) =>
      presence.data.discord_user.id === item.discord_id
  );
  const presence = matchingPresence?.data;

  return (
    <div
      style={{ backgroundImage: item.bg_color }}
      className="flex flex-row px-10 py-6 m-4 border-2 border-white rounded-2xl shadow-[0_35px_35px_rgba(0,0,0,0.25)] gap-5"
      key={item.id}
    >
      <div className="place-content-center min-w-48">
        <AvatarComponent _imgname={item._imgname} status={presence} />
        <span className="nameArea flex-row">
          <p className="text-[32px] text-white font-bold text-center leading-9">
            {item.name}
          </p>
          <p className="text-[16px] text-white font-thin text-center">
            "{item.tagline}"
          </p>
        </span>
      </div>
      <span className="flex-row align-top">
        <div>
          <LastFmComponent
            userName={item.lastFm[0].userName}
            apiKey={item.lastFm[0].api_key}
          />
          <p className="text-[18px] font-bold text-center text-white mt-3">
            Links/Socials
          </p>
          <div className="grid grid-cols-2 gap-1 justify-items-center">
            {item.socials.map((social: any) => {
              return <SocialBarComponent name={social.name} url={social.url} />;
            })}
          </div>
        </div>
      </span>
    </div>
  );
};

export default TeamBox;
