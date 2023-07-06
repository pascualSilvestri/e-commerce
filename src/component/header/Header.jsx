import Search from '../search/Search'
import './Header.css'
import { Link} from 'react-router-dom'


const links = [
    {'link': '/','label': 'Home'},
    {'link': '/categoria','label': 'Categoria'},
    {'link': '/productos','label': 'Productos'},
]



const Header = ({filtrar,login,setLogin})=>{

    
    function logout(){
        setLogin(!login) 
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
                    !login ? (<li className='header_li_login'>
                    <Link to='/login'>Login</Link>
                    <Link to='/registro'>Registrar</Link>
                </li>):( <li className='header_li_login'>
                    <Link onClick={logout} to='/registro'>Loguot</Link>
                   </li>)
                }
                    
                  
                    
                </ul>
            </nav>
        </div>

    )
}


export default Header