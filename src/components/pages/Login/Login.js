import React from 'react';
import style from './Login.module.scss'
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Logo from '../../../image/itecLogo.png'
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className={style.formWrapper}>
            <div className={style.formLogo}>
                <img src={Logo} alt={Logo}/>
            </div>
            <form method={'POST'} className={style.loginForm}>
                <Input placeholder={'Введите логин'}/>
                <Input placeholder={'Введите пароль'}/>
                <NavLink to={'/home'}>
                    <Button text={'Войти'}/>
                </NavLink>
            </form>
        </div>
    );
};

export default Login;