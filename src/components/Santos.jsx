// eslint-disable-next-line no-unused-vars
import React from "react";
import './css/Santos.css'
import tomo1 from '../assets/tomo1.webp'
import tomo2 from '../assets/tomo2.webp'
import tomo3 from '../assets/tomo3.webp'


const Historias = () => {
  return (
    <div className="contenedor-santos">
      <main className="main-santos">
        <section id="santos">
          <h2>Tomos Santos</h2>
          <p>Descubra y estudia la historia de la iglesia con los tomos santos</p>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Santos
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#antiguo">Proximamente...</a></li>
                    <li><a className="dropdown-item" href="#nuevo">Proximamente...</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#otros">Proximamente...</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <section className="prin-santos" id="antiguo">
          <h2 className="text-center">Historia (Resumen)</h2>
          <div className="secu-santos d-flex justify-content-center">
            <img src={tomo1} alt="La Biblia" className="img-fluid rounded me-4 w-25" />
            <img src={tomo2} alt="La Biblia" className="img-fluid rounded me-4 w-25" />
            <img src={tomo3} alt="La Biblia" className="img-fluid rounded w-25" />
          </div>
          <div className="text-content mt-4">
            <p>
              La serie Santos, publicada por la Iglesia de Jesucristo de los Santos de los Últimos Días, relata la historia de la restauración del evangelio y el desarrollo de la Iglesia desde sus inicios. El Tomo 1, titulado: El estandarte de la Verdad, cubre desde la juventud de José Smith hasta el establecimiento de la Iglesia en Nauvoo. Comienza con la Primera Visión de José Smith y la traducción del Libro de Mormón, pasando por las pruebas que enfrentaron los primeros conversos, las persecuciones y el sacrificio de los santos mientras se asentaban en Kirtland, Misuri y finalmente Nauvoo. Este tomo relata el crecimiento de la iglesia y culmina con el martirio de José Smith y su hermano Hyrum.
            </p>
            <p>
              El Tomo 2, Mimguma mamo Impia, sigue el éxodo de los santos tras la muerte de José Smith, cuando se vieron obligados a abandonar Nauvoo y cruzar las llanuras hasta el Valle del Lago Salado bajo la dirección de Brigham Young. Este volumen narra las dificultades y sufrimientos de los pioneros mientras establecían una comunidad en el desierto. También aborda temas importantes como la colonización del oeste de Estados Unidos, la organización de la Iglesia en el nuevo territorio, y cómo los santos siguieron adelante a pesar de la adversidad, siempre con el objetivo de establecer Sion.
            </p>
            <p>
              El Tomo 3, Velerosa, Nobre e Independiente, cubre el período de finales del siglo XIX y principios del siglo XX. Narra la expansión de la Iglesia a nivel mundial y cómo los santos enfrentaron desafíos, como la lucha por el reconocimiento del territorio de Utah y la superación de la práctica del matrimonio plural. También se enfoca en cómo la iglesia continuó creciendo a pesar de las persecuciones y los ajustes legales y sociales que se dieron durante esa época. Este tomo destaca cómo los principios del evangelio ayudaron a los miembros a ser una influencia positiva en el mundo mientras la Iglesia se organizaba y se fortalecía como una comunidad global de fe.
            </p>
          </div>
        </section>
      </main>

      <p className="text-center ">Proximamente veras mas cosas en esta seccion...</p>
    </div >
  );
};

export default Historias;
