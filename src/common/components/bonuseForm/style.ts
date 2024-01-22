import styled, {css} from "styled-components";
import {Field} from "formik";

export const ContainerForm = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: calc(50px + (100 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(50px + (100 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (70 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (70 - 15) * ((100vw - 320px) / (1920 - 320)));
`
export const ModalTitle = styled.div`
  font-size: calc(24px + (48 - 24) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  text-transform: uppercase;
`
export const DynamicContactHead = styled.div`
  padding-bottom: calc(10px + (45 - 10) * ((100vw - 320px) / (1920 - 320)));
  border-bottom: 1px solid #6EEC4E;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 30px
`
export const CloseModal = styled.div`
  display: block;
  cursor: pointer;
  width: 56px;
  height: 56px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  color: var(--colors-text-dark);

  div {
    position: absolute;
    width: 70%;
    height: 2px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: var(--colors-text-dark);
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  div:nth-child(1) {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg)
  }

  div:nth-child(2) {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg)
  }

  :hover div {
    width: 55%;
    opacity: .7
  }

  @media (max-width: 767px) {
    width: 45px;
    height: 45px
  }
`

export const BonuseFormWrapper = styled.div`
  width: 100%;
  background: var(--color-bg-green-light);
  z-index: 100;
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

  form {
  //  display: grid;
   // grid-template-columns: repeat(2, 1fr);
    display: flex;
    flex-direction: column;
    gap: 15px 30px;
    
    justify-content: center;
    padding-top: 30px;

    @media (max-width: 580px) {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding-top: 15px;
    } 
  }
`;

export const InputWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-around;
  //column-gap: 20px;

  @media (max-width: 767px) {
    gap: 5px;
    flex-direction: column;
    flex-wrap: wrap;
    
  }
`
export const LegalInputWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 30px;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-top: 15px;
  }
`


export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  flex: 0 1 30%;
`;

export const Label = styled.label<{ isActive?: boolean }>`
  position: absolute;
  top: ${({isActive}) => (isActive ? "-24px" : "15px")};
  left: ${({isActive}) => (isActive ? "15px" : "5px")};
    // transform: ${({isActive}) => (isActive ? "translateY(0)" : "translateY(-50%)")};
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  background: ${({isActive}) => (isActive ? "var(--colors-text-green)" : "none")};
  color: var(--colors-text-dark);
  padding: 5px 20px;
  font-weight: 500;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 10;
`;

export const Input = styled(Field)`
  background: var(--color-bg-green-light);
  border: 1px solid var(--colors-text-dark);
  line-height: 0;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding-top: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (30 - 15) * ((100vw - 320px) / (1920 - 320)));
  border-radius: 16px;
  color: var(--colors-text-dark);
  font-weight: 100;
  position: relative;
  transition: all 0.2s ease 0s;
  z-index: 1;
  caret-color: var(--colors-text-dark);

  &:focus {
    border-color: var(--colors-bg-green);
    outline: none;
  }

  ${({value}) =>
          value &&
          css`
            & + ${Label} {
              top: -24px;
              left: 20px;
              font-size: 14px;
              background: var(--colors-text-green);
            }
          `}
`;
export const SubmitButton = styled.button`
  flex: 1 1 50%;
  pointer-events: auto;
  cursor: pointer;
  border: 1px solid var(--colors-text-dark);
  padding-top: calc(8px + (16 - 8) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(8px + (16 - 8) * ((100vw - 320px) / (1920 - 320)));
  padding-right: calc(15px + (32 - 15) * ((100vw - 320px) / (1920 - 320)));
  padding-left: calc(15px + (32 - 15) * ((100vw - 320px) / (1920 - 320)));
  align-self: center;
  margin: 0;
  font-family: inherit;
  text-decoration: none;
  position: relative;
  display: inline-block;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 16px;
  border-radius: 500px;
  overflow: hidden;
  color: var(--colors-text-dark);
  text-align: center;
  z-index: 5;
  background: var(--colors-text-green);
  background: var(--colors-text-green);
  
  @media (max-width: 767px) {
    align-self: stretch;
  }
  
  @media (max-width: 580px) {
    align-self: stretch;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background: var(--colors-bg);
    width: 140%;
    left: -20%;
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1), -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1)
  }

  span {
    position: relative
  }

  :hover {
    border: 1px solid transparent;

    :before {
      -webkit-transform: translate3d(100%, 0, 0) skew(30deg);
      transform: translate3d(100%, 0, 0)
    }
  }

`;

export const StyledRadioContainer = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  column-gap: calc(10px + (20 - 10) *((100vw - 320px) / (1920 - 320)));
  align-items: center;
  justify-content: center;
  margin-bottom: calc(15px + (30 - 15) *((100vw - 320px) / (1920 - 320)));
`;

export const StyledRadioLabel = styled.label<CheckboxLabelProps>`
  padding-top: calc(10px + (14 - 10) *((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(10px + (14 - 10) *((100vw - 320px) / (1920 - 320)));
  padding-right: calc(13px + (32 - 13) *((100vw - 320px) / (1920 - 320)));
  padding-left: calc(13px + (32 - 13) *((100vw - 320px) / (1920 - 320)));
  font-size: calc(12px + (16 - 12) *((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-bold);
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  color: var(--colors-text-dark);
  transition: all 0.2s ease 0s;
  position: relative;
  border: 1px solid var(--colors-text-light);
  border-radius: 500px;

  :before {
    content: "";
    width: 0;
    height: 100%;

    background: var(--colors-bg-green);
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    z-index: -1
  }

  :hover:before {
    width: 100%
  }

  ${({checked}) =>
    checked && `
     background: var(--colors-bg-green);
     border: 1px solid transparent !important;
  `
}
`;
export const Radio = styled(Field)`
  display: none;
  position: relative;
`
export const CheckboxContainer = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  
// gap: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
 // align-items: center;
 // margin-bottom: 15px;
  
  
  

  .choise-btn {
    //padding: 14px 32px;
    padding-top: calc(6px + (14 - 6) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(6px + (14 - 6) * ((100vw - 320px) / (1920 - 320)));
    padding-right: calc(10px + (32 - 10) * ((100vw - 320px) / (1920 - 320)));
    padding-left: calc(10px + (32 - 10) * ((100vw - 320px) / (1920 - 320)));
    font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
    font-weight: var(--fw-medium);
    background: transparent;
    overflow: hidden;
    cursor: pointer;
    color: var(--colors-text-dark);
    transition: all 0.2s ease 0s;
    position: relative;
    border: 1px solid var(--colors-text-light);
    border-radius: 500px;
  }
  .choise-btn--active {
    color: var(--colors-text-dark);
    border: 1px solid transparent;
    background: var(--colors-bg-green);
  }
`;

export const CheckboxContainerBonuses = styled.div`
  grid-column: 1 / span 2;
  p {
    color: var(--colors-text-dark);
    padding: 10px 15px;
    font-weight: var(--fw-regular);
    font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }
`
export const CheckboxContainerGlobalForm = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  gap: 10px;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    
  }
`

export const TitleBonuse = styled.div`
  grid-column: 1 / span 2;
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  text-align: left;
  font-weight: var(--fw-bold);
  margin-bottom: 5px;
`

type CheckboxLabelProps = {
    checked: boolean
}
export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: inline-flex;
  align-items: center;
  margin-right: 12px;
 // margin-bottom: 8px;
  cursor: pointer;
  font-size: 16px;
  color: var(--colors-text-dark);
  font-weight: var(--fw-bold);
`;

export const CheckboxLabelGlobalForm = styled.label<CheckboxLabelProps>`
  display: flex;
  padding: calc(6px + 8 * ((100vw - 320px) / 1600)) calc(10px + 22 * ((100vw - 320px) / 1600));
  font-size: calc(12px + 4 * ((100vw - 320px) / 1600));
  font-weight: var(--fw-medium);
  background: transparent;
  overflow: hidden;
  cursor: pointer;
  color: var(--colors-text-dark);
  transition: all 0.2s ease 0s;
  position: relative;
  border: 1px solid var(--colors-text-light);
  border-radius: 500px;

  ${({checked}) =>
          checked &&
          `
    &:before {
        width: 100% 
    }
         background: var(--colors-bg-green);
         border: 1px solid transparent !important;
  `}
`

export const Checkbox = styled(Field)`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid var(--colors-text-dark);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  margin-right: 10px;
  

  &:checked:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "\\2714";
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 13px;
    color: var(--colors-text-dark);
    
  }
  &:checked {
    background: var(--colors-bg-green);
    border: 1px solid transparent !important;
  }

  &:hover {
   // background-color: #EFEFEF;
  }
`;

export const CheckboxGlobalForm = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin-right: 10px; 
`;

export const InputFileContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;


export const FormDataItemUpload = styled.div`
  width: 100%;
  //-ms-grid-column: 2;
  //grid-column: 2;
  padding: 10px 0;

  @media (max-width: 768px) {
    grid-column: 1 / span 2;
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

  @media (max-width: 768px) {
    padding: 15px 15px;
  }

  svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    fill: rgba(255, 255, 255, .4)
  }

`
export const UploadItemIcCont = styled.div`
  svg {
    width: calc(30px + (57 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const UploadItemResult = styled.div`
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  font-weight: 500;
  margin-top: 10px;
  max-width: 350px;
  word-break: break-all;
`
export const UploadItemLabel = styled.label`
  color: var(--colors-text-dark);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
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
  transition: all 0.2s;

  :hover {
    svg {
      fill: rgba(241, 9, 9, 0.5)
    }
  }
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
  align-items: center;

  svg {
    margin: auto;
    width: 40px;
    fill: rgba(255, 91, 91, .5);
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }
`
export const FormDataItemComment = styled.div`
 // grid-column: 1 / auto;
  width: 100%;

  @media (max-width: 768px) {
 //   grid-column: 1 / span 2;
  }

`
export const TextareaWrapper = styled.div`
  padding: 10px 0;
  position: relative;
`
export const TextareaItem = styled.textarea`
  min-height: calc(185px + (215 - 185) * ((100vw - 768px) / (1920 - 768)));
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
    -webkit-transform: translate(20px, -31px);
    transform: translate(20px, -31px);
    background: var(--colors-text-green);
    color: var(--colors-text-dark);
    padding: 5px 20px;
    font-weight: 500;
    z-index: -1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
  }

  @media (max-width: 767px) {
    padding: 7px 25px;
    min-height: 100px;
  }
`

export const TextareaLabel = styled.label`
  transform-origin: left center;
  color: var(--colors-text-dark);
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1920 - 320)));
  box-sizing: border-box;
  padding: 30px;
  display: block;
  position: absolute;
  border-radius: 16px;
  top: 17px;
  z-index: 2;
  pointer-events: none;
  transition: all 0.2s ease 0s;
`
export const PrivacyPolicy = styled.div`
  flex: 1 1 50%;
`

export const TextPolicy = styled.p`
  font-weight: var(--fw-medium);
  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.2;
  letter-spacing: 0.1px;
  color: var(--colors-text-dark);
  text-align: left;

  a {
    color: var(--color-link);

    :hover {
      color: var(--color-dark);
    }
  }
`




