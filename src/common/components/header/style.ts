import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  padding: 5px 0;
  min-height: 70px;
  margin-bottom: 50px;
  box-shadow: 0 10px 10px rgba(10, 91, 8, 0.31);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--colors-bg);
  z-index: 50;
  
  .content-shadow {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: black;
    opacity: 0.8;
    display: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  @media (max-width: 400px) {
    min-height: 60px;
  }
`
type ImgWrapProps = {
    img: string
}
export const ImgWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 260px;
  height: 65px;
  @media (max-width: 400px) {
    max-width: 212px;
    height: 60px;
  }
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 70px;

  a {
    transition: all 0.3s;
    position: relative;
    z-index: 10;

    @media (max-width: 400px) {
      flex: 1 0 212px;
    }
  }

  @media (max-width: 1300px) {
    column-gap: 20px;
  }
  @media (max-width: 768px) {
    justify-content: stretch;
  }
`

type PropsImageType = {
    width?: string,
    height?: string,
    cursor?: string
    borderRadius?: string
    hover?: boolean
}

export const HeaderLogo = styled.div<PropsImageType>`
  // width: 315px;
  // height: 90px;
  // transition: all 0.3s;
  // overflow: hidden;
  // flex: 1 1 auto;
  // position: relative;
  // z-index: 10;
  //margin-left: -20px;

  @media (max-width: 768px) {
    width: 250px;
    height: 80px;
  }

  img {
    object-fit: contain;
    cursor: pointer;
    @media (max-width: 450px) {
      width: 250px;
    }
  }
`


export const DiamondWrapper = styled.div`
  padding-left: 25px;
  position: absolute;
  top: -3px;
  right: -28px;
`

