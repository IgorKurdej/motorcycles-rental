import React, {useState, useContext} from 'react';
import AppContext from "../../../../context";
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 5px;
  
  input {
    margin-right: 5px;
  }
  
  label {
    font-size: 14px;
  }
`;

const CheckboxOption = ({brand, checked}) => {
    const {searchBrand, setSearchBrand} = useContext(AppContext);
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    const handleInputChange = e => {
        setToggleCheckbox(!toggleCheckbox);
        e.target.checked === true ?
            setSearchBrand([...searchBrand, e.target.name]) :
            setSearchBrand([...searchBrand].filter(brand => brand !== e.target.name));
    }

    return (
        <Wrapper>
            <input
                type="checkbox"
                name={brand}
                checked={checked}
                onChange={handleInputChange}
            />
            <label htmlFor="horns">{brand}</label>
        </Wrapper>
    );
};

export default CheckboxOption;