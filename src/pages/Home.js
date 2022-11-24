import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import CalendarContainer from '../components/CalendarContainer';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Home = () => {
    return (
        <>
        <ImageSlider slides={SliderData}/>
        <CalendarContainer />
        <Footer />
        </>
    );
};

export default Home;