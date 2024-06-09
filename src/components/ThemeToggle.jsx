import { useEffect } from "react";
import PropTypes from "prop-types";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";

const ThemeToggle = ({ setDarkMode, darkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="drop-shadow-xl fixed z-10 right-5 bottom-5">
      <button onClick={toggleDarkMode}>
        <img
          src={darkMode ? Moon : Sun}
          alt="Toggle Theme"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

ThemeToggle.propTypes = {
  setDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default ThemeToggle;
