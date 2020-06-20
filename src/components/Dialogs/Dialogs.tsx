import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { Element, createField } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { InitialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
  dialogsPage: InitialStateType
  sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
  newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
  let  state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);

  const addNewMessage = (values: NewMessageFormValuesType) => {
    props.sendMessage(values.newMessageBody);
  }

  // if(!props.isAuth) return <Redirect to={'/login'} />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElement }
      </div>
      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}

type NewMessageFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type PropsFormType = {}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsFormType> & PropsFormType> = (props) => {
  const Textarea = Element('textarea');
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesTypeKeys>('Enter Your message', 'newMessageBody', [required, maxLength100], Textarea)}
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
