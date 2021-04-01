import React from 'react';
import CardAddForm from '../card_edit_form copy/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import Styles from './editor.module.css';

const Editor = ({cards, addCard, updateCard, deleteCard}) => {
    return(
        <section className={Styles.editor}>
            <h1 className={Styles.title}>Card Maker</h1>
            {Object.keys(cards).map(key =>  (
            <CardEditForm 
            key={key}
            card={cards[key]} 
            updateCard={updateCard}
            deleteCard={deleteCard}
            />
        ))}
        <CardAddForm 
            onAdd={addCard}
            />
     </section>
    )


};

export default Editor;