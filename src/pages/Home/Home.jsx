import Banner from "../../componetes/Banner/Banner"
import Formacion from "../../componetes/Formacion/Formacion"

const Home = (props) => {

    const {videos,formaciones} = props
    return (    
        <>
            <Banner></Banner>
            {formaciones.map((formacion) => <Formacion 
                datos={formacion} 
                key={formacion.titulo} 
                videos={videos.filter(video=>video.categoria === formacion.titulo)}
            />) }  
        </>
    )
}

export default Home ;   