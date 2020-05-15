import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import photo from '../../../assets/images/photo.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }
    return (
      <div>
        <div className={s.way}>
          <img src="https://st2.depositphotos.com/1046670/5401/i/450/depositphotos_54014113-stock-photo-eagle.jpg" alt="img"/>
        </div>
        <div className={s.avatar}>
          <img src={profile.photos.large || photo} alt="img"/>
          <div className={s.description}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          </div>
        </div>
      </div>
    );
};

export default ProfileInfo;
