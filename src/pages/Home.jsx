//page/Home.jsx
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cv");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => alert("Hello!")}>Click me!</button>
      <button onClick={handleClick}>CV</button>
    </div>
  );
};

export default Home;
