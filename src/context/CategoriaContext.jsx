import { useContext,createContext,useState } from "react";


const categoriaContext = createContext()


export function useCategoriaContex (){
    return useContext(categoriaContext)
}


export const CategoriaProvide = ({children}) =>{
    
    const [categorias, setCategoria] = useState([])


    return(
        <categoriaContext.Provider value={[categorias,setCategoria]}>
            { children }
        </categoriaContext.Provider>
    )
}