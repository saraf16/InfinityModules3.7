import React from 'react';
import PropTypes from 'prop-types';
import styles from './progressBar.css';

const ProgressBar = ({progress, striped, animated, state} ) => {
    // apply striped and animated styles when true
    let classes = `${styles.progressBar} ${styles[`progressBar-${state}`]}`;
    classes = striped ? classes += ` ${styles.striped}` : classes;
    classes = animated ? classes += ` ${styles.animated}` : classes;
    return (
        <div className={`${styles.progressBackground}`}>
            <div className={classes} style={{width: `${progress}%`}}>{progress}%</div>
        </div>
    )
}


ProgressBar.propTypes = {
    progress: (props, propName) => {
        if (props[propName] >= 0 && props[propName] <= 100) { return; }
        return new Error('Number must be between 0 and 100');
    },
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired
};

ProgressBar.defaultProps = {
    striped: false,
    animated: false
};

export default ProgressBar;
