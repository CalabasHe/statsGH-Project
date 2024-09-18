import { Link } from "react-router-dom";

const navMD = () => {
  return (
    <nav>
      <ul className="hidden md:flex absolute md:top-[100px] lg:top-[130px] links antialiased hover:cursor-pointer md:gap-[10px] lg:gap-[30px]">
        <li className="md-link whitespace-nowrap">
          <Link className="font-goudos text-xl" to="/">
            Finding statistics
          </Link>
        </li>
        <li className="md-link">
          <Link className="font-goudos text-xl" to="/">
            Services
          </Link>
        </li>
        <li className="md-link">
          <Link className="font-goudos text-xl" to="/">
            News
          </Link>
        </li>
        <li className="whitespace-nowrap md-link">
          <Link className="font-goudos text-xl" to="/about">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navMD;
