import React from 'react';
import DialogsWith from "./DialogsWith";



const DialogsWithConatiner = (props) => {
debugger
    let store = props.store.getState().MessagesPage;

    return (
        <div>
           <DialogsWith store={store}/>
        </div>
    )

}


export default DialogsWithConatiner;