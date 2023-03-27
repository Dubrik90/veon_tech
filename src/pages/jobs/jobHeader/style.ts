import styled from "styled-components";

type JobHeaderWrapperProps = {
    img?: string
}

export const JobHeaderWrapper = styled.div<JobHeaderWrapperProps>`
  background-image: url(${props => props.img});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150px;
  padding-bottom: 85px;
  background-color: var(--colors-bg-grey);
  @media (max-width: 632px) {
   // padding-top: 100px;
    padding-bottom: 50px;
  }
  @media (max-width: 614px) {
    padding-bottom: 40px;
  }

`
export const JobHeaderContent = styled.div`
  @media (max-width: 632px) {
    display: flex;
    flex-direction: column;
  }

`
export const Title = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 40px;
  line-height: 50px;
  color: var(--color-dark);
  margin-bottom: 20px;
  @media (max-width: 632px) {
    order: 1;
   // font-size: 60px;
   // max-width: 300px;
    
    span {
      color: var(--colors-text-green);
    }
  }
  @media (max-width: 614px) {
   // font-size: 50px;
  }
  @media (max-width: 526px) {
    font-size: 35px;
  }
  @media (max-width: 366px) {
    font-size: 30px;
  }

`