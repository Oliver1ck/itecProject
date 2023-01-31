import React from 'react';
import style from './HomePage.module.scss'
import AsideAboutCourse from "../../Aside/AsideAboutCourse/AsideAboutCourse";
import Header from "../../Header/Header";

const HomePage = () => {

    return (
        <div className={style.homePage}>
            <Header />
            <div className={style.homePageWrapper}>
                <AsideAboutCourse />
            </div>
        </div>
    );
};

export default HomePage;