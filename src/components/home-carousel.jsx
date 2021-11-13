import React from 'react';
import '../style/home.css';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 mw-50"
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
      src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
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