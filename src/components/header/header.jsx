import React, { memo } from 'react';
import Styles from './header.module.css';

const Header = memo(({onLogout}) => {
    return(
          <header className={Styles.header}>
              {onLogout && 
                  <button className={Styles.logout} onClick={onLogout}>
                      Logout
                  </button>}
                  <h1 className={Styles.title}>Business Card Maker</h1>
          </header> 
    )

              });

export default Header;