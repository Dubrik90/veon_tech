import styled from "styled-components";

type ImageProps = {
    src: string;
};

export const WishesWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src}) no-repeat center center/cover;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 1920px) {
    padding-top: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(40px + (50 - 40) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ContentBlock = styled.div`
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    row-gap: 50px;
    align-items: center;

    font-weight: var(--fw-medium);
    font-size: 40px;
    line-height: 1.3;
    color: var(--colors-text-dark);

    @media (max-width: 1920px) {
      font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
      row-gap: calc(30px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 6;
    max-width: 760px;
    justify-self: flex-end;
  }

  .div2 {
    grid-area: 2 / 1 / 3 / 6;
    max-width: 760px;
    justify-self: flex-start;
  }
`

