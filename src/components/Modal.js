import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times; 
                </button>
                <h1> { children.title } </h1>
                <p> { children.legend } </p>
                {children.inputs.map((input, index) => (
                    <div key={index}>
                        <label>{input.label}</label>
                        <input type={input.type} name={input.name} value={input.value} />
                    </div>
                ))}
                {children.buttons.map((button, index) => (
                    <button key={index} onClick={button.onClick}>
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Modal;