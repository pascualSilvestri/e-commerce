import { useEffect } from 'react'
import Search from '../search/Search'
import './Header.css'
import { Link} from 'react-router-dom'
import Carrito from '../carrito/Carrito'
import { useCompra } from '../../context/CompraContext'
import { useGuardadoContext } from '../../context/GuardadoContext'


const links = [
    {'link': '/e-commerce','label': 'Home'},
    {'link': '/categoria','label': 'Categoria'},
    {'link': '/productos','label': 'Productos'},
    
]


const Header = ({filtrar,login,setLogin,setUser,user,getUser})=>{

    const [compra,setCompra] = useCompra()
    const [guardado, setGuardado] = useGuardadoContext()
    
    useEffect(()=>{
        getUser()
    },[])

    useEffect(() => {
        let local = localStorage.getItem('compra');
    
        if (!guardado && local) {
          setCompra(JSON.parse(local));
          setGuardado(true);
        }
      }, [guardado]);

      useEffect(() => {
        if (guardado) {
          localStorage.setItem('compra', JSON.stringify(compra));
        }
      }, [compra, guardado]);

    
    function logout(){
        localStorage.removeItem('access_token')
        localStorage.removeItem('compra')
        setCompra([])
        setLogin(false) 
        setUser([])

    }

    


    
    return(

        <div className="header_contenedor">
            <nav className='header_nav'>
                <ul className="header_ul">
                {
                    links ? links.map(link=>(
                        <li className='header_li' key={link.label}>
                            <Link to={link.link}>{link.label}</Link>
                        </li>
                    ))
                    :(<h1>hola</h1> )
                }
                </ul>
                <Search filtrar={filtrar}/>
                
                <ul className='header_ul_login'>
                {
                    login ? ( <>
                    {user.role === 'admin'? 
                    <>
                        <Link to='/admin'>Admin</Link>
                        <Link onClick={logout} to='/e-commerce'>Loguot</Link>
                    </>
                    :   <Link onClick={logout} to='/e-commerce'>Loguot</Link>
                    }    
                   </>) :(<>
                    <Link to='/login'>Login</Link>
                    <Link to='/registro'>Registrar</Link>
                </>)
                }
                </ul>
                <Carrito compra={compra}/>
            </nav>
        </div>

    )
}


export default Header