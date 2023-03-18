import styled from 'styled-components';


export const MainWrapper = styled.main`
    flex: 1 1 auto;
  .box-container {
    top: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    width: 100%;
    overflow: visible;
  }

  .box {
    font-size: 28px;
    font-weight: 700;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 15%;
    margin: 10px;
    position: absolute;

  }

@for $i from 1 through  5{
  .box-#{$i}{
    top: calc(100px * #{$i});
    left: calc(15% * #{$i - 1} + 20px);
  }
}
`