import React from 'react';
import preloader from './../../../assets/images/Spin.svg';
import styles from './Preloader.module.css';

const Preloader = (props) => {
    return <img src={preloader} className={styles.preloader} alt='preloader'/>
}

export default Preloader;
