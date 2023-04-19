import styled from 'styled-components';

export const GoUpWrapper = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: var(--colors-bg-green);
  position: fixed;
  right: -60px;
  bottom: 20px;
  opacity: 1;
  z-index: 50;
  transition: all 0.3s;
  cursor: pointer;

  &:after {
    content: "";
    border: solid var(--colors-text-wight);
    border-width: 0 3px 3px 0;
    display: inline-block;
    transform: rotate(-135deg);
    --webkit-transform: rotate(-135deg);
    padding: 6px;
    color: white;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 17px;
    left: 13px;
  }
  &:hover {
    background: var(--color-dg-footer);
  }
`






