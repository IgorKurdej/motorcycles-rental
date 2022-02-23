import React, {useEffect, useState} from 'react';
import * as S from './Slider.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = ({ motorcycles }) => {
    const [currentItem, setCurrentItem] = useState(0);

    const handleArrowClick = (direction) => {
        direction === 'left' ?
            setCurrentItem(currentItem > 0 ? currentItem - 1 : 4) :
            setCurrentItem(currentItem < 4 ? currentItem + 1 : 0);
    }

    return (
        <S.Wrapper>
            <S.ArrowWrapper direction='left' onClick={() => handleArrowClick('left')}>
                <ArrowBackIosNewIcon />
            </S.ArrowWrapper>
            <S.ContentWrapper>
                <S.MotorcycleWrapper>
                    {
                        motorcycles.map((item, idx) => idx === currentItem && <MotorcycleItem {...item} key={idx} offer />)
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