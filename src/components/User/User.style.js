import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  //justify-content: space-between;
  align-items: center;
`;

// export const UserAcctWrapper = styled.div`
//   width: 80%;
//   display: flex;
//   margin-top: 100px;
//   //border: 1px solid lightgray;
//
// `

export const LeftSide = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 20px;
  //height: 50vh;
`


export const ReservationList = styled.div`
    flex: 1;
    height: 100%;
    margin-right: 20px; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    //align-items: flex-end;
    align-items: center;
  
  h2 {
    margin: 60px 0 40px;
    font-weight: 500;
    font-size: 26px;
  }
`

export const ScrollList = styled.div`
  height: 80vh;
  width: 95%;
  margin: 0 150px;
  padding: 0 30px;
  //overflow-y: scroll;
  
  
`



