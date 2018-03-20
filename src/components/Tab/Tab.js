import React from 'react';
import PropTypes from 'prop-types';
import styles, {tabcontent, tab } from './Tab.css';

const Tab = ({selectionKey, title, children } ) => {
    return (
        <div>
            <div className={tab}>
                <button>{title}</button>
            </div>
            <div id={selectionKey} className={tabcontent}>
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