import React, { useRef } from 'react';
import '../style/home.css';
import emailjs from 'emailjs-com';

const HomeForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 
            'template_8ubv9e7',
             e.target, 
             'user_KGHmMsDZyYkVSczDuQgAx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Message send');
    }

    return (
        <div>
            <div className="container form-component">
            <h1 className='d-flex justify-content-center'>Inviaci una mail</h1>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nome e Cognome" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Indirizzo mail" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Oggetto" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default HomeForm;