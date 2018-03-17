import React from 'react';
import PropTypes from 'prop-types';
import styles from './nameCard.css';

const NameCard = ({name, email, telephone, imageUrl} ) => {
    return (
    <div className={`${styles.card}`} >
       <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${styles.avatar}`}> </div>
       <div>name: {name}</div>
       <div>email: {email}</div>
       <div>telephone: {telephone}</div>
    </div>
    )
}

NameCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};


export default NameCard;