import React from 'react';
import styles from "./Header.module.css";
import NavigationItems from "./Header-Navigation/NavigationItems";


const Header = (props) => {
  return (
    <header className={styles.MainHeader}>
        <img src="https://img.icons8.com/color/48/000000/confetti.png"/>
        <NavigationItems/>

    </header>

  )



}

export default Header;