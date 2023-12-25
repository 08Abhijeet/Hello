import Typical from "react-typical";
import "./Developer.css";
import msImage from "./cutee.jpg";
const Developer = () => {
  const steps = [
    "Hello,",
    3000,
    "Welcome to my website!",
    5000,
    "I am a developer.",
  5000,
  ];
  const textStyle = {
    opacity: 0,
    transition: "opacity 0.9s ease-in-out",
  };
  return (
  <div className="cat">
    <div className="ball">
        <div className="first">
          <p>
            {" "}
            Hii,
            <br />
            Iam Abhijeet Kadam
          </p>
          <div className="bot">
            <Typical loop={Infinity} wrapper="p" steps={steps} style={textStyle} />
            <p
              style={{
                fontSize: 20,
                color: "grey",
                fontFamily: "Helvetica",
                textWrap: "whiteSpace",
              }}
            >
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>

            <a
              href=".Final REsume.pdf"
              download="./public/Final REsume.pdf"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <button className="resume"> Check Resume </button>
            </a>
          </div>
        </div>
        <div className="second">
          <img src={msImage} alt="h" />
        </div>
      </div>
  </div>
      

  );
};

export default Developer;
