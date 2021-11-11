import React from 'react';
import '../style/home.css';
import { Carousel, Button } from 'react-bootstrap';

const HomeCarousel = () => {
    return (
        <div className='container carusel-container'>
            <div className='row'>
                <div className='col d-flex justify-content-start'>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>                </div>

                <div className='col d-flex justify-content-end'>
                    <div className='align-self-stretch'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam explicabo ipsum ipsa? Ipsum obcaecati, a inventore sequi illum repudiandae repellat nobis ex illo dolor culpa quae dolore fugit aliquid ea?
                    </div>
                </div>
            </div>
        </div>

    )
};

export default HomeCarousel;