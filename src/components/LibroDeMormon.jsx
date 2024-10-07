// eslint-disable-next-line no-unused-vars
import React from "react";

/* importacion del css para este coponente */
import './css/LibroDeMormon.css'

/* img de libro de mormon */
import librodemormon from '../assets/librodemormon.png'

const LibroDeMormon = () => {
  return (
    <div className="contenedor-LibroDeMormon">
      <main className="main-mormon">
        <section id="LibroDeMormon">
          <h2>Libro de Mormón</h2>
          <p>Lea y estudie el Libro de Mormón, un testamento más de Jesucristo.</p>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Libro de Mormon
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

        <section className="prin-mormon" id="antiguo">
          <h2 className="text-center">Historia (Resumen)</h2>
          <div className="secu-libromo d-flex">
            <img src={librodemormon} alt="La Biblia" className="img-fluid rounded me-4 w-25" />
            <div className="text-content">
              <p>
              El Libro de Mormón es un texto sagrado de la Iglesia de Jesucristo de los Santos de los Últimos Días, escrito por profetas que vivieron en las Américas entre aproximadamente 600 a.C. y 421 d.C. La narrativa comienza con Lehi, un profeta que, guiado por Dios, lleva a su familia desde Jerusalén hacia el continente americano. Sus hijos, Nephi y Laman, fundan dos pueblos opuestos: los Nephitas y los Lamanitas, lo que provoca una serie de conflictos a lo largo de la historia. Varios profetas, como Jacob, Mosíah y Alma, surgen entre los Nephitas para enseñar principios del evangelio y abogar por la fe y el arrepentimiento.
              </p>
              <p>
              Una parte crucial del relato es la visita de Jesucristo a las Américas después de su crucifixión. Durante este tiempo, Él enseña a los pueblos, establece su iglesia y realiza milagros, fortaleciendo la fe de los que le siguen. Sin embargo, a medida que las generaciones avanzan, los Nephitas experimentan un ciclo de prosperidad y decadencia, caracterizado por guerras y conflictos entre ellos y los Lamanitas. La historia refleja las consecuencias de seguir o apartarse de los mandamientos de Dios.
              </p>
              <p>
              La narrativa culmina en la destrucción de la civilización nephita alrededor del 385 d.C., cuando Mormón, el último profeta, documenta la historia en planchas de metal. Él entrega estas planchas a su hijo Moroni, quien las entierra y añade su propio relato. Siglos después, el profeta José Smith traduce estas planchas, publicando el Libro de Mormón en 1830. Este libro es visto por los miembros de la iglesia como otro testamento de Jesucristo, que complementa la Biblia y proporciona un testimonio de Su divinidad y enseñanzas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <p className="text-center ">Proximamente veras mas cosas en esta seccion...</p>
    </div >
  );
};

export default LibroDeMormon;
