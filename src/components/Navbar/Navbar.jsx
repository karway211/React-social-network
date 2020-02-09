import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="#c">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#c">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#c">News</a>
      </div>
      <div className={s.item}>
        <a href="#c">Music</a>
      </div>
      <div className={s.item}>
        <a href="#c">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;
