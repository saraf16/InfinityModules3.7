import React from 'react';
import PropTypes from 'prop-types';
import styles from './timePicker.css';

const TimePicker = ({onTimePick,format} ) => {
    return (
        <div>TimePicker</div>
    )
}

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    //fomat: veit ekki hvaða proptype
};



export default TimePicker;