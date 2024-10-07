// eslint-disable-next-line no-unused-vars
import React from "react";
import dyc from '../assets/dyc.png'
import './css/DYC.css'

const DYC = () => {
  return (
    <div className="contenedor-dyc">
      <main className="main-dyc">
        <section id="doctrinayconvenios">
          <h2>Doctrina y Convenios</h2>
          <p>Revelaciones modernas recopiladas en Doctrina y Convenios.</p>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Doctrina y Convenios
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

        <section className="prin-dyc" id="antiguo">
          <h2 className="text-center">Historia (Resumen)</h2>
          <div className="secu-dyc d-flex">
            <img src={dyc} alt="La Biblia" className="img-fluid rounded me-4 w-25 " />
            <div className="text-content">
              <p>
                La historia de Doctrina y Convenios de la Iglesia de Jesucristo de los Santos de los Últimos Días se remonta a los inicios de la Restauración del Evangelio en el siglo XIX. Este libro es una compilación de revelaciones dadas a José Smith, el profeta fundador de la Iglesia, y a otros líderes en momentos clave del establecimiento de la Iglesia. Las primeras revelaciones comenzaron en 1823, cuando José Smith recibió visitas del ángel Moroni, que lo guió a traducir el Libro de Mormón. A medida que la Iglesia crecía, José y sus seguidores recibieron instrucciones divinas sobre la organización, los principios de fe y las enseñanzas de Cristo, muchas de las cuales se encuentran en Doctrina y Convenios.
              </p>
              <p>
                El contenido de Doctrina y Convenios es único, ya que no es una narración histórica sino una recopilación de revelaciones directas de Dios que tratan temas doctrinales, organizacionales y espirituales. Incluye revelaciones sobre el sacerdocio, los convenios, la salvación y los templos, así como asuntos prácticos de la Iglesia como la misión, el gobierno y la disciplina. A través de estas revelaciones, se dio forma a la estructura moderna de la Iglesia, proporcionando orientación sobre cómo los miembros deben vivir y organizarse. Algunas de las secciones clave incluyen la revelación sobre la restauración del sacerdocio y la construcción de templos sagrados.
              </p>
              <p>
                A lo largo de los años, Doctrina y Convenios ha sido un texto fundamental para la dirección de la Iglesia y su expansión global. Las revelaciones en este libro siguen guiando a los líderes y miembros de la Iglesia en la actualidad, ya que se consideran palabras de Dios que responden a las necesidades de cada época. Aunque el último añadido fue en el siglo XX, la influencia de Doctrina y Convenios continúa siendo central en la vida de los Santos de los Últimos Días, reafirmando su fe en la continua revelación divina.
              </p>
            </div>
          </div>
        </section>
      </main>

      <p className="text-center ">Proximamente veras mas cosas en esta seccion...</p>
    </div >
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default DYC;
