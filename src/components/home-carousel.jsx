import React from 'react';
import '../style/home.css';
import { Carousel } from 'react-bootstrap';
import home1 from '../img/home1.JPG';
import home2 from '../img/home2.JPG';
import home3 from '../img/home3.JPG';

const HomeCarousel = () => {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 mw-50"
      src={home1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam, doloribus molestias aut enim magni minima similique illum veniam, autem, rerum doloremque commodi tenetur necessitatibus quod vero voluptate consequatur ducimus!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={home2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius est officiis delectus vero, quam iste aperiam aliquid nemo inventore. Quasi dolores eius suscipit neque hic possimus! Itaque repudiandae nemo expedita.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mw-50"
      src={home3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis voluptatibus quasi, deleniti aliquam iusto omnis ab dolore libero voluptatem expedita non accusamus velit vel sapiente tempore a numquam saepe!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
};

export default HomeCarousel;