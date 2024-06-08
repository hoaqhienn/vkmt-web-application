// src/Layout.jsx
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <header className="flex h-1/6 w-screen items-center justify-center">
        <p className="text-red-500">Header</p>
      </header>
      <main className="flex h-4/6 w-screen items-center justify-center">
        <Outlet />
      </main>
      <footer className="flex h-1/6 w-screen items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
