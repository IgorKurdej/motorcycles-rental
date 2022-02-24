import {css} from 'styled-components'

export const medium = (props) => {
    return css`
      @media only screen and (max-width: 1200px) {
        ${props}
      }
    `
};