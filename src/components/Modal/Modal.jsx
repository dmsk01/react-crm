import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

function Modal({ children, onClose, title }) {
  const outsideModalRef = useRef(null);
  const closeButtonRef = useRef(null);
  useEffect(() => {
    function handleClick(event) {
      if (
        event.target === closeButtonRef.current ||
        (event.target instanceof Node &&
          !outsideModalRef.current.contains(event.target))
      ) {
        onClose && onClose();
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const node = document.getElementById("modal-root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className="modal-item">
      <div className="modal-item__content" ref={outsideModalRef}>
        <div className="modal-item__header">
          <h5 className="modal-item__title">{title}</h5>
          <button
            type="button"
            className="modal-item__close"
            aria-label="Close"
            ref={closeButtonRef}
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
