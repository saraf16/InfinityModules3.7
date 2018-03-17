import React from 'react';
import PropTypes from 'prop-types';
import styles from './row.css';

const Row = ({children} ) => {
    return (
        <div>Row</div>
    )
}

Row.propTypes = {
    children: PropTypes.node.isRequired,
};



export default Row;