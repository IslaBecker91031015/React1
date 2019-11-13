import React, { Component } from 'react';
import './App.css';

const Modal = ({ close, show, children }) => {
  const modal = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={modal}>
      <section className='modal-main'>
        {children}
        <h4 className="close" onClick={close}>
          X
        </h4>
      </section>
    </div>
  );
};

export default Modal;
