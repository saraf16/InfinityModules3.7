import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.css';

const Tab = ({selectionKey, title, display, handleClick, theme, children } ) => {
    return (
        <div>
            <div className={`${styles[`${theme}`]}`}>
                <button className={styles.btn} onClick={() => handleClick(selectionKey)}>{title}</button>
            </div>
            <div id={selectionKey} className={`${styles[`content-${theme}`]} ${display}`}>
                <p>{children}</p>
            </div>
       </div>
    )
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};


export default Tab;
