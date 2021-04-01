import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import Styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    const onSubmit =() => {};

    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    return (
       <form className={Styles.form}>  
           <input className={Styles.input} type="text" name="name" value={name}/>
           <input className={Styles.input} type="text" name="company" value={company}/>
           <select className={Styles.select} name="theme" value={theme}>
               <option value="light">light</option>
               <option value="dark">dark</option>
               <option value="colorful">colorful</option>
           </select>
           <input className={Styles.input} type="text" name="title" value={title}/>
           <input className={Styles.input} type="text" name="email" value={email}/>
           <textarea className={Styles.textarea} name="message" value={message} />
           <div className={Styles.fileInput}>
            <ImageFileInput />
           </div>

           <Button name="Delete" onClick={onSubmit} />

       </form>
    );
}


export default CardEditForm;