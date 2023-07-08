import { useState } from 'react'
import Eliminar from '../eliminarProducto/Eliminar'
import './OneProduct.css'



const OneProduct = ({ card, addCompra, user }) => {

    const [cantidad, setCantidad] = useState(1)
    let valor = 0


    const masCantidad = () => {
        setCantidad(cantidad + 1);
    }

    const menosCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }


    const sumarCarrito = () => {
        valor = card.price * cantidad
        if (isNaN()) {
            addCompra(card.id, card.title, valor, cantidad)
        }

    }



    return (
        <div className="one_product">
            <div className="imgs_one_product">
                {
                    card.images ? card.images.map((item) => (
                        <img key={card.id} className='img_one_products' src={item} alt="" />
                    )) : (<h1>Cargandooo</h1>)
                }
            </div>
            <div className='text_one_product'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <p className='precio_one_products'>${card.price}</p>
                <div className="btn_cantidad">
                    <button onClick={menosCantidad}>-</button><span>{cantidad}</span><button onClick={masCantidad}>+</button>
                </div>
                <div className="btn_one_product">
                    {
                        user.role === 'admin' ? (
                            <>
                                <Eliminar url='https://api.escuelajs.co/api/v1/products/' id={card.id} />
                                <button onClick={sumarCarrito} type='submit'>Comprar Ahora!</button></>
                        ) : (<>
                            <button onClick={sumarCarrito} type='submit'>Comprar Ahora!</button>
                        </>)
                    }

                </div>

            </div>

        </div>
    )
}


export default OneProduct