import React from 'react';
import PropTypes from 'prop-types';
import { container, outline, row } from './row.css';

const Row = ({children} ) => {
    return (
        <div className={`${container} ${outline}`}>
            <div className={`${row}`}>
                {children}
            </div>
        </div>
    )
}

Row.propTypes = {
    children: PropTypes.node.isRequired,
};



export default Row;