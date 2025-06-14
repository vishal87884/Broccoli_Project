import { forwardRef, useState, useImperativeHandle } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import image from "../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
const Sidebar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isHomePageClick, setIsHomePageClick] = useState(false);
  const [isAboutPageClick, setIsAboutPageClick] = useState(false);

  // Allow parent to control open/close via ref
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));
  const homePage = [
    "Home Pages 1",
    "Home Pages 2",
    "Home Pages 3",
    "Home Pages 4",
    "Home Pages 5",
    "Home Pages 6",
    "Home Pages 7",
    "HOme Pages 8",
  ];
  const dropDown =
    "flex flex-col transform transition-all duration-500 ease-in-out overflow-hidden origin-top flex flex-col transform transition-all duration-500 ease-in-out overflow-hidden origin-top";
  const about = ["About", "Service", "Portfolio", "Team"];
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-lg transform transition-transform duration-500 ease-in-out overflow-y-auto custom-scrollbar  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <img src={image} alt="Logo" className="w-24" />
          <RxCross2
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <hr className="w-10/12 border-t-1 border-color mx-auto" />

        {/* Search Bar */}
        <div
          className={`flex justify-between items-center border p-2 mx-4 my-4 ${
            isClick ? "border-green-600" : "border-color"
          }`}
          onClick={() => setIsClick(true)}
        >
          <input
            className="px-2 focus:outline-0 w-full"
            type="search"
            placeholder="Search..."
          />
          <CiSearch className="ml-2 text-xl text-gray-600" />
        </div>

        {/* Menu */}
        <div className="p-4 space-y-4">
          <div>
            <div
              className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer "
              onClick={() => {
                setIsHomePageClick(!isHomePageClick);
              }}
            >
              <p className="hover:text-green-500 transition-colors cursor-pointer">
                Home{" "}
              </p>

              <div>{isHomePageClick ? <FaMinus /> : <FaPlus />}</div>
            </div>
            <div
              className={`${dropDown} ${
                isHomePageClick
                  ? "px-4 py-2 max-h-96 opacity-100 translate-y-0 scale-100"
                  : "max-h-0 opacity-0 -translate-y-2 scale-95"
              }`}
            >
              {homePage.map((item, index) => (
                <p key={index} className="my-2">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div
              className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer"
              onClick={() => {
                setIsAboutPageClick(!isAboutPageClick);
              }}
            >
              <p>ABOUT </p>

              <div>{isAboutPageClick ? <FaMinus /> : <FaPlus />}</div>
            </div>
            <div
              className={`${dropDown} ${
                isAboutPageClick
                  ? "px-4 py-2 max-h-96 opacity-100 translate-y-0 scale-100"
                  : "max-h-0 opacity-0 -translate-y-2 scale-95"
              }`}
            >
              {about.map((value, key) => (
                <p key={key} className="my-2">
                  {value}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer">
            <p>SHOP </p>

            <FaPlus />
          </div>
          <div></div>
          <div className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer">
            <p>NEWS </p>

            <FaPlus />
          </div>
          <div className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer">
            <p>PAGES </p>

            <FaPlus />
          </div>
          <div className="flex justify-between items-center  hover:scale-102 transition-all duration-300 hover:text-green-500  cursor-pointer">
            <p>CONTACT</p>
          </div>
        </div>
        <hr className="w-10/12 border-t-1 border-color mx-auto" />
        <div className="flex justify-between my-4 flex-col gap-4 p-4">
          <div className="flex items-center  hover:text-green-500  transition-all cursor-pointer hover:translate-x-2  duration-500 ease-in-out">
            <div className="p-3 me-1 border-2 border-color">
              <FaRegUser />
            </div>
            <div className="p-3 me-1 text-center">
              <p>My Account</p>
            </div>
          </div>
          <div className="flex items-center  hover:text-green-500  transition-all cursor-pointer hover:translate-x-2  duration-500 ease-in-out">
            <div className="p-3 me-1 border-2 border-color">
              <CiHeart />
            </div>
            <div className="p-3 me-1 text-center">
              <p>WishList</p>
            </div>
          </div>
          <div className="flex items-center  hover:text-green-500  transition-all cursor-pointer hover:translate-x-2  duration-500 ease-in-out">
            <div className="p-3 me-1 border-2 border-color">
              <FaShoppingCart />
            </div>
            <div className="p-3 me-1 text-center">
              <p>Shopping Cart</p>
            </div>
          </div>
        </div>
        <hr className="w-10/12 border-t-1 border-color mx-auto" />

        <div className="flex justify-between p-4 my-4">
          <div className="p-3 me-1 border-2 border-color icon-bg-color">
            <FaFacebookF />
          </div>
          <div className="p-3 me-1 border-2 border-color icon-bg-color">
            <FaTwitter />
          </div>
          <div className="p-3 me-1 border-2 border-color icon-bg-color">
            <FaLinkedin />
          </div>
          <div className="p-3 me-1 border-2 border-color icon-bg-color">
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
