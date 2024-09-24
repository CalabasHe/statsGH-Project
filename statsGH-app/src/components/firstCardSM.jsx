import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardSM = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8; // Total number of slides

  const breakpoints = [
    { minWidth: 320, maxWidth: 375, factor: 115 },
    { minWidth: 376, maxWidth: 414, factor: 112 },
    { minWidth: 415, maxWidth: 540, factor: 192 },
    { minWidth: 541, maxWidth: 768, factor: 60 },
    { minWidth: 769, maxWidth: 912, factor: 55 },
    { minWidth: 913, maxWidth: 1024, factor: 100 },
    { minWidth: 1025, maxWidth: 1280, factor: 300 },
  ];

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const updateTranslateX = () => {
      const windowWidth = window.innerWidth;
      const matchingBreakpoint =
        breakpoints.find(
          (bp) => windowWidth >= bp.minWidth && windowWidth <= bp.maxWidth
        ) || breakpoints[breakpoints.length - 1];

      setTranslateX(-currentSlide * matchingBreakpoint.factor);
    };

    updateTranslateX();
    window.addEventListener("resize", updateTranslateX);
    return () => window.removeEventListener("resize", updateTranslateX);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };
  return (
    <div className="sm:block md:hidden lg:hidden">
      <div className="ml-7 mt-5 overflow-hidden">
        <div
          style={{ transform: `translateX(${translateX}px)` }}
          className=" XR main-container w-[1120px] h-[200px] rounded-[15px] relative mx-auto my-0"
        >
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-0">
            <div className="flex w-[123px] flex-col gap-[3px] items-start shrink-0 flex-nowrap relative z-[1]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[2]">
                8.3 %
              </span>
              <Link to="/">
                <span className="flex w-[123px] h-[88px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left z-[3]">
                  Unemployment rate (smoothed and seasonally adjusted)
                </span>
              </Link>

              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[4]">
                July 2024
              </span>
            </div>
          </div>
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-[192px] z-[5]">
            <div className="flex w-[123px] h-[144px] flex-col gap-[6px] items-start shrink-0 flex-nowrap relative z-[6]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[7]">
                10 553 341
              </span>
              <span className="flex w-[123px] h-[80px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left overflow-hidden z-[8]">
                Population
                <br />
                <br />
                <br />
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[9]">
                July 2024
              </span>
            </div>
          </div>
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-[384px] z-10">
            <div className="flex w-[123px] flex-col gap-[3px] items-start shrink-0 flex-nowrap relative z-[11]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[12]">
                2.6 %
              </span>
              <span className="flex w-[123px] h-[88px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left z-[13]">
                Inflation rate according to CPI
                <br />
                <br />
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[14]">
                July 2024
              </span>
            </div>
          </div>
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-[576px] z-[15]">
            <div className="flex w-[123px] flex-col gap-[3px] items-start shrink-0 flex-nowrap relative z-[16]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[17]">
                1.7 %
              </span>
              <span className="flex w-[123px] h-[88px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left z-[18]">
                Inflation rate according to CPIF
                <br />
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[19]">
                July 2024
              </span>
            </div>
          </div>
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-[768px] z-20">
            <div className="flex w-[123px] flex-col gap-[3px] items-start shrink-0 flex-nowrap relative z-[21]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[22]">
                -0.3 %
              </span>
              <span className="flex w-[123px] h-[88px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left z-[23]">
                GDP, change in volume (seasonally adjusted)
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[24]">
                July 2024
              </span>
            </div>
          </div>
          <div className="flex w-[160px] h-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[8px] items-center flex-nowrap bg-[#faf9f0] rounded-[15px] absolute top-0 left-[960px] z-[25]">
            <div className="flex w-[123px] flex-col gap-[3px] items-start shrink-0 flex-nowrap relative z-[26]">
              <span className="h-[36px] self-stretch shrink-0 basis-auto font-['Poppins'] text-[24px] font-bold leading-[36px] text-[#000] relative text-left whitespace-nowrap z-[27]">
                0.7 %
              </span>
              <span className="flex w-[123px] h-[88px] justify-start items-start self-stretch shrink-0 font-goudos text-[18px] font-normal leading-[21.604px] text-[#000] relative text-left z-[28]">
                Growth rate, lending to households
                <br />
              </span>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-goudos text-[14px] font-normal leading-[16.803px] text-[#000] relative text-left whitespace-nowrap z-[29]">
                July 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-10  ">
        {/* button for previous slide */}
        {currentSlide > 0 && (
          <svg
            className="absolute left-0 top-[180px]"
            onClick={prevSlide}
            width="152"
            height="148"
            viewBox="0 0 152 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_26_66)">
              <rect
                x="44"
                y="36"
                width="64"
                height="64"
                rx="32"
                fill="#FFDD00"
                shape-rendering="crispEdges"
              />
              <path
                d="M81.0756 79.9325C81.4271 79.5809 81.6246 79.1041 81.6246 78.6069C81.6246 78.1097 81.4271 77.6329 81.0756 77.2813L71.7944 68L81.0756 58.7188C81.4172 58.3651 81.6062 57.8915 81.6019 57.3999C81.5976 56.9083 81.4004 56.438 81.0528 56.0903C80.7051 55.7427 80.2349 55.5455 79.7433 55.5412C79.2516 55.537 78.778 55.726 78.4244 56.0675L67.8175 66.6744C67.466 67.026 67.2685 67.5028 67.2685 68C67.2685 68.4972 67.466 68.974 67.8175 69.3256L78.4244 79.9325C78.776 80.284 79.2528 80.4815 79.75 80.4815C80.2472 80.4815 80.724 80.284 81.0756 79.9325Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_26_66"
                x="0"
                y="-4"
                width="152"
                height="152"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_26_66"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_26_66"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_26_66"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
        {/* button for next slide */}
        {currentSlide < totalSlides - 1 && (
          <svg
            className="absolute right-0 top-[180px]"
            onClick={nextSlide}
            width="152"
            height="148"
            viewBox="0 0 152 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_26_66)">
              <rect
                x="44"
                y="36"
                width="64"
                height="64"
                rx="32"
                fill="#FFDD00"
                shape-rendering="crispEdges"
              />
              <path
                d="M70.9244 56.0675C70.5729 56.4191 70.3754 56.8959 70.3754 57.3931C70.3754 57.8903 70.5729 58.3671 70.9244 58.7187L80.2056 68L70.9244 77.2812C70.5828 77.6349 70.3938 78.1085 70.3981 78.6001C70.4024 79.0917 70.5996 79.562 70.9472 79.9097C71.2949 80.2573 71.7651 80.4545 72.2568 80.4588C72.7484 80.463 73.222 80.274 73.5756 79.9325L84.1825 69.3256C84.534 68.974 84.7315 68.4972 84.7315 68C84.7315 67.5028 84.534 67.026 84.1825 66.6744L73.5756 56.0675C73.224 55.716 72.7472 55.5185 72.25 55.5185C71.7528 55.5185 71.276 55.716 70.9244 56.0675Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_26_66"
                x="0"
                y="-4"
                width="152"
                height="152"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="4"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_26_66"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_26_66"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_26_66"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default CardSM;
