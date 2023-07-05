import ContenedorCategoria from '../component/grillaCategoria/ContenedorCategoria'
import './style/Categoria.css'

const Categoria = ({categorias})=>{

    return (
        <div className="categoriaContendor">
            <ContenedorCategoria titulo={'Categorias'} elementos={categorias}/>
        </div>
    )

}


export default Categoria