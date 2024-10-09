// eslint-disable-next-line no-unused-vars
import React from "react";
import "./css/Biblia.css";
import './css/global.css'

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
                    <li><a className="dropdown-item" href="#antiguo">Historia (resumen)</a></li>
                    <li><a className="dropdown-item" href="#lacreacion">La Creacion</a></li>
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

      <section className="info-section my-5">
        <h2 className="text-center mb-4">Temas de Estudio</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button id="lacreacion" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Tema 1: La Creación
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>
                  La creación es una historia fascinante que nos enseña cómo Dios, nuestro Padre Celestial, creó el mundo y todo lo que existe en él. Según el relato de la Santa Biblia, todo comenzó en el principio cuando Dios decidió formar los cielos y la tierra.
                </p>
                <p>
                  <h4>Día 1: La luz:</h4>
                  <p>En el primer día, Dios creó la luz. Dice en Génesis 1:1-3: En el principio creó Dios los cielos y la tierra. Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas. Y dijo Dios: Sea la luz; y fue la luz.
                    Dios vio que la luz era buena, y la separó de las tinieblas. A la luz la llamó día y a las tinieblas noche. Ese fue el primer día.</p>
                </p>

                <h4>Día 2: El firmamento:</h4>
                <p>En el segundo día, Dios creó el firmamento, que es el cielo, para dividir las aguas de arriba de las aguas de abajo. En Génesis 1:6-8, se nos enseña: Luego dijo Dios: Haya un firmamento en medio de las aguas, y separe las aguas de las aguas. E hizo Dios el firmamento, y separó las aguas que estaban debajo del firmamento de las aguas que estaban sobre el firmamento; y fue así. Y llamó Dios al firmamento Cielos.
                  Así concluyó el segundo día.</p>

                <h4>Día 3: La tierra, el mar y la vegetación:</h4>
                <p>En el tercer día, Dios separó las aguas y dejó que apareciera lo seco, a lo que llamó tierra, y a las aguas las llamó mares. Génesis 1:9-10 dice: Dijo también Dios: Júntense las aguas que están debajo de los cielos en un lugar, y descúbrase lo seco. Y fue así. Y llamó Dios a lo seco Tierra, y a la reunión de las aguas llamó Mares. Y vio Dios que era bueno.
                  Además, Dios ordenó que la tierra produjera hierba, plantas con semillas, y árboles frutales, y todo empezó a crecer. Este fue el tercer día.</p>

                <h4>Día 4: El sol, la luna y las estrellas:</h4>
                <p>En el cuarto día, Dios puso las lumbreras en el cielo para separar el día de la noche. En Génesis 1:14-18 se describe cómo Dios creó el sol para gobernar el día, y la luna para gobernar la noche, y también hizo las estrellas. Estas lumbreras servían para dar luz a la tierra y para marcar las estaciones, los días y los años. Dios vio que esto era bueno, y así terminó el cuarto día.</p>

                <h4>Día 5: Los peces y las aves:</h4>
                <p>En el quinto día, Dios creó las criaturas que viven en el agua y las aves que vuelan por el cielo. Génesis 1:20-21 dice: Dijo Dios: Produzcan las aguas seres vivientes, y aves que vuelen sobre la tierra, en la abierta expansión de los cielos. Y creó Dios los grandes monstruos marinos, y todo ser viviente que se mueve, que las aguas produjeron según su género, y toda ave alada según su especie. Y vio Dios que era bueno.
                  Dios bendijo a los animales del mar y a las aves, diciéndoles que se multiplicaran y llenaran los mares y la tierra. Este fue el quinto día.</p>

                <h4>Día 6: Los animales y el ser humano:</h4>
                <p>En el sexto día, Dios creó todos los animales terrestres: los ganados, las bestias y todo lo que se arrastra sobre la tierra (Génesis 1:24-25). Después de crear a los animales, Dios hizo algo aún más maravilloso: creó al hombre y a la mujer.
                  Génesis 1:26-27 lo describe de esta manera: Entonces dijo Dios: Hagamos al hombre a nuestra imagen, conforme a nuestra semejanza; y señoree en los peces del mar, en las aves de los cielos, en las bestias, en toda la tierra, y en todo animal que se arrastra sobre la tierra. Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.
                  Dios bendijo al hombre y la mujer, y les mandó que fructificaran, se multiplicaran, llenaran la tierra y la sojuzgaran. Les dio dominio sobre todos los seres vivientes. Además, les dio todas las plantas y frutos para que fueran su alimento. Todo esto fue el sexto día, y Dios vio que todo lo que había hecho era muy bueno.</p>

                <h4>Día 7: El día de reposo:</h4>
                <p>Finalmente, en el séptimo día, Dios descansó de toda la obra que había hecho. Génesis 2:2-3 dice: Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que hizo. Y bendijo Dios el día séptimo, y lo santificó, porque en él reposó de toda la obra que había hecho en la creación.
                Este día es el día de reposo, el día que Dios bendijo y apartó para que todos recordáramos Su obra maravillosa.</p>
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
    </div>
  );
};

export default Biblia;
