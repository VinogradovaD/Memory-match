import React, { FC } from 'react';
import { IThemeSwitcherProps } from './types';
import { SwitcherInput, SwitcherSlider, SwitcherLabel, ThemeSwitcherContainer } from './style';

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ checked, onClick }) => {
  return (
    <ThemeSwitcherContainer>
      <p>light mode ☀️</p>
      <SwitcherLabel>
        <SwitcherInput checked={checked} onChange={onClick} />
        <SwitcherSlider checked={checked} />
      </SwitcherLabel>
      <p>dark mode 🌒</p>
    </ThemeSwitcherContainer>
  );
};
