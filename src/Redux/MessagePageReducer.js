const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const MessagePageReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessageData.push({dataText: body});
            return state;

        default:
            return state;
        }

    }

export const sendMessageCreater = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default MessagePageReducer;