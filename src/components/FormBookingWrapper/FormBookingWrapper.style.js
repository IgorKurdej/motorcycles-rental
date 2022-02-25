import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MotorcycleWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  @media (max-width: 1100px) {
    height: 120px;
    width: 100%;
    padding-top: 0;
  }
  
  @media (max-width: 750px) {
    display: none;
  }
`

export const FormWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  
  @media (max-width: 750px) {
    padding-top: 0;
  }
`
export const Hr = styled.hr`
    height: 90%;
    margin: auto;
    @media (max-width: 1100px) {
      display: none;
    }
`
