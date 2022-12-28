import { useEffect, useRef } from "react";
import "./styles/modal.css";

const Modal = ({ setModalOpen, title, elements }) => {
  const modal = useRef();
  useEffect(() => {
    // mount
    document.querySelector("body").style.overflow = "hidden";
    modal.current.classList.add("fadein");
    // unmount
    return () => {
      document.querySelector("body").style.overflow = "initial";
    };
  });

  return (
    <div className="modal" ref={modal}>
      <div className="modal_container">
        <header className="modal_title">{title}</header>
        <main className="modal_content">{elements}</main>
      </div>
      <div
        className="modal_background"
        onClick={() => {
          setModalOpen(false);
        }}
      ></div>
    </div>
  );
};

export default Modal;
