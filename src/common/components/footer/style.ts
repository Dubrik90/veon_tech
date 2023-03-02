import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #3D5F47;
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterTop = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
  border-bottom: 2px solid #D9D9D9;
  padding-bottom: 20px;
  min-height: 200px;

  img {
    padding: 70px 0;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 768px) {
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 10px;
  }
`
type ImgWrapProps = {
    img: string
}

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-end;
  flex-wrap: wrap;
  column-gap: 12px;
  @media (max-width: 456px) {
    column-gap: 5px;
  }

`
export const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 456px) {
    width: 54px;
    height: 54px;
  }

`
export const ImgWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: center;
  width: 41px;
  height: 41px;
`;

export const FooterBottom = styled.div`
  padding: 56px 0 54px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #D9D9D9;;
  color: #FFFFFF;
  column-gap: 15px;
  @media (max-width: 1227px) {
    display: flex;
    flex-direction: column;
    row-gap: 70px;
  }
 
`
export const About = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-self: flex-start;
`

export const BottomLogo = styled.div`

`