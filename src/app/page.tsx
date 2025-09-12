'use client';
import './css/main.css';
import { useLanyard } from 'react-use-lanyard';
import members from './statics/members'
import TeamBox from './components/TeamBox';
import ParallaxBackground from './components/Background';
import DevMenu from './components/DevMenu';
import { useState } from 'react';
import { IoSettings } from 'react-icons/io5';
import WidgetBarComponent from './components/WidgetBar';

export default function Home() {

  const [showDev, setShowDev] = useState(false);
  const [showTeamBoxes, setShowTeamBoxes] = useState(true);
  const [showText, setShowText] = useState(true);
  const [showWidgets, setShowWidgets] = useState(true);
  const [showBackground, setShowBackground] = useState(true);

  const lanyard = useLanyard({
    userId: members.map((member) => member.discord_id)
  })

  return (
    <div className='mt-16'>
      <span className={`${showBackground ? `opacity-100` : `opacity-0`}`}>
        <ParallaxBackground/>
      </span>
      <div className='z-10'>
        <span className={`${showText ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-[72px] text-center text-white">Team Starfall</h1>
          <p className="text-[24px] text-center text-white">
            page under construction :3
          </p>
        </span>
         <span className={`${showWidgets ? 'opacity-100' : 'opacity-0'} `}>
          <div className="flex justify-center ">
            <WidgetBarComponent/>
          </div>
        </span>
        <span className={`${showTeamBoxes ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-row justify-center gap-10">
            {members.map((member) => (
              <TeamBox item={member} presences={lanyard.data} />
            ))}
          </div>
        </span>
        {showDev && process.env.environment !== 'production' ? (
          <DevMenu
            setShowDev={setShowDev}
            showTeamBoxes={showTeamBoxes}
            showWidgets={showWidgets}
            showBackground={showBackground}
            setShowTeamBoxes={setShowTeamBoxes}
            showText={showText}
            setShowText={setShowText}
            setShowWidgets={setShowWidgets}
            setShowBackground={setShowBackground}
          />
        ) : (
          <IoSettings
            className="absolute top-0 text-[36px] text-white m-2"
            onClick={() => setShowDev(true)}
          />
        )}
      </div>
    </div>
  );
}
