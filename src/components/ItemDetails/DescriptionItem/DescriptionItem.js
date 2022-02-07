import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.offer && 'column'};
  margin: ${(props) => props.reservation ? '1.5px' : '10px'};
  align-items: center;
  //justify-content: center;
`;

const Wrapper = styled.div`
  flex: 1;
  text-align: ${props => props.offer ? 'center' : props.right ? 'right' : 'left'};
  margin-bottom: ${props => props.offer && '5px'};
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
                            <Container>
                                <Wrapper>
                                    <p>{children}</p>
                                </Wrapper>
                                <Wrapper right>
                                    <p>{value}{unit}</p>
                                </Wrapper>
                            </Container>
                        )
                )
            }
            { !hr && <hr /> }
        </>
    )
};

export default DescriptionItem;