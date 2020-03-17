import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
// import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reducer';

const Dialogs = (props) => {
  let  state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);
  let newMessageBody = state.newMessageBody;

  const onSentMessageClick = () => {
    props.sendMessage();
    // props.store.dispatch(sendMessageCreator());
  }
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
    // props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter Your message'></textarea>
          </div>
          <div>
            <button onClick={ onSentMessageClick }>Add Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
