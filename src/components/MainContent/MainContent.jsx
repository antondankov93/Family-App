import React from 'react';
import SideBar from '../LeftSideBar/SideBar';
import InsideContent from './InsideContent/InsideContent';
import styles from "./MainContent.module.css"
import FooterMenu from "../FooterMenu/FooterMenu";
import store from "../../Redux/State";


const MainContent = (props) => {

    return (

            <main class={styles.mainContent}>
                <div className={styles.insideContent}>
                    <SideBar/>
                    <InsideContent dispatch={props.dispatch} AvatarLogo={props.AvatarLogo} PostWindow={props.PostWindow } MessagesProps={props.MessagesProps} Persons={props.Persons}/>
                </div>
                <FooterMenu/>

            </main>



    );

}


export default MainContent;