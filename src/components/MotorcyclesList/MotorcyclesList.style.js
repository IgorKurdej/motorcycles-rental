import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  display:flex;
  flex-direction: column;
  
  @media (max-width: 1650px) {
    width: 70%;
  }
  
  @media (max-width: 1200px) {
    width: 60%;
  }
`
