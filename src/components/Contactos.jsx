import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    // Estado para los valores del formulario
    const [formData, setFormData] = useState({
        name: '',
        last_names: '',
        email: '',
        comment: ''
    });

    // Estado para el comment de éxito o error
    const [message, setMessage] = useState(null);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Realizar POST a la API
            const response = await axios.post('http://localhost:8080/comentarios', formData);

            if (response.status === 200) {
                setMessage('¡Tu comentario ha sido enviado correctamente!');
            }
        } catch (error) {
            setMessage('Hubo un error al enviar tu comment. Inténtalo nuevamente.');
        }


    };

    return (
        <div className="container text-bg-dark rounded-3 " style={{ maxWidth: '900px' }}>
            <h3 className="text-center  mt-3 p-3">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Nombres</label>
                    <input
                        type="text"
                        className="form-control "
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="last_names" className="form-label">Apellidos</label>
                    <input
                        type="text"
                        className="form-control "
                        id="last_names"
                        name="last_names"
                        value={formData.last_names}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control "
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comentario</label>
                    <textarea
                        className="form-control "
                        id="comment"
                        name="comment"
                        rows="3"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary  w-100  mt-4 mb-5">Enviar</button>
            </form>

            {/* Mostrar comment de éxito o error */}
            {message && <div className="alert alert-info mt-2">{message}</div>}
        </div>
    );
};

export default Contact;
