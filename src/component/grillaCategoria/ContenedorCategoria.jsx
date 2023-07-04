import Card from '../card/Card'
import './ContenedorCategoria.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'



const ContenedorCategoria =()=>{
    const [card, setCard] = useState([]);

    useEffect(() => {
      fetchGetCard();
    }, []);
  
    const fetchGetCard = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
    <div className='grilla_contenedor'>
        <h2 className='Titulo Categoria'>Categoria</h2>
        <div className='categoria_card'>
            {
                card ? card.map(c =>(
                    <Link className='categorial_link' key={c.id} to={`categoria/${c.id}`}>
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