import styled from "styled-components";

export const OpticsDeskWrapper = styled.div`

`

export const OpticsDeskContent = styled.div`
  display: flex;
  column-gap: 70px;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;

  p:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;

  }

  p:nth-child(2) {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: center;
  }

  p:nth-child(3) {
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
  }

  @media (max-width: 1920px) {
    column-gap: calc(20px + (70 - 20) * ((100vw - 1024px) / (1920 - 1024)));
    padding-top: calc(50px + (100 - 50) * ((100vw - 1024px) / (1920 - 1024)));
 //   padding-bottom: calc(40px + (50 - 40) * ((100vw - 1024px) / (1920 - 1024)));

  }

  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 350px 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    align-items: center;
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }


`
export const Block = styled.div`
  max-width: 590px;
  p:nth-child(1) {
    margin-bottom: 30px;
  }
  
`

export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);
  max-width: 590px;
  // padding-top: 104px;
  // padding-bottom: 172px;


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }
  @media (max-width: 1023px) {
    max-width: 100%;
  }
`
export const ImageBlock = styled.div`
  align-self: flex-end;
  @media (max-width: 650px) {
    align-self: center;
  }

`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const Ul = styled.ul`
  padding-bottom: 80px;
  li {
    font-weight: var(--fw-medium);
    font-size: 40px;
    line-height: 1.3;
    color: var(--colors-text-dark);

    @media (max-width: 1920px) {
      font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
    }
  }
`






