import styled from "styled-components";

export const PolicyWrapper = styled.div`
  padding-top: calc(120px + (150 - 120) * ((100vw - 320px) / (1920 - 320)));
  padding-bottom: calc(50px + (100 - 50) * ((100vw - 320px) / (1920 - 320)));
`

export const Content = styled.div`
  ol {
    ounter-reset: num;
    list-style: none;
    margin-bottom: 15px;
  }

  li {
    counter-increment: num;
    font-size: calc(13px + (18 - 13) * ((100vw - 320px) / (1920 - 320)));
    font-weight: var(--fw-regular);
    line-height: 1.4;
    color: var(--colors-text-light);
    margin-bottom: 5px;
  }

  li::before {
    content: counter(num);
    padding-right: 10px;
  }

  /* 2-й уровень */

  ol ol {
    counter-reset: num2;
  }

  ol ol > li {
    counter-increment: num2;
    padding-left: 15px;
  }

  ol ol > li::before {
    content: counter(num) '.' counter(num2);
  }

  /* 3-й уровень */

  ol ol ol {
    counter-reset: num3;
  }

  ol ol ol > li {
    counter-increment: num3;
  }

  ol ol ol > li::before {
    content: counter(num) '.' counter(num2) '.' counter(num3);
  //  border: 1px solid #368c49;
  }

`
export const Title = styled.h5`
  color: var(--colors-text-dark);
  font-size: calc(16px + (30 - 16) * ((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-bold);
  margin-bottom: calc(16px + (30 - 16) * ((100vw - 320px) / (1920 - 320)));
`
export const Text = styled.p`
  font-size: calc(13px + (18 - 13) * ((100vw - 320px) / (1920 - 320)));
  font-weight: var(--fw-regular);
  line-height: 1.3;
  color: var(--colors-text-light);
  margin-bottom: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
`

export const Ol = styled.ol`
  
`
export const Li = styled.li`
  
`