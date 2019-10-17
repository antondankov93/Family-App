import React from 'react';
import styles from "./Header.module.css";
import NavigationItems from "./Header-Navigation/NavigationItems";


const Header = (props) => {
  return (
    <header className={styles.MainHeader}>
        <img src={props.LogoPicture[0].Adress} />
        <NavigationItems/>

    </header>

  )



}

export default Header;