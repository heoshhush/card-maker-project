import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import Styles from './maker.module.css'

const Maker = ({authService, FileInput, cardRepository}) => {
    const historyState = useHistory().state
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id)
    

    const history = useHistory();

        const onLogout = () => {
            authService.logout();
        };

        useEffect(() => {
            authService.onAuthChange(user => {
                if(user) {
                    setUserId(user.uid);
                }
                else if(!user) {
                    history.push('/');
                }
            })
        }, [userId, authService, history])
        
        useEffect(() => {
            if(!userId) {
                return;
            }
            const stopSync = cardRepository.syncCards(userId, cards => {
                setCards(cards);
            })
            console.log(stopSync)
            // return () => stopSync();
        }, [userId, cardRepository])


    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        setCards (cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated
        })
        cardRepository.removeCard(userId, card);
    }


    

    return(
        <section className={Styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={Styles.container}>
                <Editor 
                               FileInput={FileInput}
                cards={cards} addCard={createOrUpdateCard} 
                updateCard={createOrUpdateCard} 
                deleteCard={deleteCard} 
 
                />
                <Preview cards={cards}/>

            </div>
            <Footer />
        </section>
    )

}
export default Maker;