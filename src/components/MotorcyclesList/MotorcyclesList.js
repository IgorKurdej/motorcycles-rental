import React, {useEffect, useState} from 'react';
import * as S from './MotorcyclesList.style'
import axios from "axios";
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import {Link} from "react-router-dom";

const MotorcyclesList = () => {
    const [motorcycles, setMotorcycles] = useState([]);

    useEffect(() => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/motorcycles')
            .then(res => {
                setMotorcycles(res.data.sort((val1, val2) => val2.id - val1.id))
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <S.Wrapper>
            <S.ButtonWrapper>
                <Link to='/motorcycle' >
                    <S.Button>+ Dodaj motocykl</S.Button>
                </Link>
            </S.ButtonWrapper>
            <S.MotorcyclesWrapper>
                {console.log(motorcycles)}
                {
                    motorcycles.map(item => <MotorcycleItem key={item.id} motorcycle={item} booking motoList />)
                }
            </S.MotorcyclesWrapper>
        </S.Wrapper>
    );
};

export default MotorcyclesList;