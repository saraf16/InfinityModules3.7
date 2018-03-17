import React from 'react';
import PropTypes from 'prop-types';
import styles from './progressBar.css';

const ProgressBar = ({progress, striped, animated, state} ) => {
    return (
        <div className={`${styles.progressBar} ${styles[`progressBar-${state}`]}`} >88</div>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired
};

ProgressBar.defaultProps = {
    striped: false,
    animated: false
};

export default ProgressBar;