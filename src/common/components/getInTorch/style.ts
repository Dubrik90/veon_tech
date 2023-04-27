import styled from "styled-components";
import {fontSize} from "../../style/mixin";

type GetInTorchWrapperProps = {
    view: boolean
}
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

    svg {
        fill: var(--colors-text-wight);
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
