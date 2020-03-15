import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let  state = props.store.getState().dialogsPage;

  const onSentMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSentMessageClick} 
  dialogsPage={state} />;
}

export default DialogsContainer;
