import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';
import AppContext from "../context";
import MotorcyclesList from "../components/MotorcyclesList/MotorcyclesList";
import FiltersSection from "../components/MotorcyclesList/FiltersSection/FiltersSection";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100vw;
  overflow-x: hidden;
`;

const Offer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchBrand, setSearchBrand] = useState(['BMW', 'Harley Davidson', 'Honda']);
    const [sortBy, setSortBy] = useState('');
    const [motorcyclesData, setMotorcyclesData] = useState([]);
    const [initialMotorcyclesData, setInitialMotorcyclesData] = useState([]);

    useEffect(() => {
        getMotorcycles();
    }, [])

    const getMotorcycles = () => {
        axios.get('http://localhost:3001/motorcycles')
            .then(res => {
                setMotorcyclesData(res.data);
                setInitialMotorcyclesData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

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
                setMotorcyclesData,
                initialMotorcyclesData
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