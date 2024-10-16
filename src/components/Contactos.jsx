import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    // Estado para los valores del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        mensaje: ''
    });

    // Estado para el mensaje de éxito o error
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
            const response = await axios.post('https://api-ejemplo.com/contacto', formData);

            if (response.status === 200) {
                setMessage('¡Tu mensaje ha sido enviado correctamente!');
            }
        } catch (error) {
            setMessage('Hubo un error al enviar tu mensaje. Inténtalo nuevamente.');
        }

        setFormData({
            nombre: '',
            apellidos: '',
            correo: '',
            mensaje: ''
        });
    };

    return (
        <div className="container text-bg-dark rounded-3 " style={{ maxWidth: '900px' }}>
            <h3 className="text-center  mt-3 p-3">Contáctanos</h3>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
                <div className="mb-2">
                    <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control "
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                    <input
                        type="text"
                        className="form-control "
                        id="apellidos"
                        name="apellidos"
                        value={formData.apellidos}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control "
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                        className="form-control "
                        id="mensaje"
                        name="mensaje"
                        rows="3"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary  w-100  mt-4 mb-5">Enviar</button>
            </form>

            {/* Mostrar mensaje de éxito o error */}
            {message && <div className="alert alert-info mt-2">{message}</div>}
        </div>
    );
};

export default Contact;
