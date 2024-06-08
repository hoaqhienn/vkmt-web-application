//pages/CV.jsx
import { useNavigate } from "react-router-dom";
const CV = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>CV</h1>
      <button onClick={() => alert("Hello!")}>Click me!</button>
      <button onClick={handleClick}>Home</button>
    </div>
  );
};

export default CV;
