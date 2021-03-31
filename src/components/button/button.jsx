import React from 'react';
import Styles from './button.module.css';

const Button = ({name, onClick}) => 
    {
        return(
             <button className={Styles.button} onClick={onClick}>
                {name}
             </button>       
            );
    }
export default Button;