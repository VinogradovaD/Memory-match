import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  colors: {
    body: '#000000',
    text: '#ffffff',
    primary: 'mediumseagreen',
    accent: 'tomato',
  },
};
export const lightTheme = {
  colors: {
    body: '#ffffff',
    text: '#000000',
    primary: '#007B55',
    accent: '#D64536',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    all: unset;
    display: revert;
  }

  body {
    background: ${(props) => props.theme.colors.body};
    color: ${(props) => props.theme.colors.text};
    transition: .3s ease;
    font-family: 'Courier New', Courier, monospace;
  }
`;

export type TColors = typeof darkTheme.colors | typeof lightTheme.colors;
