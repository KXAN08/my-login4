import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <div className="space-x-6 text-lg font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/statistic" className="hover:underline">Statistic</Link>
      </div>
      <button onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
