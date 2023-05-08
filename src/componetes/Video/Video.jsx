import "./Video.css"
import {TiDelete} from "react-icons/ti";

const Video = (props) => {

    const {id,titulo,urlImagen,urlVideo,categoria,descripcion,codigo} = props.datos
    const {eliminarVideo} = props

    return (
        <span className="card">
        <TiDelete onClick={() => eliminarVideo(id)} className="eliminar"/>
        <a href={urlVideo}><img src={urlImagen} alt={titulo}/></a>
        </span>
    )
}

export default Video    