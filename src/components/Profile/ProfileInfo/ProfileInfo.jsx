import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div className={s.way}>
          <img src="https://st2.depositphotos.com/1046670/5401/i/450/depositphotos_54014113-stock-photo-eagle.jpg" alt="img"/>
        </div>
        <div className={s.avatar}>
          <img src="https://2krota.ru/wp-content/uploads/2019/02/0_i-1.jpg" alt="img"/> + descr
        </div>
      </div>
    );
};

export default ProfileInfo;
