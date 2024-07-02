import React from 'react';
import logo from './logo.svg';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/useAuth';
// import Navbar from './Pages/Navbar/Navbar';
import './index.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  console.log("App");
  return (
    <UserProvider>
      <Outlet />
      <ToastContainer />
    </UserProvider>
        
  );
}

export default App;
