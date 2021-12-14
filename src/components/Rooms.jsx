import RoomCard from "./RoomCard"

const Rooms = () => {
 return (
  <div className="p-2 w-screen rounded-lg overflow-hidden">
  <ul className="flex justify-start gap-2 overflow-scroll sm:grid-cols-3 md:grid-cols-6">
   <li className="">
       <RoomCard roomName="Zoldycks" roomCover="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210621_202238.jpg" />
   </li>
   <li className="">
       <RoomCard roomName="Zoldycks" roomCover="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210621_214125.jpg" />
   </li>
   <li className="">
       <RoomCard roomName="Zoldycks" roomCover="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210621_202238.jpg" />
   </li>
   <li className="">
       <RoomCard roomName="Zoldycks" roomCover="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210621_202238.jpg" />
   </li>
   <li className="">
       <RoomCard roomName="Zoldycks" roomCover="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210621_202238.jpg" />
   </li>
  </ul>  
 </div>
 )
}

export default Rooms
