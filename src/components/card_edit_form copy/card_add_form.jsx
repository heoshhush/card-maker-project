import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import Styles from './card_add_form.module.css';

const CardAddForm = ({onAdd}) => {

    const formRef=useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const card ={
        id: Date.now(), //uuid
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        theme: themeRef.current.value,
        title: titleRef.current.value || '',
        email: emailRef.current.value || '',
        message: messageRef.current.value || '',
        fileName: '',
        fileURL: '',
        }
        
        formRef.current.reset();
        onAdd(card);
    };


    return (
       <form ref={formRef} className={Styles.form}>  
           <input ref={nameRef} className={Styles.input} type="text" name="name" placeholder="name"/>
           <input ref={companyRef} className={Styles.input} type="text" name="company" placeholder="company"/>
           <select ref={themeRef} className={Styles.select} name="theme" placeholder="theme">
               <option placeholder="light">light</option>
               <option placeholder="dark">dark</option>
               <option placeholder="colorful">colorful</option>
           </select>
           <input ref={titleRef} className={Styles.input} type="text" name="title" placeholder="title"/>
           <input ref={emailRef} className={Styles.input} type="text" name="email" placeholder="email"/>
           <textarea ref={messageRef} className={Styles.textarea} name="message" placeholder="message" />
           <div className={Styles.fileInput}>
            <ImageFileInput />
           </div>

           <Button name="Add" onClick={onSubmit} />

       </form>
    );
}


export default CardAddForm;