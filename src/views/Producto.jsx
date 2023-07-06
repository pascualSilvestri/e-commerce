import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import './style/Producto.css'
import OneProduct from "../component/oneProduts/OneProduct";


const Producto = ()=>{
    const [card, setCard] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      fetchGetCard();
    }, []);
  
    const fetchGetCard = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };

    console.log(card)
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


export default Producto