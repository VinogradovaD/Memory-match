import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  @media (max-width: ${breakpoints['pad']}) {
    top: 10px;
    right: 10px;
    gap: 3px;
  }

  @media (max-width: ${breakpoints['phone']}) {
    top: 8px;
    right: 8px;
    gap: 2px;
  }
`;

export const SwitcherLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  @media (max-width: ${breakpoints['pad']}) {
    width: 50px;
    height: 28px;
  }

  @media (max-width: ${breakpoints['phone']}) {
    width: 40px;
    height: 23px;
  }
`;

export const SwitcherInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitcherSlider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : '#ccc')};
  transition: 0.4s;
  border-radius: 34px;
  box-shadow: ${({ theme, checked }) => (checked ? `0 0 1px ${theme.colors.primary}` : 'none')};

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) => (props.checked ? 'translateX(26px)' : 'translateX(0)')};
  }

  @media (max-width: ${breakpoints['pad']}) {
    &:before {
      height: 20px;
      width: 20px;
      transform: ${(props) => (props.checked ? 'translateX(22px)' : 'translateX(0)')};
    }
  }

  @media (max-width: ${breakpoints['phone']}) {
    &:before {
      height: 16px;
      width: 16px;
      transform: ${(props) => (props.checked ? 'translateX(18px)' : 'translateX(0)')};
    }
  }
`;
