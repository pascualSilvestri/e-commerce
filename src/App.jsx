import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home.jsx'
import Categoria from './views/Categoria'
import CategoriaId from './views/CategoriaId'
import Productos from './views/Productos'
import Producto from './views/Producto'
import Login from './views/Login'
import Registro from './views/Registro'
import Header from './component/header/Header'
import CrearProducto from './views/CrearProducto'
import EditarProducto from './views/EditarProducto'
import CrearCategoria from './views/CrearCategoria'
import DetalleCarrito from './views/DetalleCarrito'
import CategoriaIdProductos from './views/CategoriaIdProductos'
import NoFound from './views/NoFound'
import Admin from './views/Admin'
import CompraFinalizada from './views/CompraFinalizada'
import { useState,useEffect } from 'react'
import { CompraProvider } from './context/CompraContext'
import { ProductoProvider } from './context/ProductosContext'
import { SearchProvide } from './context/SearchContext'
import { CategoriaProvide } from './context/CategoriaContext'
import { GuardarProvide } from './context/GuardadoContext'
import { UserProvider } from './context/UserContext'


function App() {
  
  // const [user,setUser] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(()=>{
    isLogeado();
  },[])

  // async function getUser() {
  //   const tokenLocal = localStorage.getItem('access_token');
  //   const token = JSON.parse(tokenLocal);
  //   const header = {
  //     Authorization: `Bearer ${token.access_token}`
  //   };
  //   const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
  //     headers: header
  //   });
  //   const data = await response.json();
  //   setUser(data);
  // }
  
  function isLogeado(){
    const tokens = localStorage.getItem('access_token')
    if(tokens !=null){
      setLogin(true)
    }
  }
  

  return (
    <>
    <UserProvider>
    <GuardarProvide>
    <SearchProvide>
    <CategoriaProvide>
    <ProductoProvider>
    <CompraProvider>
    <BrowserRouter>
    <Header 
    login={login} 
    setLogin={setLogin} 
    />
      <Routes>
        <Route path='/e-commerce/' element={<Home/>} />
        <Route path='/categoria/' element={<Categoria />} />
        <Route path='/categoria/:id' element={<CategoriaId/>} />
        <Route path='/categoria/:id/:products' element={<CategoriaIdProductos />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<Producto />} />
        <Route path='/login' element={<Login setLogin={setLogin} login={login}  />} />
        <Route path='/registro' element={<Registro login={login}/>}/>
        <Route path='/admin' element={<Admin />} />
        <Route path='/crearproducto' element={<CrearProducto />} />
        <Route path='/editarproducto' element={<EditarProducto /*productos={productos}*//>} />
        <Route path='/crearcategoria' element={<CrearCategoria />} />
        <Route path='/detallecompra' element={<DetalleCarrito  />} />
        <Route path='/comprafinalizada' element={<CompraFinalizada/>} />
        <Route path='*' element={<NoFound/>}/>
      </Routes>
    </BrowserRouter>
    </CompraProvider>
    </ProductoProvider>
    </CategoriaProvide>
    </SearchProvide>
    </GuardarProvide>
    </UserProvider>
    </>
  )
}

export default App
