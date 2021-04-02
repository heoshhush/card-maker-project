import React, { useRef, useState } from 'react';
import Styles from './image_file_input.module.css'

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }

    // const onChange = (event) => {
    //     console.log(event.target.files[0]);
    //     imageUploader.upload(event.target.files[0]) // async라 promise가 리턴된다
    //     .then(console.log);
    // }

    const onChange = async (event) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0])
        setLoading(false);    
        onFileChange(
            {
                name: uploaded.original_filename,
                url: uploaded.url
            }
        )
    }

    return(
        <div className={Styles.container}>
        <input 
        ref={inputRef}
        className={Styles.input} 
        type="file" 
        accept="image/*" 
        name="file"
        onChange={onChange}
        />
            { !loading && <button className={`${Styles.button} ${name ? Styles.pink : Styles.grey}`} onClick={onButtonClick}>
                {name || 'No File'}
            </button>}
            { loading && <div className={Styles.loading}></div>}
        </div>
    );
    
}
            

export default ImageFileInput;