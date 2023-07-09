import { createContext,useContext,useState } from "react";

const searchContexte = createContext();

export function useSearchContext(){
    return useContext(searchContexte)
}

export const SearchProvide = ({children}) =>{

    const [search,setSearch] = useState("");

    return(
        <searchContexte.Provider value={[search,setSearch]}>
            {children}
        </searchContexte.Provider>
    )
}

