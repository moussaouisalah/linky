import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="page__container">
      <Navbar />
      <div>
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
              Create <span className="text-blue-600">Links</span> And{" "}
              <span className="text-blue-600">Track</span> Your Users' Details
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/dashboard"
              className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-xl px-10 py-5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
