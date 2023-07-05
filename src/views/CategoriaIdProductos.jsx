import { useParams } from 'react-router-dom'
import './style/CategoriaIdProductos.css'
import { useState,useEffect } from 'react';
import OneProduct from '../component/oneProduts/OneProduct';

const CategoriaIdProductos = () =>{

    const [card, setCard] = useState([]);
    const {products} = useParams()
    useEffect(() => {
      fetchGetCard();
    }, []);
    
    
    const fetchGetCard = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${products}`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };

    
    return (
        <div className="contenedor_producto" >
            <OneProduct
            id={card.id}
            titulo={card.title}
            descripcion={card.description}
            precio={card.price}
            imgs={card.images}
            />
        </div>
    )
}


export default CategoriaIdProductos