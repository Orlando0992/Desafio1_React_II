
import { Link } from "react-router-dom"
import '../components/notFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <h3>Pagina no encontrada</h3>
            <Link to="./inicio">Regresar a inicio</Link>
        </div>
    )
}

export default NotFound
