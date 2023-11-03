import styled from "styled-components";
import {flexColumn} from "../../style/mixin";
import {TitleH4} from "../../style/global";

type ModalWindowWrapperProps = {
    openModal?: boolean
}

export const ModalWindowWrapper = styled.div<ModalWindowWrapperProps>`
  
  ${flexColumn()}
  position: fixed;
 // top: 0;
 // left: 0;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
 // overflow-y: hidden;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(5px);
  z-index: 100;
  transition: all 0.3s;
  opacity: ${({openModal}) => openModal ? '1' : '0'};
  visibility: ${({openModal}) => openModal ? 'visible' : 'hidden'};
  scale: ${({openModal}) => openModal ? '1' : '0'};
  
  //opacity: 1;
  //visibility: visible;
`
export const RegisterWrapper = styled.div`
  width: 420px;
  padding: 32px 40px;
  border-radius: 5px;
  background-color: var(--colors-bg);
  position: relative;
  transition: scale 0.3s;

  @media (max-width: 425px) {
    width: 100%;
  }

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    rect{
      fill: var(--colors-text-dark);
    }
  }

`
export const Title = styled(TitleH4)`
  font-size: var(--fs-16);
  text-align: center;
  margin-bottom: 23px;
  color: var(--colors-text-dark);
`

export const FormWrapper = styled.form`

`
export const InputBlock = styled.div`
  ${flexColumn()};
  row-gap: 20px;

  .react-tel-input .form-control {
    width: 100%;
    background-color: var(--colors-bg);
    color: var(--colors-text-dark);
  }
  .selected-flag {
    background-color: var(--colors-bg);
    .arrow {
      border-top: 4px solid var(--colors-text-dark);
    }
  }
`

export const Placeholder = styled.span`
  position: absolute;
  padding: 12px;
  height: 38px;
  display: inline-block;
  transform: translateY(0px);
  pointer-events: none;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
  font-size: 14px;
  line-height: 129.5%;
  color: #9B9B9B;
`
export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: var(--colors-text-dark);
  //margin-bottom: 16px;

  .form-control {
    width: 100% !important;
  }
`
export const CustomInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px;
  border: 1px solid #A6A6A6;
  border-radius: 5px;
  font-size: 14px;
  background-color: var(--colors-bg);
  color: var(--colors-text-dark);
 
  ::placeholder {
    color: var(--colors-text-dark);
  }

  &:focus {
    color: var(--colors-text-dark);
    outline: none;
  }

  &:focus ~ ${Placeholder} {
    transform: translateY(-14px);
    font-size: 12px;
    line-height: 16px;
    color: var(--black40);
  }
`
export const Errors = styled.div`
  position: absolute;
  color: red;
  bottom: -14px;
  z-index: 1;
  font-size: 14px;
`
export const SubText = styled.p`
  font-weight: var(--fw-medium);
  font-size: 9px;
  line-height: 1.4;
  letter-spacing: 0.1px;
  color: var(--colors-text-dark);
  text-align: left;
  margin-bottom: 18px;
  
  a {
    color: var(--color-link);
    :hover {
      color: var(--color-dark);
    }
  }
`

export const Button = styled.button`
  background-color: var(--colors-bg-green);
  border-radius: 30px;
  font-weight: var(--fw-bold);
  font-size: var(--fs-18);
  line-height: 129.5%;
  color: var(--colors-text-wight);
  padding: 13px 15px;
  width: 100%;
  transition: all 0.3s;
  
  :hover {
    background-color: var(--color-dg-footer);
  }
`
