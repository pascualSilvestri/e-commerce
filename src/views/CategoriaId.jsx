import { useParams } from 'react-router-dom';
import './style/CategoriaId.css'
import { useEffect,useState } from 'react';
import ContenedorProductos from '../component/grillaProductos/contenedorProductos';

const CategoriaId = ()=>{
    // https://api.escuelajs.co/api/v1/categories/1/products

    const [card, setCard] = useState([]);

    const {id} = useParams()


    useEffect(() => {
      fetchGetCard();
    }, []);
  
    const fetchGetCard = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div className="categoriaContendor">
            <ContenedorProductos
            titulo={`Prodcutos`}
            elementos={card}
            />
        </div>
    )

}


export default CategoriaId