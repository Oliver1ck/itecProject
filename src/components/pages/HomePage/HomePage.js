import React, {useState} from 'react';
import style from './HomePage.module.scss'
import AsideAboutCourse from "../../Aside/AsideAboutCourse/AsideAboutCourse";
import Header from "../../Header/Header";
import Main from "../../Main/Main";
import arrow from '../../../image/icons/whiteArrow.svg'
import LessonsList from "../../LessonsList/LessonsList";
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "../../../store/toolkitReducer";

const HomePage = () => {
    const [contentCourse, setContentCourse] = useState(true)
    const [yoda, setYoda] = useState(false)


    const count = useSelector(state => state.toolkit.count)
    const dispatch = useDispatch()

    return (
        <div className={style.homePage}>
            <Header />
            <div className={style.homePageWrapper}>
                <AsideAboutCourse setYoda={setYoda} setContent={setContentCourse} />
                {contentCourse ?
                <Main>
                    <div className={style.title}>
                        Содержание курса
                    </div>
                    <div className={style.newLesson}>
                        <div className={style.lessonItem}>
                            <p>
                                Начать новый урок
                            </p>
                            <div className={style.imgWrap}>
                                <img src={arrow} alt={arrow}/>
                            </div>
                        </div>
                        <div className={style.lessonText}>
                            Книга обязательна к прочтению
                        </div>
                    </div>
                    <div className={style.lessonsListWrap}>
                        <LessonsList />
                    </div>
                </Main>
                : ''
                }
                {yoda ?
                    <Main>
                        <p style={{color:"black"}}>Yoda</p>
                        <p onClick={() => dispatch(decrement())}>decrement</p>
                        <p onClick={() => dispatch(increment())}>increment</p>
                        <p>{count}</p>
                    </Main>
                    : ''
                }
            </div>
        </div>
    );
};

export default HomePage;