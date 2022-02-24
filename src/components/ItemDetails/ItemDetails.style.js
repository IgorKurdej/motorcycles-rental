import styled from "styled-components";

export const DetailsWrapper = styled.div`
    height: 100%;
    flex: ${({reservation}) => reservation ? 2 : 1};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: ${({reservation}) => reservation && '5px'};
    
    @media (max-width: 1200px) {
      height: ${props => props.offer && '250px'};
      justify-content: ${props => props.offer && 'center'};
      background-color: ${props => props.offer && '#838282'};
      //flex: ${props => props.offer && '2'};
      
    }
`

export const ModelWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
    
    h1 {
      margin: 0 10px;
      font-weight: 500;
    }
    
    @media (max-width: 1200px) {
      margin: ${props => props.offer && '0'};
      background-color: ${props => props.offer && '#838282'};
    }
`

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.booking && 'column'};
    justify-content: space-around;
    
    p {
      font-size: ${({reservation}) => reservation ? '18px' : '20px'};
    }
`

export const ReservationWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    p {
      font-size: 18px;
    }
    
    button {
        margin: 10px;
        width: 100%;
        padding: 10px 50px;
        background-color: forestgreen;
        color: white;
        border: 2px solid forestgreen;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        
        :hover {
          background-color: transparent;
          color: forestgreen;
        }
    }
`

export const ReservationButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  
  Link {
    width: 100%;
    color: red;
  }
`

export const ReservationButton = styled.button`
    font-size: 16px;
    padding: 5px;
    margin: ${props => props.edit ? '10px 5px 0 0' : '10px 0 0 5px'};
    width: 50%;
    border: ${props => props.edit ? '2px solid forestgreen' : '2px solid #be2020'};
    color: ${props => props.edit ? 'forestgreen' : '#be2020'};
    background-color: transparent;
    
    
    :hover {
      background-color: ${props => props.edit ? 'forestgreen' : '#be2020'};
      color: white;
    }
`