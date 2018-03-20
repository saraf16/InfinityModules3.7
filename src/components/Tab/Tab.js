import React from 'react';
import PropTypes from 'prop-types';
import styles, {tabcontent, tab } from './tab.css';

const Tab = ({selectionKey, title, display, handleClick, theme, children } ) => {
    return (
        <div>
            <div className={tab}>
                <button onClick={() => handleClick(selectionKey)}>{title}</button>
            </div>
            <div id={selectionKey} className={`${tabcontent} ${display}`}>
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