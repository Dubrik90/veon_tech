import styled from "styled-components";

type ModalWindowWrapperProps = {
    openModal: boolean
}

export const ModalWindowWrapper = styled.div<ModalWindowWrapperProps>`
  position: absolute;
  top: ${({openModal}) => openModal ? '0' : '-100%'};
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(5px);
  z-index: 100;
  transition: all 0.3s;
  opacity: ${({openModal}) => openModal ? '1' : '0'};
  scale: ${({openModal}) => openModal ? '1' : '0'};
  visibility: ${({openModal}) => openModal ? 'visible' : 'hidden'};
`
export const RegisterWrapper = styled.div`
  width: 420px;
  padding: 32px 40px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;
  transition: scale 0.3s;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

`
export const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 129.5%;
  color: #000000;
  margin-bottom: 23px;
`

export const FormWrapper = styled.form`

`
export const InputBlock = styled.div`
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
  margin-bottom: 16px;

`
export const CustomInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 10px;
  color: #363636;
  background-color: #F9F9FA;;
  border: 1px solid #A6A6A6;
  border-radius: 5px;
  font-size: 14px;
  
  ::placeholder {
    
  }

  &:focus {
    color: var(--dark);
    border-bottom: 1px solid #252626;
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
  z-index: 90000;
  font-size: 14px;
`
export const SubText = styled.button`
  font-weight: 600;
  font-size: 9px;
  line-height: 129.5%;
  color: #000000;
  text-align: left;
  margin-bottom: 18px;
`

export const Button = styled.button`
  background: #6EEC4E;
  border-radius: 30px;
  font-weight: 600;
  font-size: 17px;
  line-height: 129.5%;
  color: #FFFFFF;
  padding: 13px 15px;
  width: 100%;
 
  
`