import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/KTM.png'
import {medium} from "../../Responsive";

export const Container = styled.div`
  // background: url(${img}) left bottom;
  //background: url('https://www.adventurebikerider.com/wp-content/uploads/2020/03/ABR-Wales-ABR-9451-scaled.jpg') bottom;
  //background-size: cover;
  height: 70vh;
  background-color: black;
  //opacity: 0.6;
  display: flex;
  ${medium({
    height: '50vh',
  })}
`

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${medium({
    display: 'none',
  })}
`

export const Circle = styled.div`
  width: 450px;
  height: 450px;
  background-color: forestgreen;
  transition: 1s ease;
  border-radius: 50%;
  //display: none;
`;

export const ImageContainer = styled.div`
  background-image: url(${img});
  height: 485px;
  width: 850px;
  position: absolute;
  animation: appear 1s ease;
  
  @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
`

export const RightSide = styled.div`
  flex: 1;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${medium({
    
  })}
`;

export const Title = styled.h1`
  font-family: 'Allura', cursive;
  color: white;
  font-size: 72px;
`

export const Description = styled.h2`
  color: white;
  font-weight: 500;
`

export const Button = styled.button`
  background: none;
  border: 4px solid forestgreen;
  color: white;
  padding: 20px 40px;
  font-size: 30px;
  margin: 30px;
  cursor: pointer;
  
  :hover {
    background-color: forestgreen;
    transition: .5s ease;
  }
  
  ${medium({
    fontSize: '20px'
  })}
`;