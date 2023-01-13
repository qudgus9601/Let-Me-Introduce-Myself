import Stacks from "./Stacks";
import Education from "./Education";
import Projects from "./Projects";
import "./styles/resumeright.css";

const Right = () => {
  return (
    <div className="resume_right">
      <div className="resume_right_container">
        <Stacks />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default Right;
