import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.css';

const Tab = ({selectionKey, title} ) => {
    return (
        <div>Tab</div> 
    )
}

Tab.propTypes = {
    selectionKey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};




export default Tab;