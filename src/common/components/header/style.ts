import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  opacity: 0;
  transform: translateY(-100px);
  padding: 5px 0;
  margin-bottom: 50px;
  box-shadow: 0 10px 10px rgba(10, 91, 8, 0.31);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--colors-bg);
  z-index: 60;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

`

export const Tint = styled.div`
  background-color: rgba(0, 0, 0, .15);
  height: 100vh;
  opacity: 0;
  transition: visibility .2s linear, opacity .2s linear;
  visibility: hidden;
  z-index: 1;
  left: 0;
  position: fixed;
  right: 0;
  bottom: 0;
`

type ImgWrapProps = {
    img: string
}
export const ImgWrapDesctop = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 260px;
  height: 65px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  
  @media (max-width: 400px) {
    max-height: 60px;
  }
  
  a {
    transition: all 0.3s;
    position: relative;
    z-index: 10;
    max-width: 245px;
    
    @media (max-width: 1091px) {
      max-width: calc(190px + (245 - 190) * ((100vw - 320px) / (1920 - 320)));
    }

    img {
      width: 100%;
      height: 100%;
    }

  }

`

