// src/Layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "./assets/logo.svg";
import Avatar from "./assets/avatar.png";

import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";
const Layout = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      className={`flex flex-col w-full h-screen items-center ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
    >
      <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
      <header className="flex w-full p-5 items-center justify-between border-b border-red-500">
        <button className="" onClick={handleClick}>
          <img src={Logo} alt="VKMT Logo" width="80" height="45" />
        </button>
        <div>
          <button className="mx-2" onClick={handleClick}>
            Home
          </button>
          <button className="mx-2" onClick={handleClick}>
            About
          </button>
          <button className="mx-2" onClick={handleClick}>
            Services
          </button>
          <button className="mx-2" onClick={handleClick}>
            Contact
          </button>
        </div>
        <button className="" onClick={handleClick}>
          <img src={Avatar} alt="Avatar" width="50" height="auto" />
        </button>
      </header>
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="flex py-20 items-center justify-center">
        <p className="text-xs">Copyright © 2024 VKMT</p>
      </footer>
    </div>
  );
};

export default Layout;
