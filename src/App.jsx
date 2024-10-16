
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa el CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Navbar from './components/Navbar'
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import AcercaDe from './components/AcercaDe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contactos';
const Blog = () => <div><h1>Blog</h1><p>Artículos y noticias.</p></div>;

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* Cambios aquí */}
        <Navbar />
        <div className="container mt-4 flex-grow-1"> {/* flex-grow-1 permite que el contenido ocupe el espacio restante */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/about" element={<AcercaDe />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
