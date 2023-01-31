import NullTemplates from './null.css';
import style from './App.module.scss'
import Login from "./components/pages/Login/Login";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/privateRoute/privateRoute";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {



    return (
        <div className={style.App}>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path={'/home'} element={<HomePage />} />
                    <Route path={'/profile'} element={''} />
                </Route>
                <Route path={'/'} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
