import React, { useEffect, useState } from 'react';
import { Game } from '../Game';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../../theme/default';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Theme } from './types';

export const App = () => {
  const initialTheme = localStorage.getItem('selectedTheme') === Theme.DARK ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);
  const [themeSwitcherChecked, setThemeSwitcherChecked] = useState(initialTheme === darkTheme);

  useEffect(() => {
    const newTheme = themeSwitcherChecked ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem('selectedTheme', themeSwitcherChecked ? Theme.DARK : Theme.LIGHT);
  }, [themeSwitcherChecked]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeSwitcher checked={themeSwitcherChecked} onClick={() => setThemeSwitcherChecked((prev) => !prev)} />
      <Game />
    </ThemeProvider>
  );
};
