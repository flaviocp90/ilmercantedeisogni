import React from 'react';
import '../style/home.css'
import articoliDaRegalo from '../img/head_articoli_da_regalo.JPG';
import bomboniere from '../img/head_bomboniere.JPG';
import confezioni from '../img/head_confezioni.JPG';


const HomeIntro = () => {
    return (
        <div className="container marketing">
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='marketing-img' src={articoliDaRegalo} alt="" width="400"/>
                    <h2>Articoli da regalo</h2>
                    <p>Il Mercante dei Sogni offre una vasta scelta sia in termini di marche sia in termini di gamma di prodotti. Puoi trovare alcuni tra i marchi più famosi quali Claraluna, Quadrifoglio, Le Fate di Cristallo, ma puoi trovare anche pezzi di antiquariato come statue in osso, articoli in pietra saponaria e in porcellana.</p>
                </div>
                <div className='col-lg-4'>
                    <img className='marketing-img' src={bomboniere} alt="" width="400" />
                    <h2>Bomboniere</h2>
                    <p>Da noi trovi una vasta scelta per ogni tipo di evento, poniamo la massima attenzione alla cura della tua bomboniera e a ciò che desideri per il tuo giorno speciale. Ti seguiamo e ti consigliamo a partire dalla scelta dei confetti, dei tessuti per la confezione, delle partecipazioni, fino alla scelta della bomboniera stessa.
                    </p>
                </div>
                <div className='col-lg-4'>
                    <img className='marketing-img' src={confezioni} alt="" width="400" />
                    <h2>Confezioni</h2>
                    <p>Siamo molto attenti a proporre ai nostri clienti la confezione adatta alle sue esigenze con una vasta scelta di prodotti e soprattutto con la nostra creatività. La confezione, infatti, non è mai standard ma viene creata al momento in base a quelle che sono le richieste dei clienti (quali ad esempio temi o colori particolari scelti per la cerimonia).
                    </p>
                </div>

            </div>


        </div>

    )
};

export default HomeIntro;