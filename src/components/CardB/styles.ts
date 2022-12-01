import styled from "styled-components";
import CardImg from '../../images/bg-card-back.png'

export const Card = styled.div`
  background-image: url(${CardImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  width: 285px;
  height: 160px;
  border-radius: 5px;

  position: relative;

  @media (min-width: 768px) {
    margin-left: 50px;
  }

  @media (min-width: 1024px) { 
    width: 450px;
    height: 315px;
    margin-left: 90px;
  }
`

export const CardCvc = styled.span`
  color: var(--light-grayish-violet);
  font-size: 1rem;
  letter-spacing: 1px;
  position: absolute;
  top: 71px;
  left: 230px;

  @media (min-width: 1024px) { 
    top: 148px;
    left: 355px; 
    font-size: 1.6rem;
  }
`