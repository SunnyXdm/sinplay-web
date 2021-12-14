import { useState } from "react";

const RoomCard = ({ roomName, roomCover }) => {
  const [isRoomPlaying, setIsRoomPlaying] = useState(true);
  const playRoom = () => {
    setIsRoomPlaying(!isRoomPlaying);
  };
  return (
    <div className="w-32">
      <div className="bg-cardbg-black rounded-lg shadow-lg max-w-32 h-48">
        <div className="w-32 h-32">
          <img
            className="object-cover object-center h-full w-full"
            src={roomCover}
            alt=""
          ></img>
        </div>
        <div
          className="text-center font-popins text-lg text-white select-none p-1"
          onClick={playRoom}
        >
          <p className="w-28">{roomName}</p>
          {isRoomPlaying ? (
            <div className="flex justify-center">
              <div className="w-7/12 h-5 bg-gray-500 rounded-full">
                <div className="text-white text-sm flex items-center justify-center">
                  Join
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-7/12 h-5 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full">
                <div className="text-white text-sm flex items-center justify-center">
                  Playing
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
