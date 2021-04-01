import React from 'react';
import Card from '../card/card';
import Styles from './preview.module.css';

const Preview = ({cards}) => {
    return(    
    <section className={Styles.preview}>
        <h1 className={Styles.title}>Card Preview</h1>
    <ul className={Styles.cards}>
    {Object.keys(cards).map(key =>  (
            <Card 
            key={key}
            card={cards[key]} />
        ))}
    </ul>
    </section>
    )
}


export default Preview;