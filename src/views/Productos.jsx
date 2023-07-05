import { useEffect,useState } from "react";
import ContenedorProductos from "../component/grillaProductos/contenedorProductos";
import '../views/style/Productos.css'


const Productos = ({productos})=>{

    return (
        <div className="productos_contenedor">
            <ContenedorProductos
            titulo={'Produtos'}
            elementos={productos}/>
        </div>
    )

}


export default Productos