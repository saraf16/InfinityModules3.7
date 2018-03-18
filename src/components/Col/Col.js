import React from 'react';
import PropTypes from 'prop-types';
import styles from './col.css';

const Col = ({size} ) => {
    return (
        <div className={`${styles[`col-${size}`]}`} ><p>col-1</p></div> 
    )
}

Col.propTypes = {
    size: (props, propName) => {
        if (props[propName] >= 1 && props[propName] <= 12) { return; }
        return new Error('Number must be between 1 and 12');
    },
};



export default Col;