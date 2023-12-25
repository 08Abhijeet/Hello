import "./Skills.css";
import { FaReact } from "react-icons/fa6";
const Skills = () => {
  return (
    <>
    
     <div className="skills">




<div className="skilled">
  <div className="para">
    <p> Skills </p>
  </div>
  <div className="divisons">
    <p>
      Here are some of my skills on which I have been working on for the
      past 1 year.
    </p>
  </div>
  <div className="allskills">
    <div className="f">
      <div className="a">
        <button
          className="r"
          style={{
            fontSize: 30,
            border: "1px solid black",
            borderRadius: 14,
          }}
        >
          React Js <FaReact style={{ fontSize:40, color: "black" }} />
        </button>
      </div>
      <div className="b"></div>
    </div>
    <div className="s">
      <div className="c"></div>
      <div className="d"></div>
    </div>
  </div>
</div>
</div></>
   
  );
};

export default Skills;
