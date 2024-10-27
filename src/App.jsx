
import './assets/css/App.css'
import { Login } from './assets/pages/login/Login'
import { New_user } from './assets/pages/login/Components/New_user'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './assets/pages/header/Header'
import { Welcome } from './assets/pages/welcome/Welcome'

function App() {

  return (
    <>

      <HashRouter>
        <Routes>
          {/* <New_user/> */}
          <Route path='/register' element={<New_user/>} />
          <Route path='/' element={<Login/>} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
