import React from 'react';
import PropTypes from 'prop-types';
import styles from './nameCard.css';
import FontAwesome from 'react-fontawesome';
const NameCard = ({name, email, telephone, imageUrl} ) => {
    return (
    <div className={`${styles.card}`} >
       <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${styles.avatar}`}> </div>
       <div className={`${styles.name}`}>{name}</div>
       <div><FontAwesome aria-hidden='false' name='far fa-envelope'/> {email}</div>
       <div><FontAwesome aria-hidden='false' name='far fa-phone'/> {telephone}</div>
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