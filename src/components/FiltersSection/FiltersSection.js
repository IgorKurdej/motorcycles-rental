import React, {useState, useEffect, useContext} from 'react';
import AppContext from "../../context";
import * as S from './FiltersSection.style';
import CheckboxOption from "./CheckboxOption/CheckboxOption";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import {init} from "emailjs-com";

const FiltersSection = () => {
    const {
        searchValue,
        setSearchValue,
        sortBy,
        setSortBy,
        searchBrand,
        setSearchBrand,
        setMotorcyclesData,
        initialMotorcyclesData
    } = useContext(AppContext);

    const brands = ['BMW', 'Harley Davidson', 'Yamaha', 'Moto Guzzi', 'KTM', 'Ducati', 'Aprilia'];
    const sortingOptions = ['', 'Price', 'Year', 'Power', 'Capacity'];
    const [toggleOrder, setToggleOrder] = useState(true);


    useEffect(() => {
        setMotorcyclesData(() => (
            [...initialMotorcyclesData]
                .filter(motorcycle => motorcycle.model.toLowerCase().includes(searchValue.toLowerCase())))
                .filter(motorcycle => searchBrand.includes(motorcycle.brand))
                .sort((item1, item2) => (
                    toggleOrder ?
                        ( sortBy === '' ?
                                (item1.id < item2.id ? -1 : 0) :
                                (item1[sortBy] < item2[sortBy] ? -1 : 0)
                        ) : (
                            sortBy === '' ?
                                (item1.id > item2.id ? -1 : 0) :
                                (item1[sortBy] > item2[sortBy] ? -1 : 0)
                        )
                ))
        )
    }, [searchValue, searchBrand, sortBy, toggleOrder]);

    return (
        <S.Wrapper>
            <S.SearchSection>
                <S.Label>Wyszukaj motocykl</S.Label>
                <input
                    type='text'
                    value={searchValue}
                    placeholder='wyszukaj model...'
                    onChange={e => setSearchValue(e.target.value)}
                />
                <S.Button onClick={() => setSearchValue('')}>
                    wyczyść wyszukiwanie
                </S.Button>
            </S.SearchSection>
            <S.FiltersSection>
                <S.Label>Marka</S.Label>
                <S.CheckboxOptions>
                    {
                        brands.map((brand, idx) => (
                            searchBrand.includes(brand) ?
                                <CheckboxOption key={idx} brand={brand} checked={true}>{brand}</CheckboxOption> :
                                <CheckboxOption key={idx} brand={brand} checked={false}>{brand}</CheckboxOption>
                        ))
                    }
                </S.CheckboxOptions>
                <S.ButtonWrapper>
                    <S.Button onClick={() => setSearchBrand([...brands])}>
                        zaznacz wszystkie
                    </S.Button>
                    <S.Button onClick={() => setSearchBrand([])}>
                        odznacz wszystkie
                    </S.Button>
                </S.ButtonWrapper>
            </S.FiltersSection>
            <S.SortSection>
                <S.SortTitleWrapper>
                    <S.Label>Sortuj po: </S.Label>
                    <S.OrderByButton onClick={() => setToggleOrder(!toggleOrder)}>
                        <>&#8645;</>
                    </S.OrderByButton>
                </S.SortTitleWrapper>
                <S.Select onChange={e => setSortBy(e.target.value.toLowerCase())}>
                    {
                        sortingOptions.map((option, idx) => <option key={idx}>{option}</option>)
                    }
                </S.Select>
            </S.SortSection>
        </S.Wrapper>
    );
};

export default FiltersSection;