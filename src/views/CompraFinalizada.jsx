import './style/CompraFinalizada.css'
import { useNavigate } from 'react-router'
import { useCompra } from '../context/CompraContext'



const CompraFinalizada = () =>{
    const [,setCompra] = useCompra()
    const navegate = useNavigate()


    function finalizarCompra(){
        setCompra([])
        navegate('/e-commerce')
    }

    return(
        <div className="finalizada_contenedor">
            <div className="contenedor_finalizado">
                <h1>Compra finalizada</h1>
                <button onClick={finalizarCompra}>Volver a Inicio</button>
            </div>
            
        </div>
    )
}


export default CompraFinalizada