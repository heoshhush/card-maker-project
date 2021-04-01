import React, { useRef } from 'react';
import ImageUploader from '../../service/image_uploader';
import Styles from './image_file_input.module.css'

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
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
        console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0])
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
            <button className={Styles.button} onClick={onButtonClick}>
                {name || 'No File'}
            </button>
        </div>
    );
    
}
            

export default ImageFileInput;