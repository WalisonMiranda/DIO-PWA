import { createGlobalStyle } from 'styled-components';
import CovidImage from '../assets/images/covid.jpg';

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
  }

  #root {
    background: url(${CovidImage});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }
`;

export default globalStyles
