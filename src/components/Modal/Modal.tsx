import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

interface IModal {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}

function Modal({ children, onClose, title }: IModal) {
  const outsideModalRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   function handleOutsideClick(event: MouseEvent) {
  //     console.log(event.target);

  //     if (
  //       event.target instanceof HTMLElement &&
  //       !outsideModalRef?.current?.contains(event.target)
  //     ) {
  //       onClose();
  //     }
  //   }
  //   document.addEventListener("click", (e) => handleOutsideClick(e));
  //   return () =>
  //     document.removeEventListener("click", (e) => handleOutsideClick(e));
  // }, []);

  const node = document.getElementById("modal-root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className="modal-item">
      <div
        className="modal-item__content"
        ref={outsideModalRef as React.RefObject<HTMLDivElement>}
      >
        <div className="modal-item__header">
          <h5 className="modal-item__title">{title}</h5>
          <button
            type="button"
            className="modal-item__close"
            aria-label="Close"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-item__body">{children}</div>
      </div>
    </div>,
    node
  );
}

export default Modal;
