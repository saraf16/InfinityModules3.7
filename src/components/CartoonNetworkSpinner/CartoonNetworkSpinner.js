import React from 'react';
import propTypes from 'prop-types';
import styles from './cartoonnetworkspinner.css';

class CartoonNetworkSpinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            interval: this.props.interval,
            characters: ['https://vignette.wikia.nocookie.net/cartoon-network-characters/images/6/6a/Skips_character.png/revision/latest?cb=20130310180547',
                'http://moziru.com/images/cartoon-network-clipart-4.png',
                'http://images6.fanpop.com/image/photos/32600000/Vana-cartoon-networks-sidekick-32646899-160-300.png',
                'http://i.imgur.com/Xx1ORD5.png',
                'https://vignette.wikia.nocookie.net/parody/images/e/ed/Gumball_watterson_cartoon_network.png/revision/latest?cb=20150808071702',
                'https://vignette.wikia.nocookie.net/powerpuff/images/c/ca/Stylowi_pl_hobby_bojka--postacie-z-atomowki--cartoon-network_8140914.png/revision/latest?cb=20150724164644',
                'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/7/18/enhanced/webdr05/enhanced-7218-1428446543-1.png',
                'http://i.imgur.com/4EViWPk.png',
                'http://www.indiewire.com/wp-content/uploads/2013/10/adventure-time.png']
        }
    }

    componentDidMount () {
        setInterval( () => {
            this.setIndex();// rotate
        }, this.state.interval*1000)
    }

    setIndex = () => {
        console.log(this.state.characters.length)
        if(this.state.currentImageIndex >= (this.state.characters.length - 1)) {
            this.setState({currentImageIndex: 0 });
        }
        else {
            this.setState({currentImageIndex: (this.state.currentImageIndex + 1) });
        }
    }

    render() {
        return(
            <img src={this.state.characters[this.state.currentImageIndex]} alt="" className={`${styles.image}`} 
            style={{
                animationDuration: `${this.state.interval}s`, 
                animationName: styles.spin,
                animationIterationCount: "infinite",
                animationTimingFunction: "linear"
            }}/>
        )
    }
}
CartoonNetworkSpinner.PropTypes = {
    interval: propTypes.number.isRequired
}
CartoonNetworkSpinner.defaultProps = {
    interval: 3
}
export default CartoonNetworkSpinner;