import { useEffect, useRef } from "react";
import "./styles/modal.css";

const Modal = ({ setModalOpen, header, content, footer }) => {
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
        <header className="modal_title">{header}</header>
        <main className="modal_content">{content}</main>
        <footer className="modal_footer">{footer}</footer>
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
