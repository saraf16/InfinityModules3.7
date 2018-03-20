import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.css';

const Tab = ({selectionKey, title, display, handleClick, theme, layout, children } ) => {
    return (
        <div>
            <div className={`${styles[`${layout}`]} ${styles[`${theme}`]}`}>
                <button className={styles.btn} onClick={() => handleClick(selectionKey)}>{title}</button>
            </div>
            <div id={selectionKey} className={`${styles[`content-${theme}`]} ${styles[`content-${layout}`]} ${display}`}>
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