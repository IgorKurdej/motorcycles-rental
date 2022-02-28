import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  height: 70px;
  width: 200px;
  background-color: white;
  border: 1px solid #8f8e8e;
  position: absolute;
  top: 80px;
  border-top: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  padding: 10px 10px 0;
`

export const DdLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-bottom: 8px;
  
  :hover {
    color: #8f8e8e;
  }
`