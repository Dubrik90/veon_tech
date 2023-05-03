import styled from "styled-components";

export const ServicesWrapper = styled.div`
  .entry-content {
    padding-top: 140px;
  }
   

  @media (max-width: 479px) {
    .entry-content > * {
      max-width: calc(100vw - 40px)
    }
  }
`
export const WebPOWrapper = styled.div`
  max-width:880px;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`
export const Title = styled.h2`
  margin-bottom: 28px;
  font-size: calc(35px + (60 - 35) * ((100vw - 320px) / (1920 - 320)));
  line-height: 110%;
  color:var( --colors-text-dark);
  font-weight: 700;
  
  span {
    position: relative;
    display: inline-block;
    // border-bottom: 12px solid #5DB447;
    // padding-bottom: -15px;
    :before {
      content: '';
      width: 100%;
      position: absolute;
      bottom: 8px;
      opacity: 0.8;
      left: 0;
      z-index: -1;
      height: 12px;
      background-color: #5DB447;
    }
`
export const Text = styled.p`
  margin-bottom: 28px;
  font-size: calc(21px + (28 - 21) * ((100vw - 320px) / (1920 - 320)));
  line-height: 130%;
  color:var( --colors-text-dark);
  
  .cursive {
  }
`
export const TextCursive = styled.p`
  font-size: calc(21px + (24 - 21) * ((100vw - 320px) / (1920 - 320)));
  font-style: italic;
  margin-top: -10px;

`

export const LinkBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  div {
    display: inline-block;
    padding: 6px 23px 7px;
    font-size: 20px;
    line-height: 30px;
    color: #111;
    background-color: #ecf0f4;
    border: 1px solid #ecf0f4;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    -webkit-transition: color .3s, background-color .3s, border .3s;
    -moz-transition: color .3s, background-color .3s, border .3s;
    -o-transition: color .3s, background-color .3s, border .3s;
    transition: color .3s, background-color .3s, border .3s;
  }
`

export const ColumnBlockWrap = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-wrap: nowrap;
  gap: 60px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
  
  div {
    flex-grow: 1;
    flex-basis: 0;
    word-break: break-word;
    overflow-wrap: break-word;

    p {
      font-size: 20px;
      line-height: 130%;
      color:var( --colors-text-dark);

      strong {
        font-weight: var(--fw-medium);
      }
    }
  }

`
export const ContentBlock = styled.div`
  margin-bottom: 30px;

  ul {
    margin-top: 28px;
    margin-bottom: 28px;

    li {
      max-width: 100%;
     // padding-left: 32px;
      font-size: calc(21px + (26 - 21) * ((100vw - 320px) / (1920 - 320)));
      line-height: 130%;
      position: relative;
      color:var( --colors-text-dark);

      //:before {
      //  content: '';
      //  position: absolute;
      //  display: block;
      //  top: 50%;
      //  transform: translateY(-50%);
      //  left: 0;
      //  width: 17px;
      //  height: 2px;
      //  font-size: 20px;
      //  line-height: 30px;
      //  background-color: var(--colors-text-dark);
      //  
      //}

    }
  }
`



