import React from 'react';
import s from './../Dialogs.module.css';

type PropsType = {
  message: string
  key: number
  id: number
}

const Message: React.FC<PropsType> = (props) => {
  
  return (
    <div className={s.message}>{props.message}</div>
  );
};

export default Message;
