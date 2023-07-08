import { useParams } from 'react-router-dom';
import './style/CategoriaIdProductos.css';
import { useState, useEffect } from 'react';
import OneProduct from '../component/oneProduts/OneProduct';

const CategoriaIdProductos = ({ addCompra, user }) => {
  const [card, setCard] = useState({
    id: '',
    titulo: '',
    descripcion: '',
    precio: 0,
    imgs: []
  });
  const { products } = useParams();

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
    <div className="contenedor_producto">
      <OneProduct card={card} addCompra={addCompra} user={user} />
    </div>
  );
};

export default CategoriaIdProductos;
