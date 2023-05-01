import styled from 'styled-components';

export const HeaderMainWrapper = styled.div`
  will-change: transform;
  opacity: 0;
  clip-path: polygon(0 100%, 100% 100%, 80% 100%, 0 0);
  padding: 335px 0 250px 0;
  @media (max-width: 1024px) {
    padding: 160px 0 200px 0;
  }
`
export const HeaderMainContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: 'sub tit1 tit1''tit2 tit2 button';
  grid-template-columns: 300px 1fr 250px;

  @media (max-width: 1050px) {
    grid-template-areas: 'sub sub sub''tit1 tit1 tit1''tit2 tit2 tit2' 'button button button';
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0;
  }
`
export const Title = styled.h1`
  grid-area: tit1;
  font-family: Coolvetica, sans-serif;
  font-size: 190px;
  line-height: 1.1;
  justify-self: flex-end;
  color: var(--colors-text-dark);

  @media (max-width: 1965px) {
    font-size: 180px;
  }
  @media (max-width: 1882px) {
    font-size: 170px;
  }
  @media (max-width: 1798px) {
    font-size: 160px;
  }
  @media (max-width: 1715px) {
    font-size: 150px;
  }
  @media (max-width: 1632px) {
    font-size: 140px;
  }
  @media (max-width: 1548px) {
    font-size: 130px;
  }
  @media (max-width: 1465px) {
    font-size: 120px;
  }
  @media (max-width: 1382px) {
    font-size: 110px;
  }
  @media (max-width: 1298px) {
    font-size: 100px;
  }
  @media (max-width: 1215px) {
    font-size: 90px;
  }
  @media (max-width: 1132px) {
    font-size: 80px;
  }
  @media (max-width: 1050px) {
    font-size: 100px;
  }
  @media (max-width: 946px) {
    font-size: 80px;
  }
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 667px) {
    font-size: 60px;
  }
  @media (max-width: 600px) {
    align-self: flex-end;
    padding-left: 50px;
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  @media (max-width: 415px) {
    font-size: 30px;
    padding: 0;
  }

`
export const Title2 = styled(Title)`
  grid-area: tit2;
  justify-self: flex-start;

  @media (max-width: 1050px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    align-self: flex-start;
    padding-left: 0;
    margin-bottom: 30px;
  }
`
export const SubTitle = styled.p`
  grid-area: sub;
  line-height: 1.4;
  color: var(--colors-text-dark);
  font-weight: var(--fw-regular);
  font-size: 13px;
  letter-spacing: 0.5px;
  position: relative;
  bottom: -8px;

  @media (max-width: 1932px) {
    line-height: 1.3;
  }
  @media (max-width: 1848px) {
   // font-size: 14px;
  }
  @media (max-width: 1050px) {
    display: none;
    margin-bottom: 40px;
  }
`

export const SubTitleSmall = styled(SubTitle)`
  display: none;
  @media (max-width: 1050px) {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }

`
export const Button = styled.button`
  opacity: 0;
 // clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  grid-area: button;
  position: relative;
  font-size: 18px;
  border-radius:5px;
  background: var(--colors-bg-green);
  font-weight: var(--fw-extra-bold);
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 30px 25px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;
  bottom: -17px;

  :before {
    background-color: var(--colors-bg-green);
    border: 2px solid var(--colors-bg-green);
    border-radius:5px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  

  :hover {
    background: var(--colors-text-wight);
    color: black;
    transition: all 0.3s;

    :before {
      transition: all 0.3s;
      background-color: var(--colors-text-wight);
      transform: scale(1.1);
    }
  }

  @media (max-width: 1465px) {
    font-size: 16px;
    padding: 25px 25px;
  }
  @media (max-width: 1385px) {
    bottom: -13px;
  }
  @media (max-width: 1215px) {
    padding: 20px 25px;
    bottom: -10px;
  }
  @media (max-width: 1050px) {
    padding: 20px 35px;
    justify-self: end;
  }
  @media (max-width: 600px) {
    align-self: end;
    padding: 15px 30px;
  }
  @media (max-width: 500px) {
    align-self: stretch;
  }

`




