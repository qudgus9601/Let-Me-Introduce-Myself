import Left from "./components/Left";
import Right from "./components/Right";
import "./resume.css";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const printArea = useRef();

  const [mode, setMode] = useState("resume");
  const printing = useReactToPrint({
    content: () => printArea.current,
  });
  return (
    <div className="resume">
      <div className="resume_or_self_introduce">
        <div
          className="resume_view_button"
          onClick={() => {
            setMode("resume");
          }}
        >
          이력서
        </div>
        <div
          className="self_introduce_view_button"
          onClick={() => {
            setMode("introduce");
          }}
        >
          자기소개서
        </div>
      </div>
      <div className="resume_container" ref={printArea}>
        {mode === "resume" ? (
          <>
            <Left />
            <Right />
          </>
        ) : (
          <></>
        )}
      </div>
      <button onClick={printing} className="resume_print_button">
        🖨️ 이력서 프린트
      </button>
    </div>
  );
};

export default Resume;
