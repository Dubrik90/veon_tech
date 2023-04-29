import styled from "styled-components";

export const PartyIntelWishesWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  
  @media (max-width: 1920px) {
    padding-top: calc(30px + (80 - 30) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(40px + (100 - 40) * ((100vw - 320px) / (1920 - 320)));
  }
    
`
export const WishesContent = styled.div`

`
export const Title = styled.h4`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: var(--colors-text-dark);
  margin-bottom: 50px;

  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(20px + (50 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--colors-text-dark);
  margin-bottom: 70px;

  @media (max-width: 1920px) {
    font-size: calc(21px + (48 - 21) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(40px + (70 - 40) * ((100vw - 320px) / (1920 - 320)));

  }

`
export const Ul = styled.ul`

  li {
    font-weight: var(--fw-medium);
    font-size: 40px;
    line-height: 1.3;
    color: var(--colors-text-dark);

    @media (max-width: 1920px) {
      font-size: calc(21px + (48 - 21) * ((100vw - 320px) / (1920 - 320)));
    }
  }

`




