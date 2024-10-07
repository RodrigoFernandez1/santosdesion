// eslint-disable-next-line no-unused-vars
import React from "react";
import "./css/Biblia.css";

/* img biblia */
import santa from '../assets/biblia.jpg'

const Biblia = () => {
  return (
    <div className="contenedor-biblia">
      <main className="main-bi">
        <section id="biblia">
          <h2>Biblia</h2>
          <p>Explora las escrituras de la Biblia: Antiguo y Nuevo Testamento.</p>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Biblia
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#antiguo">Antiguo Testamento</a></li>
                    <li><a className="dropdown-item" href="#nuevo">Nuevo Testamento</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#otros">Otros Libros</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="prin-biblia" id="antiguo">
          <h2 className="text-center">Historia (Resumen)</h2>
          <div className="secu-bi d-flex">
            <img src={santa} alt="La Biblia" className="img-fluid rounded me-4" />
            <div className="text-content">
              <p>
                La Biblia narra la relación de Dios con la humanidad, comenzando con la creación del mundo y la caída de Adán y Eva. A través de los patriarcas como Abraham, Isaac y Jacob, Dios establece una alianza con su pueblo, los israelitas. Moisés libera a los israelitas de la esclavitud en Egipto y les da la Ley en el monte Sinaí. Tras años de vagar por el desierto, Josué los conduce a la Tierra Prometida.
              </p>
              <p>
                Después de un período de jueces, el pueblo solicita un rey, y se establecen los reinos de Saúl, David y Salomón. La nación se divide en Israel y Judá, donde los profetas advierten sobre el pecado y el juicio de Dios. Después del exilio babilónico, los judíos regresan y reconstruyen el Templo.
              </p>
              <p>
                El Nuevo Testamento se centra en la vida, muerte y resurrección de Jesucristo, quien trae un mensaje de salvación. Sus apóstoles, en particular Pablo, extienden el evangelio por el mundo. Las cartas apostólicas ofrecen enseñanza y guía a las primeras comunidades cristianas. El Apocalipsis concluye con la promesa de la segunda venida de Cristo y el juicio final.
              </p>
            </div>
          </div>
        </section>
      </main>

      <p className="text-center ">Proxiamnete veras mas cosas en esta seccion...</p>
    </div>
  );
};

export default Biblia;
