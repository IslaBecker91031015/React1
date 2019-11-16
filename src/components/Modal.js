import React, { Component } from 'react';
import '../style/AppStyle.css';

const Modal = ({ close, show, children }) => {
  const displayM = show ? {display : "block"} : {display : "none"};

  return (
    <div className="modal" style={displayM}>
        {children}
        <h4 className="close" onClick={close}> X </h4>
    </div>
  );
};

export default Modal;
