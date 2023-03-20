import styled from "styled-components";
import {fontSize} from "../../../style/mixin";

type ChatWrapperProps = {
    view: boolean
}
export const ChatWrapper = styled.div<ChatWrapperProps>`
 // overflow: ${({view}) => view && 'hidden'};
  bottom: ${({view}) => view ? '0' : '-100%'};
  transform: ${({view}) => view ? 'translate(0,0)' : 'translate( 0,100%)'};
 // z-index: ${({view}) => view ? '123456789' : '2345678902'};
  transition: all 0.3s;
  position: fixed;
  right: 40px;
  z-index: 100;
  width: 300px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 400px;
  background: var(--colors-bg-green);
  display: flex;
  flex-direction: column;
 // padding: 5px;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  //border-radius: 17px;
  
  @media (max-width: 425px) {
    right: 0;
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
 
`
export const Close = styled.span`
 position: absolute;
  right: 22px;
  top: 3px;
  color: var(--color-dark);
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s;
  
  &:hover {
    color: #5db447;
  }
`
export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
  font-weight: var(--fw-bold);
  transition: all 0.3s;
  height: 80px;
  
  svg {
    width: 30px;
    fill: var(--colors-text-wight);
  }
  
 
  padding: 5px 14px 3px 14px;
  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 425px) {
    //opacity: 0;
    //visibility: hidden;
  }
`
export const ChatContent = styled.div`
  flex: 1 1 auto;
  background: var(--colors-text-wight);
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`



export const InputBlock = styled.div`
  position: relative;
  background: var(--colors-text-wight);
 // padding: 10px;
  
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 25px;
    height: 25px;
   // background: var(--colors-bg-green);
    border-radius: 100%;
    z-index: 4;
    transition: all 0.3s;
    :hover {
      fill: var(--colors-bg-green);
    }
  }
 
`
export const ButtonInputMassage = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 20px;
  height: 20px;
  background: var(--colors-bg-green);
  border-radius: 100%;
  z-index: 4;
  transition: all 0.3s;
  
  :before {
    content: '';
    position: absolute;
    font-size: 14px;
    top: 48%;
    transform: translateY(-50%);
    right: 5px;
    color: black;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s;
  }
  :hover {
    background: #3D5F47;
    &:before {
      color: #dbe8d3;
    }
  }
`

export const Input = styled.textarea`
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.17);
 // box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
 // border-radius: 20px;
  font-size: 14px;
  padding: 10px 12px ;
  width: 100%;
  position: relative;
  height: 60px;


  ::placeholder {
    font-family: 'Mulish';
    font-size: 12px;
    line-height: 129.5%;
    color: #888585;
  }

`

export const ChatFooter = styled.div`
  text-align: center;
  background: var(--colors-text-wight);
  color: var(--colors-text-wight);
  ${fontSize(12)};
  padding: 5px;
`

export const ContentFooter = styled.div`
  //min-width: 300px;
  //max-width: 400px;
  //width: 100%;
  min-height: 376px;
  //height:auto ;
  max-width: 400px;
  overflow: auto;
`
export const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 30px;
  bottom: 23px;
  background-color: #6eec4e;
  border: 5px solid #6eec4e;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
`

