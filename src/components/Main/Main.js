import React from 'react';
import style from './Main.module.scss'

const Main = ({ children }) => {
    return (
        <main>
            <div className={style.mainWrapper}>
                {children}
            </div>
        </main>
    );
};

export default Main;