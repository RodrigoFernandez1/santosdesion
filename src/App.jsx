// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

/* Importación de los componentes */
import Biblia from './components/Biblia';
import LibroDeMormon from './components/LibroDeMormon';
import DYC from './components/DYC';
import PerlaDeGranPrecio from './components/PerlaDeGranPrecio';
import Santos from './components/Santos';
import LibrosDeLosProfetas from './components/LibrosDeLosProfetas';

/* logo */
import logo from './assets/logosantos.png'

/* importacion de enlaces para mis iconos de redes socciles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [activeSection, setActiveSection] = useState(null); // Estado para la sección activa
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div>
        {activeSection ? (
          <div>
            <button onClick={() => setActiveSection(null)} className="btn btn-secondary">Volver</button>
            {activeSection === 'biblia' && <Biblia />}
            {activeSection === 'librodemormon' && <LibroDeMormon />}
            {activeSection === 'dyc' && <DYC />}
            {activeSection === 'perladegranprecio' && <PerlaDeGranPrecio />}
            {activeSection === 'Santos' && <Santos />}
            {activeSection === 'librosdelosprofetas' && <LibrosDeLosProfetas />}
            <button onClick={() => setActiveSection(null)} className="btn btn-secondary">Volver</button>
          </div>
        ) : (
          <div>
            <header className="header">
              <div className="container">
                <div className="logo">
                  <img src={logo} alt="Santos de Sion Logo" />
                </div>
                <div className="social-media">
                  <a href="https://www.instagram.com/santosdesion/?__pwa=1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a href="https://www.tiktok.com/@santosdesion" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61566300483992" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </div>
              </div>
            </header>


            <main>
              {/* Tarjetas */}
              <h2 className="text-center text-dark p-5 display-4">¡Bienvenidos a Santos de Sion!</h2>
              <p className="text-center lead">Descubre una variedad de temas para enriquecer tu estudio y comprensión.</p>

              <div className="container mt-1">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Biblia</h5>
                        <p className="card-text">Explora las escrituras de la Biblia: Antiguo y Nuevo Testamento.</p>
                        <Link to="#" onClick={() => handleSectionClick('biblia')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Libro de Mormón</h5>
                        <p className="card-text">Lea y estudie el Libro de Mormón, un testamento más de Jesucristo.</p>
                        <Link to="#" onClick={() => handleSectionClick('librodemormon')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Doctrina y Convenios</h5>
                        <p className="card-text">Revelaciones modernas recopiladas en Doctrina y Convenios.</p>
                        <Link to="#" onClick={() => handleSectionClick('dyc')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">La Perla de Gran Precio</h5>
                        <p className="card-text">Descubra los textos adicionales de la Perla de Gran Precio.</p>
                        <Link to="#" onClick={() => handleSectionClick('perladegranprecio')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Tomos Santos</h5>
                        <p className="card-text">Descubra y estudia la historia de la iglesia con los tomos santos.</p>
                        <Link to="#" onClick={() => handleSectionClick('Santos')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Libros de los Profetas</h5>
                        <p className="card-text">Explora los libros escritos por profetas de los últimos días.</p>
                        <Link to="#" onClick={() => handleSectionClick('librosdelosprofetas')} className="btn btn-primary">Leer más...</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <footer className="footer">
              <div className="container text-center">
                <p className="text-dark">© 2024 Santos de Sion. Todos los derechos reservados.</p>
                <a className="text-center" href="mailto:santodesion@gmail.com">Enviar un correo a Gmail</a>
              </div>
            </footer>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
