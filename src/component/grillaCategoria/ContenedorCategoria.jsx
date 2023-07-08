import Card from '../card/Card'
import './ContenedorCategoria.css'
import { Link } from 'react-router-dom'
import Eliminar from '../eliminarProducto/Eliminar';



const ContenedorCategoria =({titulo,elementos,user})=>{

    return (
    <div className='grilla_contenedor'>
        <h2 className='Titulo Categoria'>{titulo}</h2>
        <div className='categoria_card'>
            {user.role === 'admin' ? (
                elementos ? elementos.map(c =>(<div key={c.id}  className='card_contenedor'>
                    <Link className='categorial_link' to={`${c.id}`}>
                    <Card 
                    key={c.id}
                    categoria={c.name}
                    img={c.image}
                    id={c.id}
                    />
                    </Link>
                     <Eliminar url='https://api.escuelajs.co/api/v1/categories/'
                     id={c.id}/>
                     </div>
                )):
                ( <h1>Cargandooooooo</h1> )):(
                    elementos ? elementos.map(c =>(<div key={c.id}  className='card_contenedor'>
                    <Link className='categorial_link' to={`${c.id}`}>
                    <Card 
                    key={c.id}
                    categoria={c.name}
                    img={c.image}
                    id={c.id}
                    />
                    </Link>
                     </div>
                )):
                ( <h1>Cargandooooooo</h1> )
                )
            }
        </div>
    </div>
    )
}


export default ContenedorCategoria