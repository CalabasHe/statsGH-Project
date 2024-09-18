import { useState } from "react";

const NavSM = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="flex absolute right-9 lg:top-[65px] top-10">
        <div className="flex flex-col items-end space-y-4">
          <div className="flex items-center space-x-2">
            <input
              className="hidden lg:block  w-[224px] h-[35px] rounded-3xl border-black border-2 p-1 pl-5 font-goudos"
              placeholder="Search"
              type="text"
            />
            <button className="hidden lg:block  main-container  w-[144px] h-[35px] pt-[11px] pr-[48px] pb-[11px] pl-[48px] gap-[8px] justify-center items-center flex-nowrap bg-[#ffdd00] rounded-[60px] relative mx-auto my-0">
              <div className="w-[47px] h-[22px] shrink-0  text-[18px] font-goudos leading-[21.604px] text-[#000] border-none relative whitespace-nowrap pointer">
                Search
              </div>
            </button>
            <p className="text-lg lg:hidden">Search</p>

            <svg
              className="lg:hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L17.5 17.5M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className="lg:pt-[21px] flex items-center space-x-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <p className="text-lg cursor-pointer">Menu</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 4.5V7.5H22.5V4.5H1.5ZM1.5 10.5V13.5H22.5V10.5H1.5ZM1.5 16.5V19.5H22.5V16.5H1.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 lg:w-3/12 w-3/6 h-full bg-black text-white transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex mt-[70px] mr-3 flex-col items-start p-5 space-y-4">
          <button onClick={toggleMenu} className="self-end">
            Close
          </button>

          <a href="/" className="font-goudos text-lg self-end">
            Finding statistics
          </a>
          <a href="/" className="font-goudos text-lg self-end">
            Services
          </a>
          <a href="/" className="font-goudos text-lg self-end">
            News
          </a>
          <a href="/" className="font-goudos text-lg self-end">
            About us
          </a>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 transition-opacity duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

export default NavSM;
