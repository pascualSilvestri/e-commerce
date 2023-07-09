import './Search.css'
import { useSearchContext } from '../../context/SearchContext';

const Search = () => {
    const [,setSearch] = useSearchContext()
  
    const handleInputChange = (e) => {
      setSearch(e.target.value);
    };

  
    return (
      <div className="search_contenedor">
        <input className='input_search' type="text" placeholder="Buscar" onChange={handleInputChange} />
        {/* <button onClick={handleSearch}>Buscar</button> */}
      </div>
    );
  };
  
  export default Search;
  