import React from 'react';
import style from './Login.module.scss'
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Logo from '../../../image/itecLogo.png'

const Login = () => {
    return (
        <div className={style.formWrapper}>
            <div className={style.formLogo}>
                <img src={Logo} alt={Logo}/>
            </div>
            <form method={'POST'} className={style.loginForm}>
                <Input placeholder={'Введите логин'}/>
                <Input placeholder={'Введите пароль'}/>
                <Button text={'Войти'}/>
            </form>
        </div>
    );
};

export default Login;