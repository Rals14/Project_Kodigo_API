import './assets/css/App.css'
import { Login } from './assets/pages/login/Login'
import { New_user } from './assets/pages/login/Components/New_user'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from './assets/pages/welcome/Welcome'

import { CreateBootcamp } from './assets/pages/Bootcamps/Components/CreateBootcamp';
import { Bootcamps } from './assets/pages/Bootcamps/Bootcamps';
import { Home } from './assets/pages/Home-principal/Home';
import { EditBootcamp } from './assets/pages/Bootcamps/Components/EditBootcamp';


function App() {

  return (
    <>

      <HashRouter>

     

        <Routes>
         
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<New_user/>} />
          <Route path='/create' element={<CreateBootcamp/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/bootcamps' element={<Bootcamps/>}/>
          <Route path='/edit' element={<EditBootcamp/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
