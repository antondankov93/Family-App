import React from 'react';
import SideBar from '../LeftSideBar/SideBar';
import InsideContent from './InsideContent/InsideContent';
import styles from "./MainContent.module.css"
import FooterMenu from "../FooterMenu/FooterMenu";
import store from "../../Redux/Store";


const MainContent = () => {

    return (

            <main class={styles.mainContent}>
                <div className={styles.insideContent}>
                    <SideBar/>
                    <InsideContent/>
                </div>
                <FooterMenu/>

            </main>


    );

}


export default MainContent;