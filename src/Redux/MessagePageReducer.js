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

        case SEND_MESSAGE: {

            let body = action.newMessageBody;
            return {
                ...state,
                MessageData: [...state.MessageData, {dataText: body}],
            }
        }

        default:
            return state;

    }
}


export const sendMessageCreater = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default MessagePageReducer;