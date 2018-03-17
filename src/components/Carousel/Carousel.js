import React from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.css';


//https://www.w3schools.com/howto/howto_js_slideshow.asp
//byrjaði eitthvað að nota þetta 

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

const Carousel = ({images, size} ) => {
    return (
        <div className={`${styles.carousel}`}>Carousel
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a class="next" onclick="plusSlides(1)">&#10095;</a>


        </div>

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