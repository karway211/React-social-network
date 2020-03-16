import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = (props) => {
  
  return <StoreContext.Consumer> 
    {
      (store) => {
        let  state = store.getState().dialogsPage;
        const onSentMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        const onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSentMessageClick} 
                        dialogsPage={state} />;
      }
  }
  </StoreContext.Consumer>
}

export default DialogsContainer;
