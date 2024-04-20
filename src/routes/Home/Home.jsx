import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.scss";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find real estate and get your dream place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            aperiam molestiae pariatur praesentium minus aut, amet saepe
            sapiente, eligendi aliquid ducimus laboriosam soluta odit.
            Asperiores accusantium impedit veritatis reiciendis dolore?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
