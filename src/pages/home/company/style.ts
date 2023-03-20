import styled from "styled-components";

export const CompanyWrapper = styled.div`
 // background: var(--colors-text-light);
  padding: 70px 0 30px 0;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
  .overlay {
    :before, :after {
      opacity: var(--opacity);
    }
  }

`
export const Title = styled.h3`
  font-weight: var(--fw-bold);
  line-height: 21px;
  color: var(--colors-text-dark);
  border-bottom: 2px solid #6EEC4E;
  padding-bottom: 40px;
  font-size: 36px;
  margin: 0 0 25px;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: center;
    font-size: 28px;
    line-height: 31px;
    margin: -108px -15px 60px -15px;
    color: #FFFFFF;
    border-top: none;
    border-bottom: 2px solid #6EEC4E;
    padding-top: 0;
    padding-bottom: 21px;
  }

`
export const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`
type ImgWrapProps = {
    img: string
}

export const ImgWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 100px;
  width: 300px;
  max-width: 300px;
  height: 70px;
  margin: 0 50px;
  @media (max-width: 768px) {
    height: 60px;
    margin: 0 25px;
  }
  
  
 `

