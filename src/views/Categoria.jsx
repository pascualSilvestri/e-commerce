import ContenedorCategoria from '../component/grillaCategoria/ContenedorCategoria'
import './style/Categoria.css'

const Categoria = ({categorias,user})=>{

    return (
        <div className="categoriaContendor">
            <ContenedorCategoria titulo={'Categorias'} elementos={categorias} user={user}/>
        </div>
    )

}


export default Categoria