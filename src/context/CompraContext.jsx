import { createContext, useContext, useEffect, useState } from 'react';


export const compraContext = createContext();
export const addCompraContext = createContext();

export function useCompra(){
    return useContext(compraContext)
}

export function useAddCompraContext (){
    return useContext(addCompraContext)
}


export const CompraProvider = ({ children }) => {

  const [compra, setCompra] = useState([]);



  const addCompra = (id, title, valor, cantidad) => {
    const nuevaCompra = { id, title, valor, cantidad };
    const compraExistente = compra.find(item => item.id === id);
  
    if (compraExistente) {
      const compraActualizada = compra.map(item => {
        if (item.id === id) {
          return {
            ...item,
            cantidad: item.cantidad + cantidad
          };
        }
        return item;
      });
  
      setCompra(compraActualizada);
    } else {
      setCompra([...compra, nuevaCompra]);
    }
  
    console.log(compra);
  };
  
  return (
    <compraContext.Provider value={[ compra, setCompra ]}>
        <addCompraContext.Provider value={addCompra}>
            {children}
        </addCompraContext.Provider>
    </compraContext.Provider>
  );
};
