import styled from "styled-components";
import {flexColumn} from "../../style/mixin";

type GetInTorchWrapperProps = {
    view: boolean
}

export const IconsBlock = styled.div`
  ${flexColumn()};
  transform: rotate(90deg);
  opacity: 0;
  visibility: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
  border-radius: 15px;
  z-index: 5;
  position: absolute;
  top: -193px;
  left: -60px;
  background-color: var(--colors-bg);
  color: var(--colors-text-dark);
  font-size: 15px;
  font-weight: var(--fw-regular);
  overflow: hidden;

  div:not(:last-child) {
    border-bottom: 1px solid rgb(217, 217, 217);
  }


  div {
    min-height: 40px;
    display: flex;
    align-items: center;


    a, p {
      display: flex;
      align-items: center;
      column-gap: 10px;
      position: relative;
      padding: 7px 15px;
      cursor: pointer;
    }

    :hover {
      background-color: rgba(110, 236, 78, 0.15);

      a span {
        color: #000;
      }
    }

    a svg, img {
      width: 30px;
      height: 30px;
      cursor: pointer;

      path {
        fill: #233428;
      }

      rect {
        fill: #233428;
      }

      circle {
        fill: #233428;
      }
    }
  }


  :after {
    content: '';
    width: 25px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -13px;
    z-index: -1;
    opacity: 0;
  }
}
`

export const GetInTorchWrapper = styled.div<GetInTorchWrapperProps>`
  opacity: ${({view}) => view ? '0' : '1'};
  overflow: ${({view}) => view ? 'hidden' : 'visible'};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
  position: fixed;
  right: -115px;
  bottom: 115px;
  z-index: 40;
  font-weight: var(--fw-bold);
  transition: all 0.3s;
  height: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: var(--colors-bg-green);
  padding: 5px 14px 3px 14px;
  transform: rotate(-90deg);

  svg {
    transition: all 0.3s;
    fill: var(--colors-text-dark);
  }

  :hover {

    ${IconsBlock} {
      opacity: 1;
      visibility: visible;
      transform: rotate(90deg) translateX(0);
    }
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`
type ImgWrapProps = {
    img: string
}
export const AvatarWrap = styled.div<ImgWrapProps>`
  background-image: url(${props => props.img});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 33px;
  height: 33px;
  border-radius: 100%;
`

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: var(--fw-bold);
  padding: 10px 0;
`
export const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: var(--fw-regular);
  font-size: 16px;
  letter-spacing: -0.2px;
  line-height: 129.5%;
  color: var(--colors-text-dark);
  transition: all 0.3s;

  @media (max-width: 425px) {
    font-size: 15px;
  }
`


