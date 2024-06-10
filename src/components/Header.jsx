// src/components/Header.jsx
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.png";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <header className="flex w-full p-5 items-center justify-between border-b border-red-500">
      <button className="" onClick={() => handleClick("/")}>
        <img src={Logo} alt="VKMT Logo" width="80" height="45" />
      </button>
      <div>
        <button className="mx-2" onClick={() => handleClick("/")}>
          Home
        </button>
        <button className="mx-2" onClick={() => handleClick("/about")}>
          About
        </button>
        <button className="mx-2" onClick={() => handleClick("/services")}>
          Services
        </button>
        <button className="mx-2" onClick={() => handleClick("/contact")}>
          Contact
        </button>
        <select className="bg-transparent">
          <option value="vi">Vietnamese</option>
          <option value="en">English</option>
          <option value="ko">Korean</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
      <button className="" onClick={() => handleClick("/profile")}>
        <img src={Avatar} alt="Avatar" width="50" height="auto" />
      </button>
    </header>
  );
};

export default Header;
