import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from 'styled-components';
import AppContext from "../context";
import OfferList from "../components/OfferList/OfferList";
import FiltersSection from "../components/FiltersSection/FiltersSection";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100vw;
  overflow-x: hidden;
  
  @media (max-width: 1650px) {
    justify-content: space-around;
  }
  
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Offer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchBrand, setSearchBrand] = useState(['BMW', 'Harley Davidson', 'Yamaha', 'Moto Guzzi', 'KTM', 'Ducati', 'Aprilia']);
    const [sortBy, setSortBy] = useState('');
    const [motorcyclesData, setMotorcyclesData] = useState([]);
    const [initialMotorcyclesData, setInitialMotorcyclesData] = useState([]);

    useEffect(() => {
        getMotorcycles();
    }, [])

    const getMotorcycles = () => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/motorcycles')
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
                    <OfferList />
                </Wrapper>
            </AppContext.Provider>
        </>
    );
};

export default Offer;