import React, { useEffect, useState } from 'react';
import { Game } from '../Game';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../../theme/default';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Theme } from './types';
import { getSystemTheme } from './utils';

export const App = () => {
  const initialTheme = getSystemTheme() === Theme.DARK ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);
  const [themeSwitcherChecked, setThemeSwitcherChecked] = useState(initialTheme === darkTheme);

  useEffect(() => {
    const newTheme = themeSwitcherChecked ? darkTheme : lightTheme;
    setTheme(newTheme);
  }, [themeSwitcherChecked]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ThemeSwitcher checked={themeSwitcherChecked} onClick={() => setThemeSwitcherChecked((prev) => !prev)} />
      <Game />
    </ThemeProvider>
  );
};
