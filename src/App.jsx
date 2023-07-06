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
import { useState,useEffect } from 'react'
import CategoriaIdProductos from './views/CategoriaIdProductos'
import NoFound from './views/NoFound'




function App() {

  const [productos, setProductos] = useState([])
  const [categoria, setCategoria] = useState([])
  const [isLogin, setIsLogin] = useState([])
  const [login, setLogin] = useState(false)

  useEffect(()=>{
    isLogeado();
  },[isLogin])

  console.log(isLogin)
  
  useEffect(() => {
    fetchGetProductos();
  }, []);

  useEffect(() => {
    fetchGetCategoria();
  }, []);

  function isLogeado(){
    const tokens = localStorage.getItem('access_token')
    if(tokens != 0 ){
      setLogin(true)
    }
    setIsLogin(tokens)
  }

  function filtrarProducto(arg) {
    const filtrado = productos.filter(e => (
      e.title.toLowerCase().includes(arg.toLowerCase()) ||
      e.category.name.toLowerCase().includes(arg.toLowerCase())
    ));

    if (arg === '') {
      fetchGetProductos();
    } else {
      setProductos(filtrado);
    }
  }
  
  const fetchGetProductos = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGetCategoria = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data = await response.json();
      setCategoria(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <BrowserRouter>
    <Header filtrar={filtrarProducto} login={login} setLogin={setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categoria/' element={<Categoria categorias={categoria}/>} />
        <Route path='/categoria/:id' element={<CategoriaId/>} />
        <Route path='/categoria/:id/:products' element={<CategoriaIdProductos/>} />
        <Route path='/productos' element={<Productos productos={productos}/>} />
        <Route path='/productos/:id' element={<Producto/>} />
        <Route path='/login' element={<Login setLogin={setLogin} login={login}/>} />
        <Route path='/registro' element={<Registro login={login}/>}/>
        <Route path='*' element={<NoFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
