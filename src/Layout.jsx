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
    <div className="flex flex-col h-screen items-center">
      <header className="flex h-1/6 w-screen items-center justify-center">
        <button onClick={handleClick}>
          <img src={Logo} alt="VKMT Logo" width="80" height="45" />
        </button>
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
