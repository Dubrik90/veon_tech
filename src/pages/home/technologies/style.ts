import styled from 'styled-components';

export const TechnologiesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`
export const TechnologiesTitle = styled.h2`
  will-change: transform;
  font-weight: var(--fw-bold);
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 66px;
  color: var(--colors-text-dark);
  @media (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
    line-height: 37px;
  }

`

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;
  padding-bottom: 10px;
  position: relative;
  
  @media (max-width: 768px) {
    border: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    justify-content: start;
    align-items: stretch;
    justify-items: center;
  }
  @media (max-width: 477px) {
    grid-template-columns: repeat(1, 1fr);
    font-size: 18px;
  }


`
export const ButtomTab = styled.button`
  font-weight: var(--fw-regular);
  font-size: 20px;
  line-height: 25px;
  position: relative;
  transition: all 0.3s;

  color: var(--colors-text-dark);

  &:before {
    transition: all 0.4s;
    content: '';
    position: absolute;
    height: 3px;
    width: 110%;
    bottom: -8px;
    background-color: #6EEC4E;
    z-index: 50;
    opacity: 0;
    visibility: hidden;
    left: 50%;
    transform: translateX(-50%);
  }

  &.active {
    &:before {
      opacity: 1;
      visibility: visible;
    }
  }
  @media (max-width: 477px) {
    font-size: 18px;
    line-height: 11px;
  }

`
export const TechnologiesItemBlock = styled.div`
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  scale: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`
export const ImgWrap = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
`


