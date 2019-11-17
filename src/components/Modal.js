import React, { Component } from 'react';
import '../style/AppStyle.css';

const Modal = ({ close, show, children }) => {
  const displayM = show ? {width : "100%"} : {width : "0"};
  const displayMFade = show ? {maxHeight : "100%"} : {maxHeight : "0"};
  const displayC = show ? {display : "block"} : {display : "none"};

  return (
    <div className="modal" style={displayMFade}>
      <div className="modalFade" style={displayM}>
        <div className="modalC" style={displayC}>
            {children}
            <h4 className="close" onClick={close}> X </h4>
        </div>
      </div>
    </div>
  );
};

export default Modal;
