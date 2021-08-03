import React from 'react';
import s from './Header.module.css';
import image from './image/header.png';

export const Header = () => {
    return <div className={s.header}>
        <span className={s.logo}>SokelovA</span>
        <img className={s.img} src={image} />
    </div>
}
