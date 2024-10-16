import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PartidosRelevantes = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get('/soccer');
                setMatches(response.data.response);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching matches:", error);
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    return (
        <div className="container py-5 rounded-3 text-bg-dark mt-5 mb-5"  >
            <h2 className="text-center mb-4">Partidos de la Semana </h2>
            {loading ? (
                <div className="text-center">
                    <h4>Cargando partidos...</h4>
                </div>
            ) : (
                <div className="row">
                    {matches.map((match, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                                <img src={match.thumbnail} className="card-img-top" alt={match.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{match.title}</h5>
                                    <p className="card-text">{match.competition}</p>
                                    <p className="card-text"><small className="text-muted">Fecha: {new Date(match.date).toLocaleString()}</small></p>
                                    <a href={match.matchviewUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Ver Partido
                                    </a>
                                    {/* <div className="mt-2">
                                        {match.videos.map((video) => (
                                            <div key={video.id} dangerouslySetInnerHTML={{ __html: video.embed }} />
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PartidosRelevantes;
