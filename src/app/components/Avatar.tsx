import React from 'react';
import DiscordStatusComponent from './DiscordStatus';

interface AvatarProps {
  _imgname: string;
  status: any;
}

const AvatarComponent: React.FC<AvatarProps> = ({ _imgname, status }) => {
  return (
    <div className="flex justify-center relative mb-5">
      <img
        className="w-48 h-48 border-4 rounded-3xl z-0"
        src={`/icons/${_imgname}`}
        alt={`${_imgname}`}
      />
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2">
        {status ? (
          <DiscordStatusComponent status={status} />
        ) : (
          <DiscordStatusComponent status="offline" />
        )}
      </div>
    </div>
  );
};

export default AvatarComponent;
