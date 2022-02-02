import React, {useState} from 'react';
import styled from 'styled-components';
import AppContext from "../context";
import Navbar from "../components/Navbar/Navbar";
import MotorcyclesList from "../components/MotorcyclesList/MotorcyclesList";
import FiltersSection from "../components/MotorcyclesList/FiltersSection/FiltersSection";
import {motorcycles} from "../assets/Data";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100vw;
  overflow-x: hidden;
`

const Offer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchBrand, setSearchBrand] = useState(['BMW', 'Harley Davidson', 'Honda']);
    const [sortBy, setSortBy] = useState('');
    const [motorcyclesData, setMotorcyclesData] = useState([...motorcycles]);

    return (
        <>
            <AppContext.Provider value={{
                searchValue,
                setSearchValue,
                searchBrand,
                setSearchBrand,
                sortBy,
                setSortBy,
                motorcyclesData,
                setMotorcyclesData
            }}>
                <Wrapper>
                    <FiltersSection />
                    <MotorcyclesList />
                </Wrapper>
            </AppContext.Provider>
        </>
    );
};

export default Offer;