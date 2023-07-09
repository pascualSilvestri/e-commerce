import { useEffect, useState } from "react"
import './style/Registro.css'
import { useNavigate} from 'react-router-dom'

const Registro = ({login})=>{
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [img,setImg] = useState('')
    const navigate = useNavigate()

        if(login){
            navigate('/e-commerce')
        } 

    const handleInputChange = (event) => {
        if (event.target.name === 'name') {
            setName(event.target.value);
        }
        if (event.target.name === 'password1') {
            setPassword(event.target.value);
        }
        if(event.target.name === 'email'){
            setEmail(event.target.value);
        }
        if(event.target.name === 'img'){
            setImg(event.target.value)
        }
    };


    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name:name,
                    email: email,
                    password: password,
                    avatar:img
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {
            console.error(error.headers);
        }
    };

    return (
        <div className="registro_contendor">
            <form className="form_registro" onSubmit={handleLogin} >
                <h2>Registro</h2>
                <div className="input_contenedor">
                    <input className="input_retistro" type="text" name="name" id="name" value={name}  onChange={handleInputChange} placeholder="Nombre"/>
                    <input className="input_retistro" type="email" name="email" id="email" value={email}  onChange={handleInputChange} placeholder="Correo ejemplo@gmail.com"/>
                    <input className="input_retistro" type="password" name="password1" id="password1" value={password}  onChange={handleInputChange} placeholder="Contraseña"/>
                    <input className="input_retistro" type="password" name="password2" id="password2"  placeholder="Volver a ingresar contraseña"/>
                    <input className="input_retistro" type="url" name="img" id="img" value={img} onChange={handleInputChange} placeholder="Url de la imagen"/> 
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )

}


export default Registro