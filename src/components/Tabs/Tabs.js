import React from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.css';

const Tabs = ({theme, layout, onSelect, currentSelectedTab, children} ) => {
    return (
        <div>{children}}</div> 
    )
}

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