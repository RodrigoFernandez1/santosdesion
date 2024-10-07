// eslint-disable-next-line no-unused-vars
import React from "react";
import perla from '../assets/lpdp.png'
import './css/perladegranprecio.css'

const PerlaDeGranPrecio = () => {
  return (
    <div className="contenedor-perla">
      <main className="main-perla">
        <section id="perladegranprecio">
          <h2>La Perla de Gran Precio</h2>
          <p>Descubra los textos adicionales de la Perla de Gran Precio.</p>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    La Perla de Gran Precio
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

        <section className="prin-perla" id="antiguo">
          <h2 className="text-center">Historia (Resumen)</h2>
          <div className="secu-perla d-flex">
            <img src={perla} alt="La Biblia" className="img-fluid rounded me-4 w-25 " />
            <div className="text-content">
              <p>
                La Perla de Gran Precio es uno de los libros sagrados de la Iglesia de Jesucristo de los Santos de los Últimos Días. Contiene escritos importantes que fueron revelados al profeta José Smith durante la restauración del evangelio. Una de las partes más conocidas es el relato de la Primera Visión, donde José Smith, siendo un joven de 14 años, buscaba saber cuál era la iglesia verdadera. Después de orar, tuvo una visión de Dios el Padre y de Jesucristo, quienes le indicaron que no se uniera a ninguna iglesia existente, pues el evangelio sería restaurado a través de él.
              </p>
              <p>
                Otra parte importante es el Libro de Moisés, que amplía la historia de la creación del mundo y del profeta Moisés, dándonos más detalles sobre cómo Dios creó la tierra y los cielos, y cómo Adán y Eva tuvieron un papel fundamental en el plan de salvación. También está el Libro de Abraham, que es una traducción de papiros antiguos que José Smith adquirió. Este libro nos enseña sobre los cielos, las estrellas, y el plan de Dios para Sus hijos antes de venir a la tierra.
              </p>
              <p>
                Finalmente, la Perla de Gran Precio incluye los Artículos de Fe, que son trece declaraciones breves que resumen las creencias fundamentales de nuestra iglesia. Este libro es un tesoro de revelaciones que nos ayuda a entender mejor el propósito de la vida, la creación, y el papel de Jesucristo en la salvación. Para mí, estudiar este libro ha sido clave para fortalecer mi fe y mi conocimiento del evangelio.
              </p>
            </div>
          </div>
        </section>
      </main>

      <p className="text-center ">Proximamente veras mas cosas en esta seccion...</p>
    </div >
  );
};

export default PerlaDeGranPrecio;
