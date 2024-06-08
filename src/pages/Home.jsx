//page/Home.jsx
import Button from "../components/Button";
const Home = () => {
  return (
    <div className="justify-center items-center">
      <div className="flex py-60 justify-center items-center">
      <Button to="/cv">CV</Button>
      </div>
      <pre>
        <del>Hi there</del> <sub>I&apos;m</sub> <mark>HIEN Le Hoang</mark> <em>aka</em>{" "}
        <strong>
          <q>Davi</q>.
        </strong>
      </pre>
    
    </div>
  );
};

export default Home;
