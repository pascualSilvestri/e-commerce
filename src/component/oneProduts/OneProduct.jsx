import './OneProduct.css'



const OneProduct=({id,titulo,descripcion,precio,imgs})=>{
    return(
        <div className="one_product">
            <div className="imgs_one_product">
                {
                    imgs ? imgs.map((item)=>(
                        <img key={id} className='img_one_products' src={item} alt="" />
                    )):(<h1>Cargandooo</h1>)
                }
            </div>
            <div className='text_one_product'>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p className='precio_one_products'>${precio}</p>
                <button type='submit'>Comprar Ahora!</button>
            </div>

        </div>
    )
}


export default OneProduct