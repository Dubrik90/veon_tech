import styled from "styled-components";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export const CaseBlockWrapper = styled.div`

`

export const CaseContent = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  
  @media (max-width: 1440px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  
`
export const Button = styled.button`
  font-size: 20px;
  line-height: 1.2;
  color: var(--colors-text-dark);
`
export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  background: var(--colors-bg);
  border: 1px solid var(--colors-bg-green);
  border-radius: 10px;
  padding: 8px 10px;
  max-width: 300px;
  margin: 0 auto 20px auto;
  transition: all 0.3s;
  cursor: pointer;
  
  
  :hover {
    color: #5db447;
    ${Button} {
      color: #5db447;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const ArrowIcon = styled(KeyboardDoubleArrowDownIcon)`
    fill: var(var(--colors-text-dark)) !important;
  
  
`

export const HiddenBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--colors-text-green);
  opacity: 0;
  visibility: hidden;
  border-radius: 17px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  scale: 0;
  backdrop-filter: blur(5px);

  a {
    display: inline-flex;
    padding: 10px 15px;
    font-size: 18px;
    line-height: 1.1;
    font-weight: var(--fw-bold);
    background-color: var(--color-grey);
    color: var(--color-grey-light);
    transition: all 0.3s;

    :hover {
      background-color: var(--color-grey-light);
      color: var(--color-grey);
    }
  }
`
export const Title = styled.h5`
  font-size: 30px;
  line-height: 1.1;
  font-weight: var(--fw-medium);
  color: var(--color-grey-light);
  z-index: 50;
  
  @media (max-width: 1024px) {
    font-size: 20px;
  }

`
export const Text = styled.p`
  font-size: 20px;
  line-height: 1.1;
  color: var(--color-grey-light);
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`


export const ImgBlock = styled.div`
  
`
export const Content = styled.div`
  position: relative;
  border-radius: 17px;
  max-width: 512px;

  @media (max-width: 1440px) {
    max-width: 400px;
  }
  @media (max-width: 1024px) {
    max-width: 290px;
  }

  :hover {
    ${HiddenBlock} {
      opacity: 1;
      visibility: visible;
      scale: 1;
    }
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

`



