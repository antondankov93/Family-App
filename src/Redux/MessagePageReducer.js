const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const MessagePageReducer = (state, action) => {


    if (action.type === UPDATE_NEW_MESSAGE_BODY){
        state.newMessageBody = action.body;
    }

    else if (action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.MessageData.push({dataText: body});
    }

    return state
}

export default MessagePageReducer;