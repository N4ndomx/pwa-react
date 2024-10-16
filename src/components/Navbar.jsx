// src/components/Navbar.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';  // Importamos NavLink para manejar las rutas activas
import '@fortawesome/fontawesome-free/css/all.min.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-underline">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <i className="fa fa-medal me-2"></i>
                    SportZone
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact="true" className="nav-link" activeClassName="active" aria-current="page" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/about" activeClassName="active">Acerca de</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
