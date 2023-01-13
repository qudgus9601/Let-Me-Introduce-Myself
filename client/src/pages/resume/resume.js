import Left from "./components/Left";
import Right from "./components/Right";
import "./resume.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const printArea = useRef();
  const printing = useReactToPrint({
    content: () => printArea.current,
  });
  return (
    <div className="resume">
      <div className="resume_container" ref={printArea}>
        <Left />
        <Right />
      </div>
      <button onClick={printing} className="resume_print_button">
        🖨️ 이력서 프린트
      </button>
    </div>
  );
};

export default Resume;
