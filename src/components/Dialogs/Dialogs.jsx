import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const dialogs = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Valera'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Sasha'}
];
const messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'}
]

// [
  //   <DialogItem name={dialogs[0].name} id={dialogs[0].id}/>,
  //   <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>,
  //   <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>,
  //   <DialogItem name={dialogs[3].name} id={dialogs[3].id}/>,
  //   <DialogItem name={dialogs[4].name} id={dialogs[4].id}/>,
  //   <DialogItem name={dialogs[5].name} id={dialogs[5].id}/>
  // ]
  
  
  const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
      <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const dialogsElement = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

const Message = (props) => {
  
  return (
    <div className={s.message}>{props.message}</div>
  );
};
const messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)
  
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;
