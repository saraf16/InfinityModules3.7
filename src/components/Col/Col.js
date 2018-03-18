import React from 'react';
import PropTypes from 'prop-types';
import styles from './col.css';

const Col = ({size} ) => {
    return (
        <div className={`${styles[`col-${size}`]}`} ><p>content</p></div> 
    )
}

Col.propTypes = {
    size: PropTypes.number.isRequired,
};



export default Col;