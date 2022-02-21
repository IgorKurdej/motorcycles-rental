import React from 'react';
import styled from "styled-components";

const CheckoutWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    font-size: 18px;
    font-weight: ${props => props.price && '700'};
  }
`

const Checkout = ({ startDate, endDate, numberOfDays, price }) => (
    (startDate === '' || endDate === '') || (numberOfDays === 0 || numberOfDays === 1) ?
        <CheckoutWrapper>
            <p>Cena za dzień</p>
            <p>{price} zł</p>
        </CheckoutWrapper>
        :
        <CheckoutWrapper>
            <p>Cena za {numberOfDays} dni</p>
            <p>{price * numberOfDays} zł</p>
        </CheckoutWrapper>
);

export default Checkout;