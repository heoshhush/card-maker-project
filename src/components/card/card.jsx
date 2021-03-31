import React from 'react';
import Styles from './card.module.css'

const DEFAULT_IMAGE = '/images/default_logo.png';
const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE
    return(
        <li className={`${Styles.card} ${getStyles(theme)}`}>
            <img className={Styles.avatar} src={url} alt="profile photo"/>
            <div className={Styles.info}>
                <h1 className={Styles.name}>{name}</h1>
                <p className={Styles.company}>{company}</p>
                <p className={Styles.title}>{title}</p>
                <p className={Styles.email}>{email}</p>
                <p className={Styles.message}>{message}</p>
            </div>
        </li>
        
    )
};

function getStyles(theme){
    switch(theme){
        case 'dark':
            return Styles.dark;
        case 'light':
            return Styles.light;
        case 'colorful':
            return Styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`)
    }
}

export default Card;