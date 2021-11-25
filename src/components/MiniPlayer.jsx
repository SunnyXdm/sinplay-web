import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { useState } from "react";

const MiniPlayer = ({ openPlayer }) => {
  const [miniPlayPause, setminiPlayPause] = useState(false);
  const PlayPause = () => {
    setminiPlayPause(!miniPlayPause);
  };
  return (
    <div className="">
      <div>
        <div className="absolute bottom-0 w-full h-10">
          <div className="text-center">
            <div class="text-sm select-none text-white font-popins">Cradle</div>
            <div class="text-xs select-none text-custom-graytext font-popins">
              Sub Urban
            </div>
          </div>
        </div>
        <div
          className="absolute left-2 bottom-2 content-center flex items-center justify-center"
          onClick={PlayPause}
        >
          {miniPlayPause ? (
            <FaPlayCircle
              style={{ color: "white" }}
              size={30}
              onClick={PlayPause}
            />
          ) : (
            <FaPauseCircle
              style={{ color: "white" }}
              size={30}
              onClick={PlayPause}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
