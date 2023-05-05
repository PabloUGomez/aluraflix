import "./Banner.css"

const Banner = () => {
    return(
        <>
        <div className="banner">
            <div className="banner-fondo">
            </div>
        </div>
        <div className="banner-texto">
            <span>
            <h1>Front End</h1>
            <h2>Challenge React</h2>
            <h4>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</h4>
            <img src="img/video-banner.png" alt="" />
            </span>
            </div>
        </>
    )
}

export default Banner;