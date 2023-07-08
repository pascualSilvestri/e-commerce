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
import { useState,useEffect } from 'react'
import CategoriaIdProductos from './views/CategoriaIdProductos'
import NoFound from './views/NoFound'
import Admin from './views/Admin'


function App() {

  const [productos, setProductos] = useState([])
  const [categoria, setCategoria] = useState([])
  const [user,setUser] = useState([])
  const [login, setLogin] = useState(false)
  const [compra, setCompra] = useState([])


  useEffect(()=>{
    isLogeado();
  },[])
  
 
  useEffect(() => {
    fetchGetProductos();
  }, []);

  useEffect(() => {
    fetchGetCategoria();
  }, []);


  async function getUser() {
    const tokenLocal = localStorage.getItem('access_token');
    const token = JSON.parse(tokenLocal);
    const header = {
      Authorization: `Bearer ${token.access_token}`
    };
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: header
    });
    const data = await response.json();
    setUser(data);
  }
  
  function isLogeado(){
    const tokens = localStorage.getItem('access_token')
    if(tokens !=null){
      setLogin(true)
    }
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
  

  const addCompra = (id,title,valor,cantidad) => {
    const nuevaCompra = {id,title,valor,cantidad};
    
    setCompra([...compra, nuevaCompra]);
    console.log(compra);
  };
  
  

  return (
    <>
    <BrowserRouter>
    <Header 
    filtrar={filtrarProducto} 
    login={login} 
    setLogin={setLogin} 
    setUser={setUser} 
    user={user} 
    getUser={getUser}
    compra={compra}
    />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/categoria/' element={<Categoria categorias={categoria} user={user}/>} />
        <Route path='/categoria/:id' element={<CategoriaId/>} />
        <Route path='/categoria/:id/:products' element={<CategoriaIdProductos addCompra={addCompra} />} />
        <Route path='/productos' element={<Productos productos={productos} user={user}  />} />
        <Route path='/productos/:id' element={<Producto addCompra={addCompra} user={user}/>} />
        <Route path='/login' element={<Login setLogin={setLogin} login={login} getUser={getUser} />} />
        <Route path='/registro' element={<Registro login={login}/>}/>
        <Route path='/admin' element={<Admin user={user}/>} />
        <Route path='/crearproducto' element={<CrearProducto categorias={categoria}/>} />
        <Route path='/editarproducto' element={<EditarProducto productos={productos}/>} />
        <Route path='/crearcategoria' element={<CrearCategoria />} />
        <Route path='/detallecompra' element={<DetalleCarrito compra={compra} setCompra={setCompra} />} />
        <Route path='*' element={<NoFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
