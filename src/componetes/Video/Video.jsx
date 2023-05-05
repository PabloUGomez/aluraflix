import "./Video.css"

const Video = (props) => {

    const {titulo,urlImagen,urlVideo,categoria,descripcion,codigo} = props.datos

    return (
        <a href={urlVideo}><img src={urlImagen} alt={titulo}/></a>
    )
}

export default Video    