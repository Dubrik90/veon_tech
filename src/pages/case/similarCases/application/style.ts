import styled from "styled-components";

export const ApplicationWrapper = styled.div`
  max-width: 329px;
  background-color: var(--colors-text-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  border-radius: 17px;
  padding: 10px;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--color-dg-footer);
  }

  @media (max-width: 1240px) {
    max-width: 280px;
  }

  @media (max-width: 940px) {
    row-gap: 15px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    max-width: 329px;
    height: 310px;
  }
  @media (max-width: 425px) {
    height: 230px;
  }


`
export const Text = styled.p`
  font-weight: var(--fw-bold);
  font-size: 32px;
  line-height: 129.5%;
  text-align: center;
  color: var(--colors-text-wight);
  @media (max-width: 1245px) {
    font-size: 25px;
  }
  @media (max-width: 940px) {
    font-size: 18px;
  }
`


