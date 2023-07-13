import './style/Admin.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useUserContext } from "../context/UserContext";

const Admin = () =>{
    const [user] = useUserContext()
    const navegate = useNavigate()
        
    if(user.role !=='admin'){
        navegate('/')
    }

    return(
        <div className="admin_contenedor">
            <div className="display_option">
                <h2>Panel de control</h2>
                <div className="contenedor_btn">
                    <Link to='/crearcategoria'>Crear nuevo categoria</Link>
                    <Link to='/crearproducto'>Crear nuevo producto</Link>
                    <Link to='/editarproducto'>Editar producto</Link>                    
                </div>
            </div>
        </div>
    )
}


export default Admin