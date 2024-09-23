import { Link } from "react-router-dom";

const CardLG = () => {
  return (
    <div className="hidden lg:block">
      <div className="mx-6 lg:mx-[85px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-[#0F0865]">
        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">8.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg ">
              July 2024
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">9.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg ">
              July 2024
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">8.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg">
              July 2024
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">8.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg">
              July 2024
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">8.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg">
              July 2024
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F0] p-5 rounded-xl w-full">
          <div>
            <p className="text-2xl md:text-3xl font-black pb-3">8.3%</p>
          </div>
          <div>
            <Link
              className="font-goudos font-bold text-sm md:text-base lg:text-lg hover:underline"
              to="/"
            >
              Unemployment rate (smoothed and seasonally adjusted)
            </Link>
          </div>
          <div>
            <p className="font-goudos pt-6 text-sm md:text-base lg:text-lg">
              July 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLG;
