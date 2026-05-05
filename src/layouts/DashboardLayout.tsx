import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const { logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return(
        <div className="flex min-h-screen w-full">
            <div className="w-64 bg-red-900 flex flex-col justify-between p-6">
                <div className="border-b border-gray-50"><h2 className="text-white text-2xl text-center p-3 font-semibold">INVOFEST</h2></div>
                <div className="flex flex-col items-center ">
                    <Link to= "/dashboard" className="block py-2 px-4 text-white hover:bg-red-800 rounded w-full">Dashboard</Link>
                    <Link to= "/dashboard/category" className="block py-2 px-4 text-white hover:bg-red-800 rounded w-full">Category</Link>
                    <Link to= "/dashboard/event" className="block py-2 px-4 text-white hover:bg-red-800 rounded w-full">Event</Link>
                    <Link to= "/dashboard/pembicara" className="block py-2 px-4 text-white hover:bg-red-800 rounded w-full">Pembicara</Link>
                </div>
                <div>
                    <button onClick={handleLogout} className="bg-blue-50 p-2 text-zinc-800 w-full rounded-sm hover:bg-blue-200 hover:text-shadow-zinc-700">Logout</button>
                </div>
            </div>

            <div className="w-full p-4">
                <Outlet />
            </div>
        </div>
    )
}