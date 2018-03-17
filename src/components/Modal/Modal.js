import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';

const Modal = ({isOpen, onClosed, children} ) => {
    console.log(styles);

    const open = isOpen ? (
        <div className={`${styles.btn}`}  >
            {children}
        </div>
    ): (
        <div className={`${styles.btn} ${styles.hidden} `}>
        {children}
    </div>
    )
    return (

        <div isOpen={isOpen} onClick={onClosed}>{open}</div>
    )
}

Modal.Title = ({children}) => {
    return <div>{children}</div>
}

Modal.Body = ({children}) => {
    return <div>{children}</div>
}

Modal.Footer = ({children}) => {
    return <div>{children}</div>
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