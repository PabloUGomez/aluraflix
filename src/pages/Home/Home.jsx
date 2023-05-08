import Banner from "../../componetes/Banner/Banner"
import Formacion from "../../componetes/Formacion/Formacion"

const Home = (props) => {

    const {videos,formaciones,eliminarVideo} = props
    return (    
        <>
            <Banner></Banner>
            {formaciones.map((formacion) => <Formacion 
                datos={formacion} 
                eliminarVideo={eliminarVideo}
                key={formacion.id} 
                videos={videos.filter(video=>video.categoria === formacion.titulo)}
            />)}  
        </>
    )
}

export default Home ;   