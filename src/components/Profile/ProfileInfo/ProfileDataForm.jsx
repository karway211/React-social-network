import React from 'react';
import { createField, Element } from '../../common/FormControls/FormControls';
import s from './ProfileInfo.module.css';
import style from './../../../components/common/FormControls/FormControls.module.css'

import { reduxForm } from 'redux-form';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  const Input = Element('input');
  const Textarea = Element('textarea');
  return (
    <form className={s.description} onSubmit={handleSubmit}>
      <div><button>save</button></div>
      {error && <div className={style.formSammaryError}>
          {error}
        </div>}
      <div>
        <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
      </div>
      <div>
        <b>My professional skills</b>: { createField('My professional skills', 'lookingForAJobDescription', [], Textarea) }
      </div>
      <div>
        <b>About me</b>: { createField('About me', 'aboutMe', [], Textarea) }
      </div>
      <div>
        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <div key={key} className={s.contact}>
            <b>{key}: </b>{createField(key, `contacts.${key}`, [], Input)}
          </div>
        })}
      </div>
    </form>
  )
}

const ProfileDataRedaxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataRedaxForm;
