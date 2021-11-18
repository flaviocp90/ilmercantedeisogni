import React from "react";
import "../style/about.css";
import about1 from '../img/about1.JPG';
import about2 from '../img/about2.JPG';
import about3 from '../img/about3.JPG';


const About = () => {
  return (
    <div className="container">
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Da dove siamo partiti
          </h2>
          <p className="lead">
            Il Mercante dei Sogni nasce nel 1989 con Giacomo e Raffaella i quali si avvicinano per la prima volta al mondo del commercio. Il punto vendita nasce inizialmente come negozio di oggettistica e articoli da regalo ma con il passare del tempo l’attenzione viene rivolta anche al mondo delle cerimonie così da far diventare le bomboniere e quindi anche la realizzazione della confezione, uno dei punti di forza dell’esercizio.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src={about1}
            alt=""
          />
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            La nostra misson
          </h2>
          <p className="lead">
            Da noi non trovi solo complementi di arredo ma anche bigiotteria, soprattutto quella realizzata con pietre preziose.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto"
            src={about2}
            alt=""
          />
        </div>
      </div>

      <hr className="featurette-divider"></hr>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Dove siamo arrivati
          </h2>
          <p className="lead">
            Oggi, Il Mercante dei Sogni, sito a torrette di Mercogliano è sempre più attento ai bisogni dei suoi clienti, pronto ad accompagnarli nelle loro scelte. Punto di forza è sicuramente la cura del particolare, seguiamo il cliente dal giorno 1 fino a quello della cerimonia.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src={about3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
