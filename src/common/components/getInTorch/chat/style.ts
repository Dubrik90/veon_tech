import styled from "styled-components";
import {flexColumn} from "../../../style/mixin";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


type ChatWrapperProps = {
    view: boolean
}
export const CloseIcon = styled(HighlightOffIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 28px;
  font-weight: var(--fw-regular);
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    color: var(--colors-bg);
  }
`
export const ChatWrapper = styled.div<ChatWrapperProps>`
  ${flexColumn()}
  bottom: ${({view}) => view ? '0' : '-100%'};
  transform: ${({view}) => view ? 'translate(0,0)' : 'translate( 0,100%)'};
  transition: all 0.3s;
  position: fixed;
  right: 40px;
  z-index: 100;
  width: 350px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 450px;
  background: var(--colors-bg-green);
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  @media (max-width: 425px) {
    right: 0;
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
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
  padding: 5px 14px 3px 14px;

  svg {
    width: 30px;
    fill: var(--colors-text-wight);
  }
  
  @media (max-width: 768px) {
    height: 45px;
  }
`
export const ChatContent = styled.div`
  ${flexColumn()}
  flex: 1 1 auto;
  background: var(--colors-text-wight);
  padding: 10px;
  overflow: auto;
`
export const SubTitle = styled.p`
  font-size: var(--fs-12);
  font-weight: var(--fw-regular);
`

export const InputBlock = styled.div`
  position: relative;
  background: var(--colors-text-wight);

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    z-index: 4;
    transition: all 0.3s;

    :hover {
      fill: var(--colors-bg-green);
    }
  }
`
export const Input = styled.textarea`
  background: var(--color-withe);
  border-top: 1px solid rgba(0, 0, 0, 0.17);
  font-size: var(--fs-14);
  padding: 10px 12px;
  width: 100%;
  position: relative;
  height: 60px;

  ::placeholder {
    font-family: 'Mulish';
    font-size: var(--fs-12);
    line-height: 129.5%;
    color: var(--color-grey);
  }
`

export const ChatFooter = styled.div`
  text-align: center;
  background: var(--colors-text-wight);
  color: var(--colors-text-wight);
  font-size: var(--fs-12);
  padding: 5px;
`

// export const Icon = styled.span`
//   cursor: pointer;
//   position: absolute;
//   right: 30px;
//   bottom: 23px;
//   background-color: #6eec4e;
//   border: 5px solid #6eec4e;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `

