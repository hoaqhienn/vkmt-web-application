// src/Layout.jsx
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.svg";
const Layout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col w-full h-screen items-center">
      <header className="flex items-center justify-center">
        <button className="py-20" onClick={handleClick}>
          <img src={Logo} alt="VKMT Logo" width="80" height="45" />
        </button>
      </header>
      <main className="flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="flex py-20 items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
