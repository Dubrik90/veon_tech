import styled from 'styled-components';
export const ContactsWrapper = styled.div`
    position: relative;
    padding: 386px 0;
  
  @media (max-width: 888px) {
    padding: 0;
  }
  
`
export const ContactsBlock = styled.div`
  position: relative;
  z-index: 50;
  max-width: 910px;
  margin: 0 auto;
  background: var(--colors-bg);
  overflow: hidden;
  border-radius: 43px ;
  @media (max-width: 888px) {
    padding: 0 15px;
    
    border-radius: 0 ;
  }

`
export const ContactsForm = styled.form`
  position: relative;
  z-index: 50;
  padding: 32px 49px 26px 49px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 28px;
  justify-content: space-between;
  
  @media (max-width: 888px) {
    flex-direction: column;
    row-gap: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
  @media (max-width: 888px) {
    padding: 23px 10px;
  }
  
`
export const Input = styled.input`
  border: 1px solid var(--colors-text-light);
  border-radius: 7px;
  background: var(--colors-bg);
  padding: 20px 0 15px 15px;
  color: var(--colors-text-light);
  max-width:242px;
  ::placeholder {
    color: var(--colors-text-light);
  }
  @media (max-width: 888px) {
    max-width: 100%;
    padding: 23px 15px;
  }
 
`
export const Textarea = styled.textarea`
  border: 1px solid var(--colors-text-light);
  background: var(--colors-bg);
  border-radius: 7px;
  width: 100%;
  height: 174px;
  padding: 15px 15px;
  ::placeholder {
    color: var(--colors-text-light);
  }
  color: var(--colors-text-light);
  font-size: 20px;
  @media (max-width: 888px) {
    height: 100px;
  }
`
export const SubText = styled.p`
  display: none;
  @media (max-width: 888px) {
    display: block;
    font-weight: 400;
    font-size: 13px;
    line-height: 163%;
    color: var(--colors-text-light);
    margin-top: -15px;
    
    a {
      font-weight: 400;
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
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: #E9FCE5;
  text-transform: uppercase;
  padding: 15px 20px;
  align-self: stretch;
  width: 100%;
  @media (max-width: 888px) {
    font-size: 20px;
    line-height: 25px;
    padding: 20px 20px;
  }
`

export const Title = styled.p`
  position: relative;
  z-index: 50;
  font-weight: var(--fw-extra-bold);
  font-size: 34px;
  line-height: 43px;
  color: #FFFFFF;
  background: #5DB447;
 
  padding: 20px ;
  text-align: center;
  @media (max-width: 888px) {
    margin: 0 -15px;
  }
  @media (max-width: 636px) {
    font-size: 21px;
    line-height: 27px;
  }

`
export const SubTitle = styled.p`
  display: none;
  @media (max-width: 888px) {
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
    @media (max-width: 888px) {
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
  @media (max-width: 888px) {
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
