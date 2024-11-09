import { Link } from "react-router-dom";
import "./Head.scss";
function Head(){
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/contactos">Contactos</Link>
            <Link to="/nosotros">Nosotros</Link>
        </header>
    )
}
export default Head;