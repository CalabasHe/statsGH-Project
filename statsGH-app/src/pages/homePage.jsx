import Header from "../components/header.jsx";
import Cardd from "../components/card.jsx";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <hr className="mt-10 mb-10" />

      <Cardd />
      <hr className="mt-10 lg:ml-[85px] lg:mr-[85px] " />
    </div>
  );
};

export default Home;
