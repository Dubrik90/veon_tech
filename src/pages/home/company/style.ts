import styled from "styled-components";

export const CompanyWrapper = styled.div`
  background-color: var(--colors-bg-green-dark);
  padding-top: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(10px + (50 - 10) * ((100vw - 768px) / (1920 - 768)));
  
  @media (max-width: 768px) {
   // padding: 25px 0;
  }
  .overlay {
    :before, :after {
      opacity: var(--opacity);
    }
  }

`
export const Title = styled.h3`
  text-align: center;
  font-weight: var(--fw-bold);
  font-size: calc(25px + (45 - 25) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  //margin-bottom:calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
  color: var(--colors-text-dark);
  border-bottom: 2px solid #6EEC4E;
  padding-bottom: 40px;
  margin: 0 0 25px;
  @media (max-width: 768px) {
    margin: 0 -15px;
  }
  
  //@media (max-width: 768px) {
  //  text-align: center;
  //  font-size: 28px;
  //  line-height: 31px;
  //  margin: -108px -15px 60px -15px;
  //  color: #FFFFFF;
  //  border-top: none;
  //  border-bottom: 2px solid #6EEC4E;
  //  padding-top: 0;
  //  padding-bottom: 21px;
  //}

`
export const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  //margin-bottom: 10px;
  @media (max-width: 768px) {
    padding: 30px 0 20px 0 ;
    
  }
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
export const Laer = styled.div`
  // background-color: var(--colors-bg-green-dark);
  height: 20px;
  position: relative;
  padding-top: 10px;
  @media (max-width: 768px) {
    display: none;
  }

  :before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background: #6EEC4E;
    z-index: 50;
  }
`
