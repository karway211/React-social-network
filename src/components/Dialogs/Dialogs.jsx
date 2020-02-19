import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

// const dialogs = [
//   {id: 1, name: 'Andrey'},
//   {id: 2, name: 'Dima'},
//   {id: 3, name: 'Sveta'},
//   {id: 4, name: 'Valera'},
//   {id: 5, name: 'Victor'},
//   {id: 6, name: 'Sasha'}
// ];
// const messages = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'How are you'},
//   {id: 3, message: 'Yo'},
//   {id: 4, message: 'Yo'},
//   {id: 5, message: 'Yo'},
//   {id: 6, message: 'Yo'}
// ]

// [
  //   <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
  //   <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
  //   <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
  //   <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>,
  //   <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>,
  //   <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
  // ]

  
  
const Dialogs = (props) => {
    const dialogsElement = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} id={m.id} />);
    let newDialogsElement = React.createRef();
    const addDialogs = () => {
      props.dispatch({type: 'ADD-DIALOGS'});
    }
    const onDialogsChange = () => {
      let text = newDialogsElement.current.value;
      props.dispatch({type: 'UPDATE-NEW-DIALOGS-TEXT', newDialogs: text});
    }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
      <div>
        <textarea onChange={onDialogsChange} ref={ newDialogsElement } value={props.dialogsPage.newDialogsText}></textarea>
      </div>
      <div>
        <button onClick={ addDialogs }>Add Post</button>
      </div>
    </div>
  );
}

export default Dialogs;
