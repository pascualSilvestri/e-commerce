import { useContext, useState, createContext } from "react";



const guardarContex = createContext()


export function useGuardadoContext (){
    return useContext(guardarContex);
}


export const GuardarProvide = ({children}) =>{
    const [guardado, setGuardado] =  useState(false)
    return (
        <guardarContex.Provider value={[guardado,setGuardado]} >
            {children}
        </guardarContex.Provider>
        )
}