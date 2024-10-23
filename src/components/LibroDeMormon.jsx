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
                    <li><a className="dropdown-item" href="#antiguo">Historia(resumen)</a></li>
                    <li><a className="dropdown-item" href="#lacreacion">La Visión del Árbol de la Vida</a></li>
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

      <section className="info-section my-5">
        <h2 className="text-center mb-4">Temas de Estudio</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="lacreacion" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Tema 1: La Visión del Árbol de la Vida
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  La visión de Lehi del Árbol de la Vida es una de las visiones más importantes en el Libro de Mormón, que se encuentra en el primer libro de Nefi. Esta visión describe una escena simbólica y alegórica sobre el plan de salvación, las bendiciones que reciben los que siguen a Jesucristo y los peligros de las tentaciones del mundo.
                </p>
                <p>
                  La visión de Lehi del Árbol de la Vida es una de las visiones más importantes en el Libro de Mormón, que se encuentra en el primer libro de Nefi. Esta visión describe una escena simbólica y alegórica sobre el plan de salvación, las bendiciones que reciben los que siguen a Jesucristo y los peligros de las tentaciones del mundo.
                </p>

                <hr />

                <h4> 1) El Árbol de la Vida y su Fruto (1 Nefi 8:10-12):</h4>
                <p>
                  Lehi vio un árbol que producía un fruto deseable para hacer felices a los hombres. Comió de este fruto, y al hacerlo, experimentó una alegría y paz muy grandes. El árbol y su fruto simbolizan el amor de Dios, que es la mayor de las bendiciones que las personas pueden recibir. Este amor se encuentra a través de Jesucristo y su expiación.
                </p>

                <hr />

                <h4> 2) El Campo Grande y Espacioso (1 Nefi 8:9, 20):</h4>
                <p>
                  Lehi observó un campo grande y espacioso. Este campo simboliza el mundo en el que vivimos, lleno de oportunidades y elecciones.
                </p>
                
                <hr />

                <h4> 3) La Barra de Hierro (1 Nefi 8:19-24):</h4>
                <p>
                  Lehi vio una barra de hierro que conducía al árbol de la vida. Esta barra representaba la palabra de Dios, que las personas podían aferrarse para no perderse en el camino hacia el árbol. Aquellos que se aferraban a la barra y perseveraban, eventualmente llegaban al árbol y comían de su fruto.
                </p>

                <hr />

                <h4>4) El Río de Agua Sucia (1 Nefi 8:13, 26-29):</h4>
                <p>Un río que corría junto al camino representaba las tentaciones y pecados del mundo. Lehi observó que muchas personas se ahogaban en este río, simbolizando cómo las tentaciones pueden llevar a la destrucción espiritual.</p>

                <hr />

                <h4>5) El Vapor de Tinieblas (1 Nefi 8:23-24):</h4>
                <p>Este vapor de tinieblas cubría a las personas que estaban tratando de alcanzar el árbol, y simboliza las tentaciones y confusiones que nublan la mente y el entendimiento de las personas, apartándolas del camino hacia el árbol.</p>

                <hr />

                <h4>6) El Edificio Grande y Espacioso (1 Nefi 8:26-27, 33):</h4>
                <p>Lehi vio un edificio grande y espacioso lleno de personas que se burlaban y señalaban a los que se esforzaban por llegar al árbol. Este edificio simboliza el orgullo del mundo y a las personas que se jactan y burlan de los fieles. Muchas personas que caminaban hacia el árbol se sentían avergonzadas por las burlas y abandonaban el camino.</p>

                <hr />

                <h3>Significado de los símbolos según Nefi:</h3>
                <p>Nefi, el hijo de Lehi, también tuvo una visión similar y recibió interpretaciones adicionales de los símbolos. Estas se detallan en 1 Nefi 11 al 15.</p>

                <h4>A) El Árbol de la Vida y su Fruto (1 Nefi 11:21-22, 25):</h4>
                <p>El árbol representa el amor de Dios, y el fruto es el don más grande que Dios da a la humanidad: la expiación de Jesucristo. Comer del fruto simboliza recibir a Jesucristo, sus enseñanzas, y obtener vida eterna.</p>

                <h4>B) El Campo Espacioso (1 Nefi 12:16-18):</h4>
                <p>Este campo, según Nefi, simboliza el mundo en el que vivimos. Es un lugar de pruebas y decisiones, donde las personas deben elegir entre seguir a Dios o ceder a las tentaciones del mundo.</p>

                <h4>C) La Barra de Hierro (1 Nefi 11:25):</h4>
                <p>Nefi explicó que la barra de hierro representa la palabra de Dios, es decir, las Escrituras y los mandamientos de Dios. Aferrarse a la barra de hierro es aferrarse a la verdad y permanecer en el camino correcto hacia el amor de Dios.</p>

                <h4>D) El Río de Agua Sucia (1 Nefi 12:16, 15:27-29):</h4>
                <p>Nefi vio que este río simboliza las profundidades del infierno y las tentaciones del pecado, que tratan de arrastrar a las personas a la perdición espiritual.</p>

                <h4>E) El Vapor de Tinieblas (1 Nefi 12:17):</h4>
                <p>El vapor de tinieblas simboliza las tentaciones del diablo, que ciegan a las personas y las alejan del camino de la rectitud, llevándolas a perderse y caer.</p>

                <h4>F) El Edificio Grande y Espacioso (1 Nefi 12:18):</h4>
                <p>Este edificio, según Nefi, simboliza el orgullo del mundo y las vanidades, las riquezas y el poder temporal. Las personas que se encuentran en el edificio representan a aquellos que se oponen a los caminos de Dios y se burlan de los justos.</p>

                <p>La visión del Árbol de la Vida es una representación alegórica del plan de salvación y de las elecciones que las personas deben hacer en la vida. El fruto del Árbol simboliza el amor de Dios y la salvación a través de Jesucristo. Aquellos que siguen la palabra de Dios (la barra de hierro) y superan las tentaciones del mundo podrán recibir las bendiciones de la vida eterna, mientras que aquellos que se apartan del camino debido al orgullo o las tentaciones se perderán espiritualmente.</p>
              </div>
            </div>
          </div>

          {/*          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Tema 2: La Primera Visión
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  La Primera Visión es un acontecimiento clave en la Restauración del evangelio. José Smith, buscando saber qué iglesia era la verdadera, oró y vio a Dios el Padre y a Jesucristo.
                </p>
                <p>
                  Este evento marca el inicio de la Restauración del evangelio en estos últimos días.
                 
                  <img src="ruta-de-la-imagen.jpg" alt="La Primera Visión" className="img-fluid mt-3" />
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Tema 3: El Libro de Mormón
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  El Libro de Mormón es otro testamento de Jesucristo. Fue traducido por el profeta José Smith y contiene el relato de un pueblo antiguo en las Américas que fue visitado por el Salvador resucitado.
                </p>
                <p>
                  Su mensaje principal es invitar a todos a venir a Cristo y seguir Su evangelio.
                  <img src="ruta-de-la-imagen.jpg" alt="El Libro de Mormón" className="img-fluid mt-3" />
                </p>
              </div>
            </div>
          </div> */}

        </div>
      </section>
    </div >
  );
};

export default LibroDeMormon;
