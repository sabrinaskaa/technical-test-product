import React from "react";

const modal = {
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backgroundColor: "#ffffff",
};

const close = {
  position: "absolute",
  top: 15,
  right: 50,
  zIndex: 100,
  color: "#000000",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer",
};

const modalContent = {
  zIndex: 10,
  width: "100%",
  height: "100vh",
  marginTop: "-2rem",
  padding: "2rem 0",
};

export const Modal = ({ onOpen, children }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={onOpen}>
      {" "}
      {children}
    </div>
  );
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose}>
        &times;
      </span>
      <div style={modalContent}>{children}</div>
    </div>
  );
};
