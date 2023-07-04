import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home.jsx'
import Categoria from './views/Categoria'
import Productos from './views/Productos'
import Login from './views/Login'
import Registro from './views/Registro'
import Header from './component/header/Header'



function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categoria' element={<Categoria/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
