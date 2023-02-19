import React, {useEffect, useState} from 'react';
import style from './AsideAboutCourse.module.scss'
import asidePhoto from '../../../image/asidePhoto.jpg'
import contentCourseIcon from '../../../image/icons/contentCourseIcon.svg'
import contentCourseIconActive from '../../../image/iconsActive/contentCourseIconActive.svg'
import personal from '../../../image/icons/Personnel.svg'
import {NavLink} from "react-router-dom";

const AsideAboutCourse = ({setContent, setYoda}) => {

    const [imageState,setImageState] = useState(false)

    return (
        <div className={style.asideWrapper}>
            <div className={style.asideImageWrapper}>
                <img src={asidePhoto} alt=""/>
            </div>
            <div className={style.asideContent}>
                <div className={style.asideTitle}>
                    Крутой Чэл
                </div>
                <div className={style.asideProgressBar}>
                    <div className={style.progress}></div>
                </div>
                <div className={style.progressTitle}>
                    <span>45%</span> завершено
                </div>
                <div className={style.progressSubTitle}>
                    Доступно до ...
                </div>
            </div>
            <div className={style.asideContentLine}></div>
            <div className={style.asideService}>
                <ul className={style.asideServiceList}>
                    <li className={style.asideListItem}>
                        <div className={style.asideListItemWrapper} onClick={() => { setContent(true); setYoda(false) }} onMouseOut={() => setImageState(false)} onMouseOver={(e) => {setImageState(true)}}>
                                <div className={style.listItemImage}>
                                    <img src={imageState ? contentCourseIconActive : contentCourseIcon} alt={contentCourseIcon}/>
                                </div>
                                <div className={style.listItemTitle}>
                                    Содержание курса
                                </div>
                            </div>
                    </li>
                    <li className={style.asideListItem}>
                        <div className={style.asideListItemWrapper} onClick={() => {
                            setYoda(true);
                            setContent(false)
                        }}>
                                <div className={style.listItemImage}>
                                    <img src={personal} alt={personal}/>
                                </div>
                                <div className={style.listItemTitle}>
                                    Твой YODA
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AsideAboutCourse;