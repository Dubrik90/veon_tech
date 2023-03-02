import styled from 'styled-components';

type PropsBurger = {
    isOpenBurger: boolean
}

export const Burger = styled.button<PropsBurger>`
  display: none;
}

@media (max-width: 1060px) {
  display: block;
  position: relative;
  width: 40px;
  flex: 0 0 36px;
  height: 13px;
  cursor: pointer;
  z-index: 5;

  span,
  &::before,
  &::after {
    content: "";
    transition: all 0.3s ease 0s;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--colors-text-dark);

    @media (max-width: 768.98px) {
      background: var(--colors-text-dark);
    }
  }

  &::before {
    top: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(-45deg)'};
  }

  &::after {
    bottom: ${({isOpenBurger}) => isOpenBurger ? 'calc(50% - 1px)' : '0px'};
    transform: ${({isOpenBurger}) => isOpenBurger && 'rotate(45deg)'};
  }

  span {
    top: calc(50% - 1px);
    transform: ${({isOpenBurger}) => isOpenBurger && 'scale(0)'};
  }
}
`
