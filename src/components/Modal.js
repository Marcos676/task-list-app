import React from 'react';

const Modal = ({ isOpen, onClose, children, submit}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <form className="modal-content" onSubmit={submit} onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times; 
                </button>
                <h1> { children.title } </h1>
                <p> { children.legend } </p>
                {children.inputs.map((input, index) => (
                    <div key={index}>
                        <label>{input.label}</label>
                        {
                            input.tag === "textarea" ? (
                                <textarea name={input.name} placeholder={input.placeholder} />
                            ) : (
                            <input type={input.type} name={input.name} placeholder={input.placeholder} />
                        )
                        }
                    </div>
                ))}
                {children.buttons.map((button, index) => (
                    <button key={index} type={button.type} onClick={button.onClick}>
                        {button.label}
                    </button>
                ))}
            </form>
        </div>
    );
};

export default Modal;