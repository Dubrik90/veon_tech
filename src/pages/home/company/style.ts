import styled from "styled-components";

export const CompanyWrapper = styled.div`
  background-color: var(--colors-bg-green-dark);
  padding-top: calc(50px + (120 - 50) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(20px + (180 - 20) * ((100vw - 320px) / (1920 - 320)));
  
  .overlay {
    :before, :after {
      opacity: var(--opacity);
    }
  }

`
export const Title = styled.h3`
  text-transform: uppercase;
  text-indent: 15px;
  font-weight: var(--fw-bold);
  font-size: calc(30px + (76 - 30) * ((100vw - 320px) / (1920 - 320)));
  line-height: 1.4;
  color: var(--colors-text-dark);
  border-bottom: 2px solid #6EEC4E;
  padding-bottom: 40px;
  margin: 0 0 25px;
  
  @media (max-width: 768px) {
    padding-bottom: 25px;
    margin: 0 -15px 35px -15px;
  }
`
export const CompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 30px 0 20px 0 ;

  }
  .img_block {
    margin-right: 100px;
    @media (max-width: 768px) {
      margin-right: 70px;
    }
  }

  .img_block img {
    max-width: 285px;
    height: 70px;
    object-fit: contain;
    @media (max-width: 768px) {
      max-width: 200px;
      height: 70px;
    }
    
  }

  .img_block:nth-child(3) {
    img {
      height: 55px;
      @media (max-width: 768px) {
        height: 45px;
      }
      
    }
   
  }
`
type ImgWrapProps = {
    img: string
}

export const ImgWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: 50% 50%;
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
    top: 25px;
    left: 0;
    height: 2px;
    background: #6EEC4E;
    z-index: 50;
  }
`
