import React from 'react';
import PropTypes from 'prop-types';
import styles, { display } from './tabs.css';


export class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme, 
            layout: this.props.layout, 
            onSelect: this.props.onSelect, 
            currentSelectedTab: this.props.currentSelectedTab,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tabIndex) {
        this.setState({
            currentSelectedTab: tabIndex === this.state.currentSelectedTab ? this.state.activeTabIndex : tabIndex
        });
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            if (child.props.selectionKey === this.state.currentSelectedTab){
                return React.cloneElement(child, {
                    display: display,
                    handleClick: this.handleClick.bind(this),
                    theme: this.state.theme
                });
            }
            return React.cloneElement(child, {
                handleClick: this.handleClick.bind(this),
                theme: this.state.theme

            });
        })
        return (
            <div className={`${styles[`${this.state.theme}`]}`}>
                {children}
             </div>
        )
    }


};

Tabs.propTypes = {
    theme: PropTypes.oneOf(['dark', 'light']),
    layout: PropTypes.oneOf(['horizontal', 'vertical']),
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number
};

Tabs.defaultProps = {
    theme: 'light',
    layout: 'horizontal'
};


export default Tabs;


