import styled from "styled-components";
import {flexColumn} from "../../../common/style/mixin";

type ImageProps = {
    src: string;
};

export const HappyElephantAboutWrapper = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  padding-top: 60px;
  padding-bottom: 60px;
  // height: 1420px;

  @media (max-width: 1920px) {
    // background-position: 25% 0;
    // height: calc(1380px + (1420 - 1380) * ((100vw - 320px) / (1600 - 320)));
  }

  @media (max-width: 1439px) {
    background-size: 0;
    padding-bottom: 0;
  }

  @media (max-width: 1544px) {
    // background-position: 20% 50%;
    //   padding-bottom: 60%;

  }

  @media (max-width: 447px) {
    background-size: 0;
    height: auto;
    padding-bottom: 40px;
  }
 // width: 100%;

`
export const Img = styled.img.attrs({
    loading: "lazy"
})`
  display: none;
  
  @media (max-width: 1439px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const BlockMobile = styled.div`
  display: none;

  @media (max-width: 1439px) {
    display: block;
    margin-bottom: 60px;
  }

`
export const TitleMob = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: var(--color-dark);
  margin-bottom: 40px;

  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const TextMob = styled.div`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);

  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ColumnBlockMob = styled.div`
  ${flexColumn()};
  flex: 0 1 50%;
  row-gap: 40px;
`


export const ElephantAboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;

  @media (max-width: 879px) {
    flex-direction: column;
  }

`
export const BlockAbout = styled.div`
  flex: 0 1 50%;

  @media (max-width: 1439px) {
    display: none;

  }
  @media (max-width: 879px) {
    // margin-bottom: 40px;
  }
`
export const Title = styled.div`
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  color: var(--color-dark);
  margin-bottom: 40px;

  @media (max-width: 1920px) {
    font-size: calc(30px + (48 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(20px + (40 - 20) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const Text = styled.p`
  font-weight: var(--fw-medium);
  font-size: 40px;
  line-height: 1.3;
  color: var(--color-dark);


  @media (max-width: 1920px) {
    font-size: calc(21px + (40 - 21) * ((100vw - 320px) / (1920 - 320)));
  }
`
export const ColumnBlock = styled.div`
  ${flexColumn()};
  flex: 0 1 50%;
  row-gap: 640px;

  @media (max-width: 1920px) {
    row-gap: calc(400px + (640 - 400) * ((100vw - 320px) / (1600 - 320)));
  }

  @media (max-width: 1439px) {
    display: none;

  }
  @media (max-width: 879px) {
    //   row-gap: calc(500px + (700 - 500) * ((100vw - 320px) / (879 - 320)));
  }

  @media (max-width: 447px) {
    // row-gap: 40px;
  }


`



