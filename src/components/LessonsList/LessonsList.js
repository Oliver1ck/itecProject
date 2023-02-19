import React from 'react';
import style from './LessonsList.module.scss'

const LessonsList = () => {
    return (
        <ul className={style.list}>
            <div className={style.listTitle}>
                Добро пожаловать!
            </div>
            <li className={style.listItem}>
                <div className={style.listItemAbout}>
                    <div className={style.status}>
                        <img src={''} alt={''}/>
                    </div>
                    <div className={style.about}>
                        <div className={style.imgWrap}>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.text}>
                            Книга ...............
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default LessonsList;