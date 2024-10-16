// src/components/Inicio.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartidosRelevantes from './PartidosRelevantes';

function Inicio() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reemplaza la URL con la dirección de tu API
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/eventos.json?alt=media&token=02e86df5-2599-427d-80d1-d817af322872');
                // console.log(response)
                setEvents(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <><div className="inicio bg-dark text-light rounded-3">
            {/* Hero Carousel */}
            {loading ? (
                <div className="text-center py-5">
                    <h2>Cargando eventos...</h2>
                </div>
            ) : (
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        {events.map((event, index) => (
                            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={event.id}>
                                <img src={event.url} className="d-block w-100" alt={event.titulo} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{event.titulo}</h5>
                                    <p>{event.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            )}

            {/* Contenido adicional */}
            <div className="container text-center py-5">
                <h1 className="display-4">¡Bienvenido a SportZone!</h1>
                <p className="lead">
                    El sitio perfecto para estar al día con tus eventos deportivos favoritos.
                </p>
                <hr className="my-4" />
                <p>
                    Explora noticias, eventos en vivo, y participa en las discusiones sobre tus deportes favoritos.
                </p>
                <div className="mt-4">
                    <button className="btn btn-primary btn-lg me-3" role="button">Ver Eventos</button>
                    <button className="btn btn-outline-light btn-lg" role="button">Registrarse</button>
                </div>
            </div>
        </div><PartidosRelevantes /></>
    );
}

export default Inicio;
