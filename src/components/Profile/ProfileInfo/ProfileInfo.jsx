import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import photo from '../../../assets/images/photo.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = e => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    }).catch(() => null);
  };
    return (
      <div>
        <div className={s.way}>
          <img src="https://st2.depositphotos.com/1046670/5401/i/450/depositphotos_54014113-stock-photo-eagle.jpg" alt="img"/>
        </div>
        <div className={s.avatar}>
          <div>
            <img src={profile.photos.large || photo} alt="img"/>
            <div>
              {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
          </div>
          <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            {editMode
              ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
              : <ProfileData goToEditMode={() => {setEditMode(true)}} isOwner={isOwner} profile={profile} />}
          </div>
        </div>
      </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div className={s.description}>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {profile.lookingForAGob &&
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>
}

export default ProfileInfo;
