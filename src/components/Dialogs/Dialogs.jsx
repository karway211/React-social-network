import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Element } from '../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
  let  state = props.dialogsPage;
  let dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if(!props.isAuth) return <Redirect to={'/login'} />
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

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  const Textarea = Element('textarea');
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name='newMessageBody' component={Textarea} validate={[required, maxLength100]}  placeholder='Enter Your message' />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;