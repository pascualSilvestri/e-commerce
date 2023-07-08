import { useEffect, useState } from "react";
import './style/Login.css'
import { useNavigate} from 'react-router-dom'

const Login = ({setLogin,login,getUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    
        if(login){
            navigate('/')
        } 


    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const dato = []
                dato.push(data)
                setLogin(true)
                localStorage.setItem("access_token",JSON.stringify(data));
                getUser()
                
            } else {
                console.log('error jeje')
                setLogin(false)
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="login_contenedor">
            <form className="form_login" onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input_contenedor">
                    <input className="input_login"
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="Nombre de usuario"
                    />
                    <input  className="input_login"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Contraseña"
                    />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )

}


export default Login