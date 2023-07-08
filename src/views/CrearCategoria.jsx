import { useState } from "react"


const CrearCategoria = ()=>{

    const [titulo, setTitulo] = useState('')
    const [url,setUrl] = useState('')


    const handleInput = (event)=>{
        if(event.target.name === 'name'){
            setTitulo(event.target.value)
        }
        if(event.target.name === 'img'){
            setUrl(event.target.value)
        }
    }

    const handleFormChange = async (event)=>{
        event.preventDefault();

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                    name:titulo,
                    image:url
                }),
            })

            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                const data = await response.json()
                console.log(data)
            }
        } catch (error) {
            console.log(`Soy error en crea categoria ${error}`)
        }
        
    }


    return(
        <div className="create_categoria_contenedor">
            <form className="form_create_categoria" onSubmit={handleFormChange} >
                <div className="contenedor_input_crear_categoria">
                    <input type="text" name='name' placeholder="Nombre categoria" value={titulo} onChange={handleInput}/>
                    <input type="url" name="img" placeholder="Url de imagen"  value={url} onChange={handleInput}/>
                </div>
                <button type="submit">Crear Categoria</button>
            </form>
        </div>
    )
}


export default CrearCategoria