import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import Styles from './editor.module.css';

const Editor = ({cards}) => {
    return(
        <section className={Styles.editor}>
            <h1 className={Styles.title}>Card Maker</h1>
            {cards.map(card =>  (
            <CardEditForm card={card} />
        ))}
     </section>
    )


};

export default Editor;