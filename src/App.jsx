
import './assets/css/App.css'
import { Login } from './assets/pages/login/Login'
import { New_user } from './assets/pages/login/Components/New_user'
import { Header } from './assets/pages/header/Header'
import { Welcome } from './assets/pages/welcome/Welcome'


function App() {
  
  return (
    <>

   
    {/* <New_user/> */}
    {/*<Login/>*/}
    {/*<Header/>*/}
    <Header/>
    <Welcome/>
    <Login/>
    <New_user/>
  
    </>
  )
}

export default App
