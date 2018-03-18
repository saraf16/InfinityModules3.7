import React from 'react';
import PropTypes from 'prop-types';
import styles , {next, prev } from './carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.increaseIndex = this.increaseIndex.bind(this);
        this.decreaseIndex = this.decreaseIndex.bind(this);
        this.state = {
            images: props.images, 
            imageIndex: 0,
            size: props.size
        };
    }

    increaseIndex() {
        console.log("increase index " + (this.state.images.length - 1));
        if(this.state.imageIndex >= (this.state.images.length - 1)) {
            this.setState({imageIndex: 0 });

        }
        else {
            this.setState({imageIndex: (this.state.imageIndex + 1) });
        }
    }

    decreaseIndex() {
        console.log("decrease index");
        if(this.state.imageIndex <= 0) {
            this.setState({imageIndex: (this.state.images.length - 1) });
        }
        else{
            this.setState({imageIndex: (this.state.imageIndex  - 1)});
        }
    }

    render () {
        return (
            <div className={`${styles.carousel}`}>
                <img src={this.state.images[this.state.imageIndex]} alt="" className={`${styles[`carousel-${this.size}`]}`}/>
                <a className={prev} onClick={this.decreaseIndex}>&#10094;</a>
                <a className={next} onClick={this.increaseIndex}>&#10095;</a>
            </div>
        )
    }

}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large' ]).isRequired
};

Carousel.defaultProps = {
    size: 'medium'
};

export default Carousel;