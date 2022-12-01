import styled from "styled-components";

export const Form = styled.form`
  color: var(--dark-violet);
  margin-top: 2rem;

  @media (min-width: 768px) {
    max-width: 390px;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
  }
`

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .date {
    width: 45%;
  }

  .cvc {
    width: 50%;
  }

  .input-date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
`

export const Input = styled.input`
  padding: 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid var(--light-grayish-violet);
  margin-top: 1rem;
  width: 100%;
  font-size: 1.6rem;
  letter-spacing: 1.3px;
  margin-left: 0.3rem;
  text-transform: uppercase;

   &::placeholder{
    text-transform: initial;
  } 

  /* &:active {
    border-color: #5b41e9;
    //border-image: linear-gradient(45deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
    //border-image-slice: 1;
  } */

  &:focus {
    //outline: 0.7px solid #5b41e9;
  }

  &:focus:invalid {
    //outline: 1px solid red;
  } 
  /* 
  &:valid {
    border: 1px solid #5b41e9;
  } */
`
export const Button = styled.button`
  width: 100%;
  background-color: var(--dark-violet);
  color: var(--light-grayish-violet);
  border: 0;
  border-radius: 0.6rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }

  &:hover {
    color: var(--dark-violet);
    background-color: var(--light-grayish-violet);
  }
`