import './style/DetalleCarrito.css'
import { useCompra } from '../context/CompraContext'
import { useEffect, useState } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";


const DetalleCarrito = ()=>{
    const [compra,setCompra] = useCompra()
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        pagar()
    },[compra])

    


    function handleMas(e){
        let masCantidad = compra.map(item=>{
            if(item.id == e.target.id){
                return{
                    ...item,
                    cantidad:item.cantidad + 1
                }
            }
            return item
        })
        setCompra(masCantidad)
    }

    function handleMenos(e){
        let masCantidad = compra.map(item=>{
            if(item.id == e.target.id&& item.cantidad > 1){
                return{
                    ...item,
                    cantidad:item.cantidad - 1
                }
            }else{
                return{
                    ...item,
                    cantidad: 1
                }
            }
        })
        setCompra(masCantidad)
    }


    function handleDelete(e){
        let deleteCompra = compra.filter(item => item.id != e.target.parentNode.id)
        setCompra(deleteCompra)
    }

    function pagar(){
        let t = 0
        compra.forEach(e => {
            t += e.valor * e.cantidad
        });
        setTotal(t)
    }
    

    return (
        <div className="detalle_compra_contenedor">
            <div className="lista_compra">
                <h2>Detalle de productos a comprar</h2>
                <div className="header_lista_compra">
                    <h3>Id</h3>
                    <h3 className='item_table_title' >Nombre</h3>
                    <h3 className='item_talbe_valor'>Precio</h3>
                    <h3 className='item_talbe_cantidad'>Cant</h3>
                    <h3 className='item_talbe_total'>Total</h3>
                    <h3>---</h3>
                </div>
                <div className="item_compra">
                    {compra.map(c=>(
                        <div className="row_compra_item" key={c.id} id={c.id}>
                            <p>{c.id}</p>
                            <p className='item_table_title'>{c.title}</p>
                            <p className='item_talbe_valor'>{c.valor}</p>
                            <button className='btn_item' id={c.id} onClick={handleMenos}>-</button>
                            <p className='item_talbe_cantidad'>{c.cantidad}</p>
                            <button className='btn_item' onClick={handleMas} id={c.id}>+</button>
                            <p className='item_talbe_total'>2000</p>
                            <button className='btn_item' onClick={handleDelete} id={c.id}>
                                <BsFillTrash3Fill id={c.id}/>
                            </button>
                        </div>))}
                </div>
            </div>
            <div className="realizar_pago">
                <h2>Total a Paga</h2>
                <p>{total}</p>
                <button onClick={()=>console.log('pagar')}>Realizar Pago</button>
            </div>
            
        </div>
    )

}


export default DetalleCarrito