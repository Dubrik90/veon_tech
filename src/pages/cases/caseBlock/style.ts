import styled from "styled-components";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {flexColumn} from "../../../common/style/mixin";
import {TitleH4} from "../../../common/style/global";

export const CaseBlockWrapper = styled.div`

`

export const CaseContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //display: flex;
  gap: 60px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  
 
  
  @media (max-width: 1440px) {
    gap: 20px;
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

type ButtonBlockProps = {
    showMore: boolean
}
export const ButtonBlock = styled.div<ButtonBlockProps>`
  display: ${({showMore}) => showMore ? 'none' : 'flex'} ;
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
  ${flexColumn()};
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
 // background-color: var(--colors-text-green);
  opacity: 0;
  visibility: hidden;
  border-radius: 17px;
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
 // scale: 0;
 // backdrop-filter: blur(5px);

  a {
    display: inline-flex;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: var(--fw-bold);
    background-color: var(--colors-text-green);
    color: var(--color-grey-light);
    transition: all 0.3s;
    border-radius: 5px;

    :hover {
      background-color: var(--color-grey-light);
      color: var(--color-grey);
    }
  }
`
export const Title = styled(TitleH4)`
  color: var(--color-grey-light);
  z-index: 50;
  
  @media (max-width: 1024px) {
    font-size: 18px;
  }

`
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.1;
  color: var(--color-grey-light);
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`


export const ImgBlock = styled.div`
  
`
type ContentProps = {
    showMore: boolean
}
export const Content = styled.div<ContentProps>`
  position: relative;
  border-radius: 17px;
  max-width: 512px;
  overflow: hidden;

 


  :nth-child(n + 10) {
    ${({showMore}) => showMore ? 'display: block' : 'display: none'}
  
  }

  @media (max-width: 1440px) {
    max-width: 400px;
  }
  @media (max-width: 1024px) {
    max-width: 290px;
  }
  :before {
    background: #000;
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    bottom: 0;
    content: "";
    left: -100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    transition: all 0.3s;
    
  }
  

  :hover {
    ${HiddenBlock} {
      opacity: 1;
      visibility: visible;
      left: 0;
     // scale: 1;
    }
    
    :before {
      transition: all 0.3s;
      opacity: .8;
      visibility: visible;
      left: 0;
    }
    
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

`



