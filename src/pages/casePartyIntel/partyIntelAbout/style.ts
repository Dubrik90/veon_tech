import styled from "styled-components";

export const PartyIntelAbutWrapper = styled.div`
  padding: 56px 0 120px 0;
  
  @media (max-width: 1920px) {
    padding-top: calc(30px + (56 - 30) * ((100vw - 320px) / (1920 - 320)));
    padding-bottom: calc(30px + (120 - 30) * ((100vw - 320px) / (1920 - 320)));
  }

`
export const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 25px;
  justify-content: space-between;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
  }
  
  
`
export const TextBlock = styled.div`
  
  :not(:last-child) {
    @media (max-width: 1024px) {
      padding-bottom: 15px;
      border-bottom: 1px solid rgb(217, 217, 217);
    }
  }
 
`
export const Title = styled.h3`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: var(--colors-text-dark);
  margin-bottom: 40px;

  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const Text = styled.div`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--colors-text-dark);

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }

`