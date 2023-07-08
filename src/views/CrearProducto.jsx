import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style/CrearProducto.css'


const CrearProducto = ({categorias})=>{
    const [nombre,setNombre] = useState('')
    const [precio,setPrecio] = useState('')
    const [desc, setDesc] = useState('')
    const [cate, setCat] = useState('')
    const [url, setUrl] = useState([])

    function handleInput(event){
        switch( event.target.name ){
            case 'titulo':
                setNombre(event.target.value)
                break;
            case 'precio':
                setPrecio(parseInt(event.target.value))
                break;
            case 'descripcion':
                setDesc(event.target.value)
                break;
            case 'categoria':
                let cat = event.target.options[event.target.options.selectedIndex].getAttribute('id');
                setCat(cat)
                break;
            case 'img':
                let urls = []
                urls.push(event.target.value)
                setUrl(urls)
                break;

        }
    }

    const navegate = useNavigate()
    const handleFormProducts = async (event) =>{
        event.preventDefault();
        

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products/',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: nombre,
                price: precio,
                description: desc,
                categoryId: cate,
                images: url})
            })

            if(response.ok){
                const data = await response.json()
                console.log(data)
                navegate('/')
            }else{
                const data = await response.json()
                console.log(data)
            }


        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="create_producto_contenedor">
            <form className="form_create_producto" onSubmit={handleFormProducts}>
                <h2>Crea un nuevo producto</h2>
                <div className="contenedor_input_crear_producto">
                    <input type="text" name="titulo" placeholder="Nombre del producto" onChange={handleInput} value={nombre}/>
                    <input type="number" name="precio" placeholder="Precio" onChange={handleInput} value={precio}/>
                    <textarea name="descripcion"  cols="30" rows="10" onChange={handleInput} value={desc}></textarea>
                    <select name="categoria"onChange={handleInput}>
                        {
                            categorias ? categorias.map( cate =>( 
                            <option value={cate.name} key={cate.id} id={cate.id}>{cate.name}</option> ))  
                            : 
                            ( <h1>Cargando..</h1> )
                        }
                    </select>
                    <input type="url" name="img" placeholder="Url de la imagen" onChange={handleInput} value={url}/> 
                </div>
                <button type="submit">Crear Producto</button>
            </form>
        </div>
    )

}


export default CrearProducto