import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import photo from '../../../assets/images/photo.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import { ProfileType, ContactsType } from '../../../types/types';
// import ReactPhoto from '../../../assets/images/React-icon.png';

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    // todo: remove then
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
    return (
      <div>
        {/* <div className={s.way}>
          <img src={ReactPhoto} alt="img"/>
        </div> */}
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

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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
        <b>Contacts</b>:{Object
          .keys(profile.contacts)
          .map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
        })}
      </div>
    </div>
  )
}

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>
}

export default ProfileInfo;
