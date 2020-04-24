
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  
  dialogs: [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Sasha'}
  ],

  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ],
};

const dialogsReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case SEND_MESSAGE:
      let message = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 7, message}]
      };
    default:
      return state;
  }
  
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
