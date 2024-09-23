import { Link } from "react-router-dom";

import NavSM from "./nav-sm.jsx";
import NavMD from "./nav-md.jsx";

import logo from "../assets/images/StatsGH-logo.png";
const header = () => {
  return (
    <header className=" subpixel-antialiased mt-5 ml-[20px] mr-[20px] p-2 lg:py-8 md:p-4 px-2 md:px-12 lg:pl-16">
      <NavMD />
      <Link to="/">
        <div className="flex w-[118px] h-[56px] justify-between items-center shrink-0 relative z-[6]">
          <img
            className="w-[56px] h-[56px] shrink-0 bg-cover relative z-[5]"
            src={logo}
            alt="Logo"
          />
          <span className=" h-[17px] pl-3 shrink-0 font-goudos text-[18px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[6]">
            StatsGH
          </span>
        </div>
      </Link>

      <nav>
        <NavSM />
      </nav>
    </header>
  );
};

export default header;
