import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ReservationList = styled.div`
    width: 50%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 1200px) {
        width: 90%; 
    }
  
    h2 {
    margin: 60px 0 40px;
    font-weight: 500;
    font-size: 26px;
    }
`

export const ScrollList = styled.div`
  width: 95%;
  padding: 0 30px;
  //overflow-y: scroll;
  
  
`