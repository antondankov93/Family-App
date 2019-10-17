import React from 'react';
import PriorityInfoComponent from "./Priority information component/PriorityInfoComponent";
import style from './PriorityInfo.module.css'
import Events from "../Events/events-template";



const PriorityInfo = () => {
    return (

        <div className={style.PriorityInfo}>
            <PriorityInfoComponent/>

            {/*<Route path='/Events/events-template' component={Events}/>*/}
            {/*<Route path='/Contacts/contacts-template' component={Contacts}/>*/}
            {/*<Route path='/Family-Calendar/calendar-template' component={Calendar}/>*/}
            {/*<Route path='/TODO-lists/todo-list-template' component={TodoList}/>*/}
            {/*<Route path='/My-Messages/Messages-template' component={Messages}/>*/}
            {/*<Route path='/My-Profile/MyPosts/Post' component={Post}/>*/}



        </div>
    )
}

export default PriorityInfo;