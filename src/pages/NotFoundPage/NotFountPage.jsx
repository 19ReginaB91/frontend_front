import React from 'react';
import s from './style.module.css'
import image from './notFound.png'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className={s.page}>
            <img className={s.img} src={image} alt="" />
            <p className={s.text} >Oops! The page you're looking for does not exist.</p>
            <Link to="/" className={s.home_btn}>GO BACK!</Link>
        </div>
    );
};

export default NotFoundPage;
