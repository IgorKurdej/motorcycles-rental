import React, {useEffect, useState} from 'react';
import * as S from './Slider.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from "axios";

// const moto = [
//     {
//         id: 1,
//         marka: 'Harley Davidson',
//         model: 'Harley ',
//         pojemność: 1254,
//         moc: 13,
//         rok: 2021,
//         cena: 300,
//         img: 'https://motocyklem.pl/img/BMWR1200GS.png'
//     },
//     {
//         id: 1,
//         marka: 'BasdbvcMW',
//         model: '1250GS',
//         pojemność: 1254,
//         moc: 13,
//         rok: 2021,
//         cena: 300,
//         img: 'https://motocyklem.pl/img/BMWR1200GS.png'
//     },
//     {
//         id: 1,
//         marka: 'w',
//         model: '1250GS',
//         pojemność: 1254,
//         moc: 13,
//         rok: 2021,
//         cena: 300,
//         img: 'https://motocyklem.pl/img/BMWR1200GS.png'
//     },
//     {
//         id: 1,
//         marka: 'BfcfesfsesersddsadwaMW',
//         model: '1250GS',
//         pojemność: 1254,
//         moc: 13,
//         rok: 2021,
//         cena: 300,
//         img: 'https://motocyklem.pl/img/BMWR1200GS.png'
//     },
//     {
//         id: 1,
//         marka: 'BdadwadsaMW',
//         model: '1250GS',
//         pojemność: 1254,
//         moc: 13,
//         rok: 2021,
//         cena: 300,
//         img: 'https://motocyklem.pl/img/BMWR1200GS.png'
//     }
// ]

const Slider = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [motorcyclesData, setMotorcyclesData] = useState([]);
    const [motorcyclesSlider, setMotorcyclesSlider] = useState([]);

    useEffect(() => {
        getMotorcycles();
    }, [])

    const getMotorcycles = () => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/motorcycles')
            .then(res => {
                setMotorcyclesData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleArrowClick = (direction) => {
        direction === 'left' ?
            setCurrentItem(currentItem > 0 ? currentItem - 1 : 4) :
            setCurrentItem(currentItem < 4 ? currentItem + 1 : 0);
    }

    const drawMotorcycles = () => {
        let counter = 0;
        let item;
        const newArray = [];

        while (counter < 5) {
            item = motorcyclesData[Math.floor(Math.random() * motorcyclesData.length)];
            newArray.push(item);
            counter++;
        }
        console.log(newArray);
        // console.log(motorcyclesSlider);
    }

    // losowanie obiektu z tablicy
    // przyda sie do losowanie motocykli do slidera
    // var items = ['Yes', 'No', 'Maybe'];


    return (
        <S.Wrapper>
            <S.ArrowWrapper direction='left' onClick={() => handleArrowClick('left')}>
                <ArrowBackIosNewIcon />
            </S.ArrowWrapper>
            <S.ContentWrapper>
                <S.MotorcycleWrapper>
                    {
                        // console.log(motorcyclesData)

                        // drawMotorcycles()
                        // moto.map((item, idx) => idx === currentItem && <MotorcycleItem {...item} key={idx} offer />)
                    }
                </S.MotorcycleWrapper>
                <S.DotsWrapper>
                    {
                        Array.from({length: 5}).map((item, idx) => (
                            <S.Dot onClick={() => setCurrentItem(idx)}
                                key={idx} className={currentItem === idx ? 'active' : ''} />
                        ))
                    }
                </S.DotsWrapper>
            </S.ContentWrapper>
            <S.ArrowWrapper direction='right' onClick={() => handleArrowClick('right')}>
                <ArrowForwardIosIcon />
            </S.ArrowWrapper>
        </S.Wrapper>
    );
};

export default Slider;