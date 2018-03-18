import React from 'react';
import PropTypes from 'prop-types';
import styles, {modalContent, modalTitle, modalBody, modalFooter, shown, hidden } from './modal.css';

const Modal = ({isOpen, onClosed, children} ) => {
    console.log(styles);

    const open = isOpen ? (
        <div className={`${modalContent} ${shown}`}>
            {children}
        </div>
    ): (
        <div className={`${modalContent} ${hidden} `}>
            {children}
        </div>
    )
    return (
        <div onClick={onClosed}>{open}</div>
    )
}

Modal.Title = ({children}) => {
    return <div className={ modalTitle }>{children}</div>
}

Modal.Body = ({children}) => {
    return <div className={ modalBody }>{children}</div>
}

Modal.Footer = ({children}) => {
    return <div className={ modalFooter }>{children}</div>
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClosed: PropTypes.func.isRequired,
    children: PropTypes.node
};

Modal.defaultProps = {
    isOpen: false
};

export default Modal;