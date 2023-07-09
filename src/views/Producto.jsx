import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import './style/Producto.css'
import OneProduct from "../component/oneProduts/OneProduct";


const Producto = ({user})=>{
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

    
    return (
        <div className="contenedor_producto" >
            <OneProduct
            card={card}
            user={user}
            />
        </div>
    )

}


export default Producto