import { useState } from 'react';
import CardProductos from '../card/CardProductos.jsx';
import './ContenedorProductos.css';
import { Link } from 'react-router-dom';

const ContenedorProductos = ({ titulo, elementos }) => {
  const [pagina, setPagina] = useState(0);

  const mostrarSiguientes = () => {
    setPagina(pagina + 1);
  };

  const mostrarAnteriores = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };

  const elementosActuales = elementos.slice(pagina * 10, (pagina + 1) * 10);

  return (
    <div className='grilla_contenedor'>
      <h2 className='Titulo Categoria'>{titulo}</h2>
      <div className='categoria_card'>
        {elementosActuales.length > 0 ? (
          <>
            {elementosActuales.map((c) => (
              <Link className='categorial_link' key={c.id} to={`${c.id}`} >
                <CardProductos img={c.images[0]} titulo={c.title} precio={c.price} />
              </Link>
            ))}
            <div className='botones_prodcutos'>
              <button onClick={mostrarAnteriores} disabled={pagina === 0}>
                Anteriores
              </button>
              <button onClick={mostrarSiguientes} disabled={elementosActuales.length < 10}>
                Siguientes
              </button>
            </div>
          </>
        ) : (
          <>
          <h1>No hay productos</h1>
          <div className='botones_prodcutos'>
              <button onClick={mostrarAnteriores} disabled={pagina === 0}>
                Anteriores
              </button>
              <button onClick={mostrarSiguientes} disabled={elementosActuales.length < 10}>
                Siguientes
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContenedorProductos;
