import { Link } from "react-router-dom";

type Props = {
  hideGetStarted?: boolean;
};

const Navbar = ({ hideGetStarted }: Props) => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 h-16 rounded-b dark:bg-gray-800 flex items-center">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Linky
          </span>
        </Link>
        <div className="flex justify-between items-center">
          <ul className="flex space-x-2 sm:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block rounded text-gray-400 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block rounded text-gray-400 hover:text-white"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className={"hidden sm:flex " + (hideGetStarted && "invisible")}>
          <Link
            to="/dashboard"
            className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
