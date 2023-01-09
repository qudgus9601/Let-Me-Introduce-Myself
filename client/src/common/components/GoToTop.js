import { BsBoxArrowInUp } from "@react-icons/all-files/bs/BsBoxArrowInUp";
import "./styles/gototop.css";

const pageUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const GoToTop = () => {
  return (
    <div className="gototop">
      <button className="gototop_button" onClick={pageUp}>
        <BsBoxArrowInUp size={50} onClick={pageUp} />
      </button>
    </div>
  );
};

export default GoToTop;
