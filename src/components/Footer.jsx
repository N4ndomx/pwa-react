// src/components/Footer.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">SportZone</h5>
                        <p>La mejor plataforma para estar al tanto de todos los eventos deportivos.</p>
                        <p>&copy; {new Date().getFullYear()} SportZone - Todos los derechos reservados</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <h5 className="mb-3">Síguenos</h5>
                        <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://youtube.com" className="text-light" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
