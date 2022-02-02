import React, {useState} from 'react';
import * as S from './Slider.style';
import MotorcycleItem from "../MotorcycleItem/MotorcycleItem";

const moto = {
    id: 1,
    marka: 'BMW',
    model: '1250GS',
    pojemność: 1254,
    moc: 13,
    rok: 2021,
    cena: 300,
    img: 'https://motocyklem.pl/img/BMWR1200GS.png'
}

const Slider = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const handleActiveDot = () => {
        setCurrentItem(currentItem < 4 ? currentItem + 1 : 0);
    }

    // losowanie obiektu z tablicy
    // przyda sie do losowanie motocykli do slidera
    // var items = ['Yes', 'No', 'Maybe'];
    // var item = items[Math.floor(Math.random() * items.length)];

    return (
        <S.Wrapper>
            <S.ArrowWrapper>
                {/*<button>'</button>*/}
                <button> > </button>
            </S.ArrowWrapper>
            <S.MotorcycleWrapper>
                <MotorcycleItem {...moto} />
            </S.MotorcycleWrapper>
            <S.DotsWrapper>
                {
                    Array.from({length: 5}).map((item, idx) => (
                        <S.Dot key={idx} className={currentItem === idx ? 'active' : ''} />
                    ))
                }
            </S.DotsWrapper>
            <button name='btn' onClick={handleActiveDot}> > </button>
        </S.Wrapper>
    );
};

export default Slider;