import { useState } from "react"
import './style/EditarProducto.css'
import { useProductoContext } from "../context/ProductosContext"


const EditarProducto = ()=>{
    const [productos] = useProductoContext()
    
    const [prod, setProd] = useState([])
    const [produts, setProduts] = useState([])
    const [titulo, setTitulo] = useState('')
    const [precio, setPrecio] = useState('')

    const handleRow = (e) =>{
        setProd(e.target.parentNode)
    }

    const buscarProducto = ()=>{
        const producto = productos.filter(p => p['id'] == prod.getAttribute('id'))
        setTitulo(producto[0].title)
        setPrecio(producto[0].price)
        setProduts(producto)
    }

    const handleInput = (e) =>{
        if(e.target.name === 'titulo'){
            setTitulo(e.target.value)
        }

        if(e.target.name === 'precio'){
            setTitulo(e.target.value)
        }     
    }


    const updateProducto = async(e) =>{
        e.preventDefault();

        try {
            const respon = fetch(`https://api.escuelajs.co/api/v1/products/${produts[0].id}`,{
            method : 'PUT',
            headers: {'Content-Type': 'application/json'},
            body   : JSON.stringify({ title  : titulo , price    : precio})
            })

            if(respon.ok){
                const data = await respon.json
                console.log(data)
            }else{
                const data = await respon.json
                console.log(data)
            }

        } catch (error) {
            console.log(error)
        }
        
    
    }
    return (
        <div className="editar_producto_contenedor">
            <div className="editar_produtos_table">
                <h2>Lista de productos</h2>
                <div className="titulos_editar_productos">
                        <h3>Id</h3>
                        <h3>Nombre</h3>
                        <h3>Precio</h3>
                    </div>
                <div className="contendor_items_editar">
                    {productos ? productos.slice(0,50).map(p =>(
                        <div className="producto_item_editar_row" key={p.id} id={p.id} onClick={handleRow} onDoubleClick={buscarProducto}>
                            <input type="text" className="input_id_editar" value={p.id} readOnly /> 
                            <input type="text" className="input_nombre_editar" value={p.title} readOnly />
                            <input type="text" className="input_precio_editar" value={p.price} readOnly />
                        </div>
                    )):(<h1>Cargando...</h1> )} 
                    </div>
            </div>
            <form className="form_editar_producto" onSubmit={updateProducto}>
                <h2>Crea un nuevo producto</h2>
                <div className="contendor_input_editar_producto">
                    <input type="text" name="titulo" placeholder="Nombre del producto" value={titulo} onChange={handleInput}/>
                    <input type="number" name="precio" placeholder="Precio" value={precio} onChange={handleInput}/>
                </div>
                <button type="submit">Modificar producto</button>
            </form>
        </div>
    )

}


export default EditarProducto