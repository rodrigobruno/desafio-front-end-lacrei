import { createGlobalStyle } from 'styled-components';
import { COLORS } from './variables';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: #FFF;
        color: ${COLORS.grey};
    }
`;

export default GlobalStyle;
