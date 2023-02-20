import Left from "./components/Left";
import Right from "./components/Right";
import "./resume.css";
import { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { AiOutlinePrinter } from "@react-icons/all-files/ai/AiOutlinePrinter";
import { Loader } from "../../common/components/Loader";
import Breadcrumb from "../../common/components/Breadcrumb";

const Resume = () => {
  const printArea = useRef();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {});
  const print = () => {
    setIsLoading(true);
    printing();
  };
  const printing = useReactToPrint({
    content: () => printArea.current,
    documentTitle: "안병현 이력서.pdf",
    onAfterPrint: () => {
      setIsLoading(false);
    },
  });

  return (
    <div className="resume">
      <Breadcrumb crumbs={["resume"]} />
      {isLoading ? <Loader text={"인쇄 중입니다"} /> : <></>}

      <div className="resume_action_container">
        <button onClick={print} className="resume_print_button">
          <AiOutlinePrinter />
        </button>
      </div>
      <div className="resume_wrapper">
        <div className="resume_container" ref={printArea}>
          <>
            <Left />
            <Right />
          </>
        </div>
      </div>
    </div>
  );
};

export default Resume;
