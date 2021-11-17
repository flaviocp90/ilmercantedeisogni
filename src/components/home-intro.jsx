import React from 'react';
import '../style/home.css'
import articoliDaRegalo from '../img/head_articoli_da_regalo.JPG';


const HomeIntro = () => {
    return (
        <div className="container marketing">
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='' src={articoliDaRegalo} alt="" width="400" height="400"/>
                    <h2>Articoli da regalo</h2>
                    <p>Il Mercante dei Sogni offre una vasta scelta in termini di marche e di gamma produttiva. Puoi trovare alcuni tra i marchi più famosi quali 
                        Claraluna, Quadrifoglio, Le Fate di Cristallo, ETM. Ma puoi trovare anche pezzi di antiquariato come statue in osso, articoli in pietra saponaria</p>
                </div>
                <div className='col-lg-4'>
                    <img className='' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" width="400" height="400"/>
                    <h2>Bomboniere</h2>
                    <p>Il Mercante dei Sogni offre una vasta scelta per ogni tipo di evento. Poniamo la nostra attenzione ed esperienza a curare la tua bomboniera e 
                        ciò che desideri per il tuo giorno speciale
                    </p>
                </div>
                <div className='col-lg-4'>
                    <img className='' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" width="400" height="400"/>
                    <h2>Confezioni</h2>
                    <p>Il Mercante dei Sogni è molto attento a proporre a tutti i suoi clienti la confezione adatta alle loro esigenze con una vasta scelta e soptattutto
                        con la sua creatività
                    </p>
                </div>

            </div>


        </div>

    )
};

export default HomeIntro;