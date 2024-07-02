import React from 'react';
import logo from "../../Assets/logo.png";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/useAuth';

interface Props {}

const Navbar: React.FC<Props> = (props: Props) => {
  const { isLoggedIn, user } = useAuth();
  return (
    <nav className="bg-blue-50 shadow-lg">
      <div className="container mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28 h-auto" />
          </Link>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-gray-800">
            <div className="hover:text-blue-600">Welcome, {user?.userName}</div>
            <button
              // onClick={logout}
              className="px-6 py-2 font-bold rounded-full text-white bg-green-500 hover:bg-green-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/login"
              className="px-6 py-2 font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 font-bold rounded-full text-white bg-green-500 hover:bg-green-600"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
