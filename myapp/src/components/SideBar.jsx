import { LayoutDashboard, LifeBuoy, Settings, ChartPie, BookMarked, Users } from "lucide-react";
import logo from "../assets/logo1.png";

export default function Sidebar() {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex items-center">
                    <img src={logo} className="w-36" alt="Logo" />
                </div>

                <ul className="flex-1 px-4">
                    <SidebarItem icon={<LayoutDashboard size={24} />} text="Dashboard" />
                    <SidebarItem icon={<Users size={24} />} text="Students" active />
                    <SidebarItem icon={<BookMarked size={24} />} text="Chapter" />
                    <SidebarItem icon={<LifeBuoy size={24} />} text="Help" />
                    <SidebarItem icon={<ChartPie size={24} />} text="Reports" />
                    <SidebarItem icon={<Settings size={24} />} text="Settings" />
                </ul>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    return (
        <li
            className={`relative flex items-center py-3 px-4 my-2 rounded-md cursor-pointer transition-colors group font-medium text-lg ${
                active
                    ? "bg-gray-100 text-gray-800 font-bold"
                    : "hover:bg-gray-50 text-gray-600"
            }`}
        >
            {icon}
            <span className="w-52 ml-4">{text}</span>
            {alert && <div className="absolute right-3 w-3 h-3 rounded bg-indigo-400" />}
        </li>
    );
}
