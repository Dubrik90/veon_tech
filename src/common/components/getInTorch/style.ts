import styled from "styled-components";
import {flexColumn, fontSize} from "../../style/mixin";

type GetInTorchWrapperProps = {
    view: boolean
}

export const IconsBlock = styled.div`
  ${flexColumn()};
  align-items: center;
  justify-content: center;
  padding: 15px;
  transform: rotate(90deg) translateX(100%);
  row-gap: 20px;
  opacity: 0;
  visibility: hidden;
  z-index: 5;
  position: absolute;
  top: -130px;
  left: 25px; 
  transition: all 0.3s;

  a svg {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s;

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
  a:nth-child(1) {
    :hover {
      circle:nth-child(1) {
        fill: #0e76a8;
      }
    }
  }

  a:nth-child(2) {
    :hover {
      circle {
        fill: #229ED9;
      }
    }
  }
}

:after {
  content: '';
  width: 25px;
  height: 100%;
  position: absolute;
  top: -10px;
  right: 0;
  z-index: -1;
  opacity: 0;
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
    transition: all 0.3s;
    background: var(--color-dg-footer);

    div {
      p {
        color: var(--colors-text-wight);
      }
    }

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


