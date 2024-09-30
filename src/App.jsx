// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/logo.png" alt="Santos de Sion Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#biblia">Biblia</a></li>
              <li><a href="#libro-de-mormon">Libro de Mormón</a></li>
              <li><a href="#dyc">Doctrina y Convenios</a></li>
              <li><a href="#perla-de-gran-precio">La Perla de Gran Precio</a></li>
              <li><a href="#historias">Historias</a></li>
              <li><a href="#libros-de-los-profetas">Libros de los Profetas</a></li>
            </ul>
          </nav>
        </div>
      </header>

        
      <main>
        <section id="inicio" className="hero">
          <h1>Bienvenidos a Santos de Sion</h1>
          <p>Un sitio para la comunidad de los Santos de los Últimos Días.</p>
        </section>

        <section id="biblia">
          <h2>Biblia</h2>
          <p>Explora las escrituras de la Biblia: Antiguo y Nuevo Testamento.</p>
        </section>

        <section id="libro-de-mormon">
          <h2>Libro de Mormón</h2>
          <p>Lea y estudie el Libro de Mormón, un testamento más de Jesucristo.</p>
        </section>

        <section id="dyc">
          <h2>Doctrina y Convenios</h2>
          <p>Revelaciones modernas recopiladas en Doctrina y Convenios.</p>
        </section>

        <section id="perla-de-gran-precio">
          <h2>La Perla de Gran Precio</h2>
          <p>Descubra los textos adicionales de la Perla de Gran Precio.</p>
        </section>

        <section id="historias">
          <h2>Historias</h2>
          <p>Lea relatos inspiradores y testimonios de los Santos.</p>
        </section>

        <section id="libros-de-los-profetas">
          <h2>Libros de los Profetas</h2>
          <p>Explore enseñanzas y escritos de los profetas modernos.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Santos de Sion. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
