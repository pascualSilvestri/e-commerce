import './style/DetalleCarrito.css'


const DetalleCarrito = ({compra,setCompra})=>{

    console.log(compra)
    return (
        <div className="detalle_compra_contenedor">
            <div className="lista_compra">
                <h2>Detalle de productos a comprar</h2>
                <div className="header_lista_compra">
                    <h3>Id</h3><h3>Nombre</h3><h3>Precio</h3><h3>Cant</h3>
                </div>
                <div className="item_compra">
                    {compra.map(c=>(
                        <div className="row_compra_item" key={c.id} id={c.id}>
                            <p>{c.id}</p><p>{c.title}</p><p>{c.valor}</p><p>{c.cantidad}</p>
                        </div>))}
                </div>
            </div>
            <div className="realizar_pago">

            </div>
            
        </div>
    )

}


export default DetalleCarrito