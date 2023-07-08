import { Link } from 'react-router-dom';
import './Carrito.css'
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from 'react';


const Carrito = ({compra}) =>{
    console.log(compra)
    const [total, setTotal] = useState(0.0)

    useEffect(()=>{
        totalCompra(compra)
    },[compra])

    const totalCompra = (compra) =>{
        const valor = compra.map(e => e.valor)
        const total = valor.reduce((acu,num)=> acu+num,0)
        setTotal(total)
    }
    
    
    console.log(total)


    return(
        
        <div className="carrito_contenedor">
            <Link to='/detallecompra'>
            <div className="carrito">
                <BsCart4/>
            </div>
            <div className="total">
                {total}
            </div>
            </Link>
        </div>
        
    )
}

export default Carrito