// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

/* Importación de los componentes */
import Biblia from './components/Biblia';
import LibroDeMormon from './components/LibroDeMormon';
import DYC from './components/DYC';
import PerlaDeGranPrecio from './components/PerlaDeGranPrecio';
import Historias from './components/Historias';
import LibrosDeLosProfetas from './components/LibrosDeLosProfetas';

/* Logo e imágenes */
import logo from './assets/logosantos.png';
import argentina from './assets/argentina.png';
import chile from './assets/confe/chile.webp';
import panama from './assets/confe/panama.webp';
import uruguay from './assets/confe/uruguya.webp';

/* importacion de img de redes */
import instagram from './assets/instagram.webp';
import facebook from './assets/facebook.png'
import tiktok from './assets/tiktok.png'

function App() {
  const importantCarouselRef = useRef(null);
  const socialCarouselRef = useRef(null);

  useEffect(() => {
    const importantCarousel = importantCarouselRef.current;
    const socialCarousel = socialCarouselRef.current;

    // Función para mover el carrusel
    const moveCarousel = (carousel, interval) => {
      let index = 0;
      const items = carousel.querySelectorAll('.carousel-item');

      const showNextItem = () => {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
      };

      const intervalId = setInterval(showNextItem, interval);
      return () => clearInterval(intervalId);
    };

    const importantCarouselInterval = moveCarousel(importantCarousel, 3000);
    const socialCarouselInterval = moveCarousel(socialCarousel, 4000);

    return () => {
      importantCarouselInterval();
      socialCarouselInterval();
    };
  }, []);

  return (
    <Router>
      <div>
        <header className="header">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Santos de Sion Logo" />
            </div>
            <nav className="nav">
              <ul>
                <li><Link to="/biblia">Biblia</Link></li>
                <li><Link to="/librodemormon">Libro de Mormón</Link></li>
                <li><Link to="/dyc">Doctrina y Convenios</Link></li>
                <li><Link to="/perladegranprecio">La Perla de Gran Precio</Link></li>
                <li><Link to="/historias">Historias</Link></li>
                <li><Link to="/librosdelosprofetas">Libros de los Profetas</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section id="inicio" className="hero">
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-8 col-md-7 mb-4">
                  <div id="importantCarousel" className="carousel" ref={importantCarouselRef}>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={argentina} className="d-block w-100" alt="Carrusel 1" />
                      </div>
                      <div className="carousel-item">
                        <img src={chile} className="d-block w-100" alt="Carrusel 2" />
                      </div>
                      <div className="carousel-item">
                        <img src={panama} className="d-block w-100" alt="Carrusel 3" />
                      </div>
                      <div className="carousel-item">
                        <img src={uruguay} className="d-block w-100" alt="Carrusel 4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-5 mb-4">
                  <div id="socialCarousel" className="carousel" ref={socialCarouselRef}>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={instagram} className="d-block w-100" alt="Red Social 1" />
                      </div>
                      <div className="carousel-item">
                        <img src={facebook} className="d-block w-100" alt="Red Social 1" />
                      </div>
                      <div className="carousel-item">
                        <img src={tiktok} className="d-block w-100" alt="Red Social 1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tarjetas */}
          <h2 className="text-center  text-white">quieres aprender del:</h2>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Biblia</h5>
                    <p className="card-text">Explora las escrituras de la Biblia: Antiguo y Nuevo Testamento.</p>
                    <Link to="/biblia" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Libro de Mormón</h5>
                    <p className="card-text">Lea y estudie el Libro de Mormón, un testamento más de Jesucristo.</p>
                    <Link to="/librodemormon" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Doctrina y Convenios</h5>
                    <p className="card-text">Revelaciones modernas recopiladas en Doctrina y Convenios.</p>
                    <Link to="/dyc" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">La Perla de Gran Precio</h5>
                    <p className="card-text">Descubra los textos adicionales de la Perla de Gran Precio.</p>
                    <Link to="/perladegranprecio" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Historias</h5>
                    <p className="card-text">Lea relatos inspiradores y testimonios de los Santos.</p>
                    <Link to="/historias" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Libros de los Profetas</h5>
                    <p className="card-text">Explore enseñanzas y escritos de los profetas modernos.</p>
                    <Link to="/librosdelosprofetas" className="btn btn-primary">Leer más</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Routes>
          <Route path="/biblia" element={<Biblia />} />
          <Route path="/librodemormon" element={<LibroDeMormon />} />
          <Route path="/dyc" element={<DYC />} />
          <Route path="/perladegranprecio" element={<PerlaDeGranPrecio />} />
          <Route path="/historias" element={<Historias />} />
          <Route path="/librosdelosprofetas" element={<LibrosDeLosProfetas />} />
        </Routes>

        <footer>
          <p>&copy; 2024 Santos de Sion. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
