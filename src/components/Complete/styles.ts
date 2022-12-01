import styled from "styled-components";

export const ContainerComplete = styled.div`
  margin-top: 1.8rem;

  @media (min-width: 768px) {
    max-width: 390px;
  }
`
export const Image = styled.figure`
  text-align: center;
`

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 2.7rem;
  letter-spacing: 4px;
  margin-top: 3rem;
`

export const Msg = styled.p`
  text-align: center;
  margin-top: 1.8rem;
`

export const Button = styled.button`
  width: 100%;
  background-color: var(--dark-violet);
  color: var(--light-grayish-violet);
  border: 0;
  border-radius: 0.6rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }

  &:hover {
    color: var(--dark-violet);
    background-color: var(--light-grayish-violet);
  }
`