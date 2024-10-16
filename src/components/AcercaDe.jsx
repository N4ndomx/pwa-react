
const AcercaDe = () => {
    return (
        <div className="container my-5 text-bg-dark py-5 rounded-4 px-5">
            <div className="row align-items-center">
                <div className="col-md-6 ">
                    <img
                        src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
                        alt="Equipo de Redacción"
                        className="img-fluid rounded "
                    />
                </div>
                <div className="col-md-6">
                    <h2>Acerca de Nuestro Equipo</h2>
                    <p>
                        En <strong>Deportes en Línea</strong>, somos un equipo apasionado de redactores y amantes del deporte.
                        Nos dedicamos a traer las últimas noticias, análisis y opiniones sobre una variedad de deportes,
                        desde el fútbol hasta el baloncesto, y mucho más.
                    </p>
                    <p>
                        Nuestro objetivo es proporcionar contenido de alta calidad que informe y entretenga a nuestros lectores.
                        Nos esforzamos por ser la fuente más confiable de información deportiva en la web.
                        Nuestro equipo está compuesto por periodistas experimentados y entusiastas del deporte que trabajan arduamente
                        para ofrecerte la información más precisa y actualizada.
                    </p>
                    <h5>Miembros del Equipo:</h5>
                    <ul>
                        <li><strong>Ana Gómez</strong> - Redactora Jefe</li>
                        <li><strong>Juan Pérez</strong> - Analista de Fútbol</li>
                        <li><strong>Laura Torres</strong> - Especialista en Baloncesto</li>
                        <li><strong>Pedro Ruiz</strong> - Editor de Contenido</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AcercaDe;
