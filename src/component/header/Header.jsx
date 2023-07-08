import { useEffect } from 'react'
import Search from '../search/Search'
import './Header.css'
import { Link} from 'react-router-dom'
import Carrito from '../carrito/Carrito'


const links = [
    {'link': '/','label': 'Home'},
    {'link': '/categoria','label': 'Categoria'},
    {'link': '/productos','label': 'Productos'},
    
]


const Header = ({filtrar,login,setLogin,setUser,user,getUser,compra})=>{

    
    useEffect(()=>{
        getUser()
    },[])

    function logout(){
        setLogin(false) 
        setUser([])
        localStorage.removeItem('access_token')
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
                        <Link onClick={logout} to='/'>Loguot</Link>
                    </>
                    :   <Link onClick={logout} to='/'>Loguot</Link>
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