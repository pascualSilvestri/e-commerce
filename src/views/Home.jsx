import foto from '../assets/mifoto.jpg'
import './style/Home.css'
import { useNavigate } from 'react-router'



const Home = ()=>{

    const navegate = useNavigate()


    function inicio(){
        
        navegate('/categoria')
    }

    return (
        <section className="hero">
            <div className="container_hero_content">
            <div className="img_contenedor_hero">
                    <img className='foto_hero' src={foto} alt="mi foto" />
                </div>
                <h2>Pascual Silvestri</h2>
                <p>Full Stack Developer</p>
            </div>
            <div className="bienvenidos">
                <h1>Bienvenido a mi E-commerce</h1>
                <button onClick={inicio}>Entrar</button>
            </div>
        </section>
    )

}


export default Home