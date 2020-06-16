import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Sasha'}
  ] as Array<DialogType>,

  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}
  ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch(action.type) {
    
    case 'SN/DIALOGS/SEND-MESSAGE':
      let message = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 7, message}]
      };
    default:
      return state;
  }
  
};

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
