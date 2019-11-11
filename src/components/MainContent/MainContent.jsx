import React from 'react';
import SideBar from '../LeftSideBar/SideBar';
import InsideContent from './InsideContent/InsideContent';
import s from "./MainContent.module.css"
import FooterMenu from "../FooterMenu/FooterMenu";
import store from "../../Redux/Store";


const MainContent = () => {

    return (

            <main className={s.mainContent}>
                <div className={s.insideContent}>
                    <SideBar/>
                    <InsideContent/>
                </div>
                <FooterMenu/>

            </main>


    );

}


export default MainContent;