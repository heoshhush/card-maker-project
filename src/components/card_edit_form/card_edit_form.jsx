import React from 'react';
import Button from '../button/button';
import Styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput, card, updateCard, deleteCard }) => {
    const onSubmit =(event) => {
        deleteCard(card);
    };
    const onChange =(event) => {
        if(event.currentTarget == null){
            return;
        } 
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    
    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url
        })
    }
    
    return (
       <form className={Styles.form}>  
           <input 
           className={Styles.input} 
           type="text" 
           name="name" 
           value={name}
           onChange={onChange}
           />
           <input className={Styles.input} 
           type="text" 
           name="company" 
           value={company}
           onChange={onChange}
           />
           <select 
           className={Styles.select} 
           name="theme" 
           value={theme}
           onChange={onChange}>
               <option value="light">light</option>
               <option value="dark">dark</option>
               <option value="colorful">colorful</option>
           </select>
           <input 
           className={Styles.input} 
           type="text" 
           name="title" 
           value={title}
           onChange={onChange}/>
           <input 
           className={Styles.input} 
           type="text" 
           name="email" 
           value={email}
           onChange={onChange}
           />
           <textarea 
           className={Styles.textarea} 
           name="message" 
           value={message} 
           onChange={onChange}
           />
           <div className={Styles.fileInput}>
            <FileInput 
            name={fileName}
            onFileChange={onFileChange}
            />
           </div>

           <Button name="Delete" onClick={onSubmit} />

       </form>
    );
}


export default CardEditForm;