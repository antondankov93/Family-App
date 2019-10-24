const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogPersons: [
        {id: 1, name: "Петя"},
        {id: 2, name: 'Катя'},
        {id: 3, name: "Вася"},
        {id: 4, name: "Оля"},],

    MessageData: [
        {id: 1, dataText: "Привки!"},
        {id: 2, dataText: "Как дела!"},
        {id: 3, dataText: "Превед медвед!"},],
}


const MessagePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;

            return stateCopy;
            }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            let stateCopy = {...state}
            stateCopy.newMessageBody = '';
            stateCopy.MessageData = [...state.MessageData];
            stateCopy.MessageData.push({dataText: body});

            return stateCopy;
           }

        default:
            return state;

    }
}


export const sendMessageCreater = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default MessagePageReducer;