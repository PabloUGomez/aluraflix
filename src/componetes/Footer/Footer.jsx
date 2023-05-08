import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <hr></hr>
            <Link to="/"><img src="img/logo.png" alt="logo aluraflix" className='logo' /></Link>
        </div>
    )
}

export default Footer;