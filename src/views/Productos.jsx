import ContenedorProductos from "../component/grillaProductos/contenedorProductos";
import '../views/style/Productos.css'
import { useEffect } from "react";
import { useProductoContext } from "../context/ProductosContext";
import { useSearchContext } from "../context/SearchContext";


const Productos = ()=>{
    const [search] = useSearchContext()
    const [productos,setProductos] = useProductoContext()

    useEffect(() => {
        fetchGetProductos();
      }, [search]);
      

    const fetchGetProductos = async () => {
        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/products');
          const data = await response.json();
          if(search != ''){
            setProductos(filtrarProducto(data,search))
          }else{
            setProductos(data)
          }
        } catch (error) {
          console.error(error);
        }
      };

      function filtrarProducto(dato,arg) {
        const filtrado = dato.filter(e => (
          e.title.toLowerCase().includes(arg.toLowerCase()) ||
          e.category.name.toLowerCase().includes(arg.toLowerCase())
        ));
    
        if (arg !== '') {
          return filtrado
        }
      }

    
    return (
        <div className="productos_contenedor">
            <ContenedorProductos
            titulo={'Produtos'}
            elementos={productos}
            />
        </div>
    )

}


export default Productos