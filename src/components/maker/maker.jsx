import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import Styles from './maker.module.css'

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        1 :  {
            id: '1',
            name: 'heo',
            company: '어딘가',
            theme: 'dark',
            title: 'software Engineer',
            email: 'heo@gmail.com',
            message: 'go for it',
            fileName: 'heoheo',
            fileURL: null,
        },

        2 : {
            id: '2',
            name: 'heo2',
            company: '어딘가',
            theme: 'light',
            title: 'software Engineer',
            email: 'heo@gmail.com',
            message: 'go for it',
            fileName: 'heoheo',
            fileURL: null,
        },

        3 :  {
            id: '3',
            name: 'heo3',
            company: '어딘가',
            theme: 'colorful',
            title: 'software Engineer',
            email: 'heo@gmail.com',
            message: 'go for it',
            fileName: 'heoheo',
            fileURL: null,
        }

    });
    

    const history = useHistory();

        const onLogout = () => {
            authService.logout();
        };

        useEffect(() => {
            authService.onAuthChange(user => {
                if(!user) {
                    history.push('/');
                }
            })
        })

    const createOrUpdateCard = (card) => {
        const updated = {...cards};
        updated[card.id] = card;
        setCards(updated)
    }

    const deleteCard = (card) => {
        const updated = {...cards};
        delete updated[card.id]
        setCards(updated)
    }

    

    return(
        <section className={Styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={Styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} 
                updateCard={createOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards}/>

            </div>
            <Footer />
        </section>
    )

}
export default Maker;