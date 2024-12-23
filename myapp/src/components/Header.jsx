// src/components/Navbar.jsx
import { FaBell, FaSearch, FaUserCircle, FaEnvelope, FaQuestionCircle, FaEllipsisH } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 w-full">
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full h-14 pl-12 pr-4 border rounded-xl focus:outline-none"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-6 ml-4">
        <FaEnvelope className="text-gray-700 text-2xl cursor-pointer" />
        <FaBell className="text-gray-700 text-2xl cursor-pointer" />
        <FaQuestionCircle className="text-gray-700 text-2xl cursor-pointer" />
        <FaEllipsisH className="text-gray-700 text-2xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-gray-700 text-3xl cursor-pointer" />
          <span className="font-semibold">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  );
}
