import React from 'react';
import CardAddForm from '../card_edit_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import Styles from './editor.module.css';

const Editor = ({cards, addCard}) => {
    return(
        <section className={Styles.editor}>
            <h1 className={Styles.title}>Card Maker</h1>
            {cards.map(card =>  (
            <CardEditForm 
            key={card.id}
            card={card} />
        ))}
        <CardAddForm 
            onAdd={addCard}
            />
     </section>
    )


};

export default Editor;