import styled from 'styled-components';
import {fontSize} from "../../../common/style/mixin";

export const HeaderMainWrapper = styled.div`
  padding: 250px 0;
  @media (max-width: 600px) {
    padding: 150px 0;
  }
  
`
export const HeaderMainContent = styled.div`
  display: grid;
  //column-gap: 50px;
  // row-gap: 15px;
  align-items: center;
  grid-template-areas: 'sub tit1 tit1''tit2 tit2 button';
  grid-template-columns: 350px 1fr 350px;
  @media (max-width: 1445px) {
    grid-template-columns: 300px 1fr 350px;
  }

  @media (max-width: 1250px) {
    grid-template-columns: 250px 1fr 350px;
  }
  @media (max-width: 1250px) {
    grid-template-columns: 250px 1fr 300px;
  }
  @media (max-width: 1127px) {
    grid-template-columns: 250px 1fr 250px;
  }
  @media (max-width: 1050px) {
    grid-template-areas: 'sub sub sub''tit1 tit1 tit1''tit2 tit2 tit2' 'button button button';
    row-gap: 15px;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0;
  }
  

  
  //@media (max-width: 768px) {
  //  padding: 130px 0 66px 0;
  //}

`
export const Title = styled.h1`
  grid-area: tit1;
  font-family: Coolvetica, sans-serif;
  ${fontSize(200)};
  line-height: 1.2;
  justify-self: flex-end;

  @media (max-width: 1980px) {
    ${fontSize(190)};
  }
  @media (max-width: 1895px) {
    ${fontSize(180)};
  }
  @media (max-width: 1820px) {
    ${fontSize(170)};
  }
  @media (max-width: 1741px) {
    ${fontSize(160)};
  }
  @media (max-width: 1668px) {
    ${fontSize(150)};
  }
  @media (max-width: 1593px) {
    ${fontSize(140)};
  }
  @media (max-width: 1519px) {
    ${fontSize(130)};
  }
  @media (max-width: 1445px) {
    ${fontSize(120)};
  }
  @media (max-width: 1320px) {
    ${fontSize(110)};
  }
  @media (max-width: 1246px) {
    ${fontSize(100)};
  }
  @media (max-width: 1210px) {
    ${fontSize(100)};
  }
  @media (max-width: 1127px) {
    ${fontSize(90)};
  }
  @media (max-width: 1050px) {
    ${fontSize(100)};
  }
  @media (max-width: 915px) {
    ${fontSize(80)};
  }
  @media (max-width: 705px) {
    ${fontSize(70)};
  }
  @media (max-width: 646px) {
    ${fontSize(60)};
  }
  @media (max-width: 600px) {
    text-indent: 50px;
  }
  @media (max-width: 580px) {
    ${fontSize(50)};
  }
  @media (max-width: 510px) {
    ${fontSize(40)};
  }
  @media (max-width: 434px) {
    ${fontSize(40)};
  }
  @media (max-width: 385px) {
    ${fontSize(35)};
  }
  @media (max-width: 340px) {
    ${fontSize(30)};
  }

  // order: 1;
  // font-weight: var(--fw-black);
  // //font-size: 58px;
  // line-height: 73px;
  color: var(--colors-text-green);
  // margin-bottom: 87px;

  span {
    color: var(--colors-text-dark);
  }

  //@media (max-width: 1048px) {
  //  font-size: 52px;
  //}



`
export const Title2 = styled(Title)`
  grid-area: tit2;
  // align-self: center;
  justify-self: flex-start;
  @media (max-width: 600px) {
    text-indent: 0;
    margin-bottom: 20px;
  }

`
export const SubTitle = styled.p`
  //order: 2;
  grid-area: sub;
  line-height: 1.5;
  color: var(--colors-text-dark);
  ${fontSize(20)};

  @media (max-width: 1445px) {
    ${fontSize(18)};
  }
  @media (max-width: 1320px) {
    ${fontSize(16)};
  }
  @media (max-width: 1250px) {
    ${fontSize(15)};
  }
  @media (max-width: 1210px) {
    ${fontSize(14)};
  }
  @media (max-width: 1050px) {
    max-width: 250px;
    margin-bottom: 25px;
  }
  @media (max-width: 600px) {
    ${fontSize(13)};
    max-width: 200px;
  }
  @media (max-width: 385px) {
    ${fontSize(12)};
  }
  


  //margin-bottom: 27px;
  //max-width: 650px;
  //@media (max-width: 768px) {
  //  order: 1;
  //}
  //@media (max-width: 680px) {
  //  font-size: 10px;
  //  line-height: 13px;
  //  max-width: 240px;
  //}
`
export const Button = styled.button`
  grid-area: button;
  //order: 3;
  //align-self: end;
  position: relative;

  :before {
    background-color: var(--colors-bg-green);
    border: 2px solid var(--colors-bg-green);
    border-radius: 8px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color .3s ease-in-out, border-color .3s ease-in-out, transform .3s ease-in-out;
    width: 100%;
    z-index: -1;

  }

  background: var(--colors-bg-green);
  border-radius: 8px;
  font-weight: var(--fw-extra-bold);
  ${fontSize(16)}
  line-height: 20px;
  color: var(--colors-text-wight);
  padding: 30px 25px;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  font-family: var(--family);
  text-transform: uppercase;

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


  @media (max-width: 1593px) {
    padding: 25px 25px;
  }
  @media (max-width: 1246px) {
    padding: 22px 18px;
  }
  @media (max-width: 1127px) {
    padding: 18px 18px;
  }
  @media (max-width: 1050px) {
    padding: 18px 35px;
    justify-self: end;
  }
  @media (max-width: 600px) {
    align-self: end;
    padding: 10px 30px;
    ${fontSize(14)}
    
  }
  @media (max-width: 385px) {
  }
  



//@media (max-width: 1250px) {
//  
//}

//@media (max-width: 680px) {
//  padding: 30px 50px;
//  align-self: stretch;
//}
//@media (max-width: 400px) {
//  padding: 30px 11px;
//  align-self: stretch;
//}

`




