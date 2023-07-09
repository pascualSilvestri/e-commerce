import { createContext,useContext,useState } from "react";



const productoContext = createContext();

export function useProductoContext(){
    return useContext(productoContext)
}


export const ProductoProvider = ({children})=>{
    const [productos, setProductos] = useState([])
    
    
    return (
        <productoContext.Provider value={[productos,setProductos]}>
            {children}
        </productoContext.Provider>
    )
}
