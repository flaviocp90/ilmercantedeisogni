import React from 'react';
import '../style/home.css'
import HomeIntro from '../components/home-intro';
import HomeCarousel from '../components/home-carousel';
import HomeForm from '../components/home-form';

const Home = () => {
    return (
        <div>
            <HomeIntro />
            <HomeCarousel />
            <HomeForm />
        </div>


    )
};

export default Home;