import React from 'react';
import Banner from "../components/Banner/Banner";
import Slider from '../components/Slider/Slider';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
    return (
        <>
            <Banner />
            <SliderWrapper>
                <Slider />
            </SliderWrapper>
        </>
    );
};

export default Home;