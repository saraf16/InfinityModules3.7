import React from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.css';

const Carousel = ({images, size} ) => {
    return (
        <div>Carousel</div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large' ]).isRequired
};

Carousel.defaultProps = {
    size: 'medium'
};

export default Carousel;