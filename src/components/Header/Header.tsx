import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logaut: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
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
