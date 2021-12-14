import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { RiPlayMiniLine } from "react-icons/ri";
import { RiPauseLine } from "react-icons/ri";

import { useState } from "react";

const MiniPlayer = ({ openPlayer }) => {
  const [miniPlayPause, setminiPlayPause] = useState(false);
  const PlayPause = () => {
    setminiPlayPause(!miniPlayPause);
  };
  return (
    <div>
      <div className="absolute w-full flex justify-center bottom-2 ">
        <div className="grid grid-cols-3 content-center gap-0">
          <RiPlayMiniLine style={{ color: "transparent" }} size={2} />
        </div>
        <li className="col-span-2 ">
          <div className="text-center">
            <div className="text-sm select-none text-white font-popins">
              Cradle
            </div>

            <div className="text-xs select-none text-custom-graytext font-popins">
              Sub Urban
            </div>
          </div>
        </li>
      </div>
      <div className="absolute w-full flex justify-center bottom-2">
        <div className="grid grid-cols-3 content-center gap-32">
          {miniPlayPause ? (
            <RiPlayMiniLine
              style={{ color: "white" }}
              size={28}
              onClick={PlayPause}
            />
          ) : (
            <RiPauseLine
              style={{ color: "white" }}
              size={28}
              onClick={PlayPause}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
