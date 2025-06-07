import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiBars3BottomLeft } from "react-icons/hi2";
import image from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
      {/* Logo Image */}
      <div className="flex justify-center items-center mb-4 md:mb-0  ">
        <img src={image} alt="Logo" className="w-32 md:w-48" />
      </div>
      <div className="hidden xl:flex items-center justify-center w-full md:w-auto">
        {/* Navigation Links */}
        <ul className="flex items-center space-x-8 text-gray-700 font-semibold">
          <li>Home+</li>
          <li>About+</li>
          <li>Shop+</li>
          <li>News+</li>
          <li>Pages+</li>
          <li>Contact</li>
          <li className="bg-lime-600 py-2 px-4 text-sky-50">Get A QUOTE</li>
        </ul>
      </div>
      {/* Icons */}
      <div className="flex items-center gap-4 mt-2 md:mt-0 md:ml-8">
        <div className="bg-white shadow-md p-3 ">
          <CiSearch className="text-xl" />
        </div>
        <div className="bg-white shadow-md p-3 ">
          <FaRegUser className="text-xl" />
        </div>
        <div className="bg-white shadow-md p-3 ">
          <AiOutlineShoppingCart className="text-xl" />
        </div>
        <div className="bg-white shadow-md p-3 xl:hidden ">
          <HiBars3BottomLeft className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
