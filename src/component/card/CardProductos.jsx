import './CardProductos.css'




const CardProductos =({img,titulo,precio})=>{    

    return (
        <div className='card_producto'>
            <img className='img_producto' src={img} alt="imagen producto"/>
            <div className='text_contenedor_producto'>
                <h3 className='titulo_producto'>{titulo}</h3>
                <p><span>$</span>{precio}</p>
                <button type="submit">Ver producto</button>
            </div>
            
        </div>
    )
}



export default CardProductos