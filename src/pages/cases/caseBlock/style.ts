import styled from "styled-components";

export const CaseBlockWrapper = styled.div`

`
export const CaseContent = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-around;
  flex-wrap: wrap;
  
  @media (max-width: 1440px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  
`

export const HiddenBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--colors-text-green);
  opacity: 0;
  visibility: hidden;
  border-radius: 17px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  scale: 0;
  backdrop-filter: blur(5px);

  a {
    display: inline-flex;
    padding: 10px 15px;
    font-size: 18px;
    line-height: 1.1;
    font-weight: var(--fw-bold);
    background-color: var(--color-grey);
    color: var(--color-grey-light);
    transition: all 0.3s;

    :hover {
      background-color: var(--color-grey-light);
      color: var(--color-grey);
    }
  }
`
export const Title = styled.h5`
  font-size: 30px;
  line-height: 1.1;
  font-weight: var(--fw-medium);
  color: var(--color-grey-light);
  z-index: 50;

`
export const Text = styled.p`
  font-size: 20px;
  line-height: 1.1;
  color: var(--color-grey-light);
`


export const ImgBlock = styled.div`
  
`
export const Content = styled.div`
  position: relative;
  border-radius: 17px;
  max-width: 512px;

  @media (max-width: 1440px) {
    max-width: 400px;
  }
  @media (max-width: 1024px) {
    max-width: 290px;
  }

  :hover {
    ${HiddenBlock} {
      opacity: 1;
      visibility: visible;
      scale: 1;
    }
  }
`

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

`



