import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ParkingSquareIcon from "./Icons/ParkingSquareIcon";

const Header = () => {
  return (
    <Router>
      <header className="flex items-center justify-between w-full p-6 bg-white  shadow-md">
        <div className="flex items-center space-x-2">
          <ParkingSquareIcon className="w-8 h-8 text-gray-800 " />
          <h1 className="text-2xl font-bold text-gray-800 ">Smart Parking</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link to="https://www.google.com/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>
      </header>
    </Router>
  );
};

export default Header;
