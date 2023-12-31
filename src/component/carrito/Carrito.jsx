import { Link } from 'react-router-dom';
import './Carrito.css'
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useCompra } from '../../context/CompraContext';


const Carrito = () =>{

    const [compra, setCompra] = useCompra()

    
    const [total, setTotal] = useState(0.0)

    useEffect(()=>{
        totalCompra(compra)
    },[compra])

    const totalCompra = (compra) =>{
        const valor = compra.map(e => e.valor)
        const total = valor.reduce((acu,num)=> acu+num,0)
        setTotal(total)
    }
    


    return(
        
        <div className="carrito_contenedor">
            <Link to='/detallecompra'>
            <div className="carrito">
                <BsCart4/>
            </div>
            <div className="total">
                {compra.length}
            </div>
            </Link>
        </div>
        
    )
}

export default Carrito