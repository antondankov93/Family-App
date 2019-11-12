import React from 'react';
import s from "./Header.module.css";
import NavigationItems from "./Header-Navigation/NavigationItems";
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
    <header className={s.MainHeader}>
        <img src="https://img.icons8.com/color/48/000000/confetti.png"/>
        <NavigationItems/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Log out</button></div> : <NavLink className={s.login} to={'/login'}>Login</NavLink>}
        </div>
    </header>

  )



}

export default Header;