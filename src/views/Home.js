import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner/Banner";
import Slider from '../components/Slider/Slider';
import styled from 'styled-components';
import axios from "axios";

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
    const [motorcyclesData, setMotorcyclesData] = useState([]);

    useEffect(() => {
        getMotorcycles();
    }, []);

    const getMotorcycles = () => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/motorcycles')
            .then(res => {
                setMotorcyclesData(drawMotorcycles(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }

    const drawMotorcycles = (data) => {
        return data
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);
    }

    return (
        <>
            <Banner />
            <SliderWrapper>
                <Slider motorcycles={motorcyclesData} />
            </SliderWrapper>
        </>
    );
};

export default Home;