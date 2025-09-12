import { stat } from 'fs/promises';
import React, { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';

interface DiscordStatusProps {
  status: any;
}

const DiscordStatusComponent: React.FC<DiscordStatusProps> = ({ status }) => {
  const [hover, onHover] = useState(false);

  const getState = (state: string) => {
    if (!state) return 'Offline';

    switch (state) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'idle':
        return 'AFK';
      case 'dnd':
        return 'Busy';
    }
  };

  const getBackground = (state: string) => {
    if (!state) return 'from-discord-offline';

    switch (state) {
      case 'online':
        return 'from-discord-online';
      case 'offline':
        return 'from-discord-offline';
      case 'idle':
        return 'from-discord-idle';
      case 'dnd':
        return 'from-discord-dnd';
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${getBackground(status.discord_status)} to-neutral-600 rounded-full my-2 min-width-100 p-1.5 gap-1 border-2 border-solid`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="flex flex-row gap-1 place-content-center px-1.5">
        <FaDiscord className="text-white font-bold" />
        {
          <p className="text-[16px] text-white leading-none font-bold">
            {hover
              ? status.discord_user.username
              : getState(status.discord_status)}
          </p>
        }
      </div>
    </div>
  );
};

export default DiscordStatusComponent;
