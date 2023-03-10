import styled from 'styled-components';

export const GoUpWrapper = styled.div`
  min-width: 55px;
  min-height: 55px;
  border-radius: 50%;
  background-color: #5db447;
  position: fixed;
  right: -60px;
  bottom: 20px;
  opacity: 1;
  z-index: 10;
  transition: all 0.3s;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: none;
  }

  &:after {
    content: "";
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    transform: rotate(-135deg);
    --webkit-transform: rotate(-135deg);
    padding: 7px;
    color: white;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 22px;
    left: 19px;
    
  }
  &:hover {
    background-color: #121f0d;
  }
`






