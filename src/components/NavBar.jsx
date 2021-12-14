import { RiHomeLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { useState } from "react";
const NavBar = () => {
    let buttonSize = 26
  const [hi, setminiPlayPause] = useState(false);
  return (
    <div className="absolute w-full flex justify-center bottom-14">
      <div className="grid grid-cols-3 content-center gap-32">
        <RiHomeLine style={{ color: "white" }} size={buttonSize} />
        <RiSearchLine style={{ color: "white" }} size={buttonSize} />
        <RiUser3Line style={{ color: "white" }} size={buttonSize} />
      </div>
    </div>
  );
};

export default NavBar;
