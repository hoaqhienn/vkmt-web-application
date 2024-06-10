// src/Layout.jsx
import { Outlet } from "react-router-dom";

import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";

import { useState } from "react";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex flex-col w-full h-screen items-center ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
    >
      <ThemeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header />
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
