import { useState } from "react"
import Modal from "../component/modal/Modal"




const Home = ()=>{
    const [modal,setModal] = useState(false)

    console.log(modal)
    return (
        <>
            <Modal nombre={'Modal prueba'} set={setModal}/>
        </>
    )

}


export default Home