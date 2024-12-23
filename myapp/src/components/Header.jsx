import { FaSearch, FaUserCircle, FaEllipsisH } from 'react-icons/fa';
import { LuMessageSquareMore } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center justify-between w-full space-x-6">
        <div className="relative w-4/5">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full h-14 pl-12 pr-4 border rounded-xl focus:outline-none"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        <div className="flex items-center space-x-6">
          <IoMdHelpCircleOutline className="text-gray-700 text-2xl cursor-pointer" />
          <LuMessageSquareMore className="text-gray-700 text-2xl cursor-pointer" />
          <FaEllipsisH className="text-gray-700 text-2xl cursor-pointer" />
          <IoIosNotificationsOutline className="text-gray-700 text-2xl cursor-pointer" />
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-gray-700 text-3xl cursor-pointer" />
            <span className="font-semibold">Adeline H. Dancy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
