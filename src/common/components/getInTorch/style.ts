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
  right: -95px;
  bottom: 100px;
  z-index: 40;
  font-weight: var(--fw-bold);
  transition: all 0.3s;
  height: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background: var(--colors-bg-green);
  padding: 5px 14px 3px 14px;
  transform: rotate(-90deg);
  
  svg {
    fill: var(--colors-text-wight);
  }
  :hover {
    background: var(--color-dg-footer);
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

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  font-family: 'Mulish';
  font-weight: var(--fw-bold);
  padding: 10px 0;
`
export const Title = styled.p`
  font-weight: var(--fw-medium);
  font-size: var(--fs-16);
  line-height: 129.5%;
  color: var(--colors-text-wight);
  
  @media (max-width: 425px) {
    font-size: 14px;
  }
`
