import Card from '../card/Card'
import './ContenedorCategoria.css'
import { Link } from 'react-router-dom'



const ContenedorCategoria =({titulo,elementos})=>{

    return (
    <div className='grilla_contenedor'>
        <h2 className='Titulo Categoria'>{titulo}</h2>
        <div className='categoria_card'>
            {
                elementos ? elementos.map(c =>(
                    <Link className='categorial_link' key={c.id} to={`${c.id}`}>
                    <Card 
                    key={c.id}
                    categoria={c.name}
                    img={c.image}
                    />
                    </Link>
                )):
                ( <h1>Cargandooooooo</h1> )
            }
        </div>
    </div>
    )
}


export default ContenedorCategoria