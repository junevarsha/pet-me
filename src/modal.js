// RECAP:
// trapping focus in a modal is hard
// and not accessible
// create a div

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

// fn that takes children and returns function?
// modal should be opened and destroyed to avoid
// memory leaks
// clean your own garbage
// renders and re-renders are there ... so
// useRef -> refers to same dom elts

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  // if you return a function
  // cleans up (unmounts when modalroot gets closed)
  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
