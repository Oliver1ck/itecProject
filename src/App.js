import NullTemplates from './null.css';
import style from './App.module.scss'
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <div className={style.App}>
      <Login />
    </div>
  );
}

export default App;
