import { useContext, createContext, useState } from "react";



const userContext = createContext()

const getUserContext = createContext()

export function useUserContext(){
    return useContext(userContext)
}

export function useGetUserContext(){
    return useContext(getUserContext)
}







export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(false)

    async function getUser() {
        const tokenLocal = localStorage.getItem('access_token');
        const token = JSON.parse(tokenLocal);
        const header = {
          Authorization: `Bearer ${token.access_token}`
        };
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: header
        });
        const data = await response.json();
        setUser(data);
      }

    return (
        <userContext.Provider value={[user,setUser]}>
            <getUserContext.Provider value={getUser}>
                {children}
            </getUserContext.Provider>
        </userContext.Provider>
            )
}