import styled from 'styled-components';


export const ContactsWrapper = styled.div`
  position: relative;
  padding: 120px 0;

  @media (max-width: 768px) {
    padding: 0;
  }

`
export const ContactsBlock = styled.div`
  position: relative;
  z-index: 50;
  max-width: 650px;
  margin: 0 auto;
  background: var(--colors-bg);
  overflow: hidden;
  border-radius: 43px;
  @media (max-width: 768px) {
    padding: 0 15px;
    border-radius: 0 ;
    max-width: 100%;
  }

`
export const ContactsForm = styled.form`
  position: relative;
  z-index: 50;
  padding: 32px 20px 26px 20px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin-bottom: 20px
  }
  @media (max-width: 768px) {
    padding: 23px 15px;
  }
  @media (max-width: 425px) {
    padding: 18px 10px;
  }

`
export const Input = styled.input`
  border: 1px solid var(--colors-text-light);
  border-radius: 7px;
  background: var(--colors-bg);
  padding: 10px;
  color: var(--colors-text-light);
  max-width: 196px;

  ::placeholder {
    color: var(--colors-text-light);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`


export const InputName = styled(Input)`

`
export const InputEmail = styled(Input)`
  @media (max-width: 425px) {
    display: none;
  }
`
export const Placeholder = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 163%;
  color: #747474;
  align-items: center;
  column-gap: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`

export const InputPhone = styled(Input)`
  border: none;
  position: absolute;
  width: 100%;
  height: 65px;
  top: 50%;
  transform: translateY(-50%);

  &:focus ~ ${Placeholder} {
    display: none;
  }

`


export const Textarea = styled.textarea`
  font-family: 'Mulish';
  border: 1px solid var(--colors-text-light);
  background: var(--colors-bg);
  border-radius: 7px;
  width: 100%;
  height: 144px;
  padding: 15px 15px;
  ::placeholder {
    color: var(--colors-text-light);
  }

  color: var(--colors-text-light);
  font-size: 14px;
  @media (max-width: 888px) {
    height: 95px;
  }
`
export const SubText = styled.p`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 163%;
    color: var(--colors-text-light);
    margin-top: -15px;

    a {
      //font-weight: 400;
      font-size: 13px;
      line-height: 163%;
      color: #18698B;
      text-decoration: underline;
    }
  }
`

export const ButtonForm = styled.button`
  background: #5DB447;
  border-radius: 70px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #E9FCE5;
  text-transform: uppercase;
  padding: 12px 20px;
  align-self: stretch;
  width: 100%;
  transition: all 0.3s;
  :hover {
    background: #3D5F47;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    padding: 10px 15px;
  }
  @media (max-width: 425px) {
    //width: auto;
    //align-self: flex-start;
  }
`

export const Title = styled.p`
  position: relative;
  z-index: 50;
  font-weight: var(--fw-extra-bold);
  font-size: 28px;
  line-height: 43px;
  color: #FFFFFF;
  background: #5DB447;

  padding: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 -15px;
  }
  @media (max-width: 636px) {
    font-size: 21px;
    line-height: 27px;
  }

`
export const SubTitle = styled.p`
  display: none;
  @media (max-width: 768px) {
    position: relative;
    z-index: 50;
    display: block;
    text-align: center;
    font-weight: 800;
    font-size: 28px;
    line-height: 163%;
    padding: 10px 0;
    color: var(--colors-text-light);
    span {
      color: #5DB447;
    }

    @media (max-width: 768px) {
      font-size: 17px;
    }

  }
`
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ImgBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Label = styled.label`
  display: inline-block;
  width: 100%;
  height: 71px;
  border: 1px solid var(--colors-text-light);
  border-radius: 7px;
  background: var(--colors-bg);
  padding: 20px 0 15px 15px;
  color: var(--colors-text-light);
  position: relative;
  overflow: hidden;


`


export const Region = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 163%;
  color: var(--colors-text-dark);
`
