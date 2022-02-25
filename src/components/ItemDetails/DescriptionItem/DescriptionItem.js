import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.offer && 'column'};
   margin: ${(props) => props.reservation ? '1.5px' : '10px'};
  align-items: center;
  //justify-content: center;
  @media (max-width: 1300px) {
    margin-bottom: ${props => props.booking && '4px 0'};
  }
  
  @media (max-width: 750px) {
    margin: ${props => props.booking && '0'};
  }
`;

const Wrapper = styled.div`
  flex: 1;
  text-align: ${props => props.offer ? 'center' : props.right ? 'right' : 'left'};
  margin-bottom: ${props => props.offer && '5px'};
  input {
    border: none;
    font-size: 16px;
    width: 140px;
  }
  
  p {
     padding: ${props => props.booking && props.right ? '0 30px 0 0' : '0 0 0 30px'}
     text-align: center;
  }
  
  @media (max-width: 910px) {
    flex: ${props => props.booking && props.right ? '1' : '2'};
    display: ${props => props.booking && 'flex'};
  }
  
`

const Hr = styled.hr`
  @media (max-width: 1100px) {
    width: 85%;
    margin: auto;
  }
`

const DescriptionItem = ({children, value, hr, unit, offer, reservation}) => {
    return (
        <>
            {
                reservation ? (
                        <Container reservation>
                            <Wrapper>
                                <p>{children}</p>
                            </Wrapper>
                            <Wrapper right>
                                <p>{value}{unit}</p>
                            </Wrapper>
                        </Container>
                    ) : (
                        offer ? (
                            <Container offer>
                                <Wrapper offer>
                                    <p>{children}</p>
                                </Wrapper>
                                <Wrapper>
                                    <p>{value}{unit}</p>
                                </Wrapper>
                            </Container>
                        ) : (
                            <>
                                <Container booking>
                                    <Wrapper booking>
                                        <p>{children}</p>
                                    </Wrapper>
                                    <Wrapper booking right>
                                        <p>{value}{unit}</p>
                                    </Wrapper>
                                </Container>
                                <Hr />
                            </>
                        )
                )
            }
            { !hr && (offer || reservation) && <hr /> }
        </>
    )
};

export default DescriptionItem;