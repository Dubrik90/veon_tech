import styled, {css} from "styled-components";
import {Field} from "formik";


export const BonuseFormWrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 30px;
    grid-auto-flow: dense;
  }
  
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 15px;
  width: 100%;
  background: var(--color-bg-green-light);
  z-index: 55;
  position: fixed;
  top: 0;
  right: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  height: 100vh;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
  overflow-y: auto;

`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;


export const Label = styled.label<{ isActive?: boolean }>`
  position: absolute;
  top: ${({isActive}) => (isActive ? "-10px" : "10px")};
  left: 10px;
  font-size: ${({isActive}) => (isActive ? "14px" : "16px")};
  color: ${({isActive}) => (isActive ? "#0077cc" : "#333")};
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }

  ${({value}) =>
          value &&
          css`
            & + ${Label} {
              top: -10px;
              left: 10px;
              font-size: 14px;
              color: #0077cc;
            }
          `}
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;
export const CheckboxContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

type CheckboxLabelProps = {
    checked: boolean
}
export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: block;
  position: relative;
  padding: 8px 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 25px;
    z-index: -1;
  }

  ${({checked}) =>
          checked &&
          `
    &:before {
      background-color: #3cb371;
      border-color: #3cb371;
    }
  `}
`;


export const Checkbox = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const InputFileContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

`;


export const FormDataItemUpload = styled.div`
  -ms-grid-column: 2;
  grid-column: 2;
  padding: 10px 0;

  @media (max-width: 767px) {
    -ms-grid-column: 1;
    grid-column: 1
  }
`;

export const UploadWrapper = styled.div`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 20px
`
export const UploadItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 50px 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  border-radius: 16px;
  border: 1px dashed var(--colors-text-dark);
  overflow: hidden;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  @media (max-width: 767px) {
    padding: 50px 15px
  }

  svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    fill: rgba(255, 255, 255, .4)
  }

`
export const UploadItemIcCont = styled.div`
  svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    // fill: rgba(255, 255, 255, .4);
    fill: var(--colors-text-dark);
  }
`
export const UploadItemResult = styled.div`
  font-size: 18px;
  color: var(--colors-text-dark);
  font-weight: 500;
  margin-top: 10px;
  max-width: 220px;
  word-break: break-all;
`
export const UploadItemLabel = styled.label`

`
export const InputUploadItem = styled.input`
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`
export const UploadCancel = styled.div`
  display: none;
  cursor: pointer;
  height: 100%;
  padding: 50px 30px;
  border-radius: 16px;
  border: 1px dashed rgba(255, 91, 91, .5);
  overflow: hidden;
  -webkit-transition: all 0.2s;
  transition: all 0.2s
`

export const UploadCancelInner = styled.div`
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
`
export const FormDataItemComment = styled.div`
  grid-column: 1 / auto;

  @media (max-width: 767px) {
    -ms-grid-column: 1;
    grid-column: 1
  }

`
export const TextareaWrapper = styled.div`
  //  padding: 10px 0;
  //  position: relative;

  -webkit-transform-origin: left center;
  transform-origin: left center;
  color: var(--colors-text-dark);
  font-size: 20px;
  font-weight: 400;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 30px 30px;
  display: block;
  position: absolute;
  border-radius: 16px;
  top: 10px;
  z-index: 2;
  pointer-events: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;

  @media (max-width: 767px) {
    font-size: 14px
  }

`
export const TextareaItem = styled.textarea`
  min-height: 235px;
  resize: none;
  outline: none;
  background: var(--color-bg-green-light);
  border: 1px solid var(--colors-text-dark);
  font-family: Montserrat, sans-serif;
  font-size: 17px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 16px;
  color: var(--colors-text-dark);
  font-weight: 100;
  position: relative;
  transition: all 0.2s ease 0s;
  z-index: 1;

  :focus {
    outline: none;
    color: var(--colors-text-dark);
    border: 1px solid var(--colors-text-dark)
  }

  :valid {
    opacity: 1
  }

  :focus ~ label {
    -webkit-transform: translate(20px, -45px);
    transform: translate(20px, -45px);
    background: var(--colors-text-green);
    color: var(--colors-text-dark);
    padding: 10px 30px;
    font-weight: 500;
    z-index: -1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
  }

  @media (max-width: 767px) {
    padding: 7px 25px;
    -webkit-transform: translate(20px, -29px);
    transform: translate(20px, -29px)
  }
`

export const TextareaLabel = styled.label`
  transform-origin: left center;
  color: var(--colors-text-dark);
  font-size: 20px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 30px;
  display: block;
  position: absolute;
  border-radius: 16px;
  top: 10px;
  z-index: 2;
  pointer-events: none;
  transition: all 0.2s ease 0s;
`






