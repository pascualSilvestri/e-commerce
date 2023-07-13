import ContenedorCategoria from '../component/grillaCategoria/ContenedorCategoria'
import './style/Categoria.css'
import { useEffect } from 'react';
import { useCategoriaContex } from '../context/CategoriaContext';
import { useSearchContext } from '../context/SearchContext';
import { useUserContext } from '../context/UserContext';

const Categoria = ()=>{

    const [categorias,setCategoria] = useCategoriaContex()
    const [search] = useSearchContext()
    const [user] = useUserContext()

    useEffect(() => {
        fetchGetCategoria();
      }, [search]);

    const fetchGetCategoria = async () => {
        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/categories');
          const data = await response.json();
          if(search != ''){
            setCategoria(filtrarProducto(data,search))
          }else{
            setCategoria(data)
          }
        } catch (error) {
          console.error(error);
        }
      };


      function filtrarProducto(dato,arg) {
        const filtrado = dato.filter(e => (
          e.name.toLowerCase().includes(arg.toLowerCase())
        ));
    
        if (arg !== '') {
          return filtrado
        }
      }


    return (
        <div className="categoriaContendor">
            <ContenedorCategoria titulo={'Categorias'} elementos={categorias} user={user}/>
        </div>
    )

}


export default Categoria