import './Search.css'
import { useState } from 'react';

const Search = ({ filtrar }) => {
    const [searchValue, setSearchValue] = useState('');
  
    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    };
  
    const handleSearch = () => {
      filtrar(searchValue);

    };
  
    return (
      <div className="search_contenedor">
        <input className='input_search' type="text" placeholder="Buscar" onChange={handleInputChange} onBlur={handleSearch}/>
        {/* <button onClick={handleSearch}>Buscar</button> */}
      </div>
    );
  };
  
  export default Search;
  