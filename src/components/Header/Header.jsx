import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={s.header}>
        <img src='http://pngimg.com/uploads/owl/owl_PNG45.png' alt="logo"/>

        <div className={ s.loginBlock }>
          { props.isAuth 
          ? <div> {props.login} - <button onClick={props.logaut}>Log aut</button> </div>
          : <NavLink to='/login'>Login</NavLink> }
          
        </div>
      </header>
    );
};

export default Header;