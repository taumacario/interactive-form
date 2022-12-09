import styled from "styled-components";
import CardImg from '../../images/bg-card-front.png'


export const Card = styled.div`
  background-image: url(${CardImg});
  padding: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--light-grayish-violet);

  width: 285px;
  height: 160px;
  border-radius: 5px;

  @media (min-width: 1024px) { 
    width: 450px;
    height: 250px;
    padding: 3rem;
    border-radius: 12px;
  }
`
export const Logo = styled.figure`
  width: 55px;
  height: 30px;

  @media (min-width: 1024px) { 
    width: 85px;
    height: 47px;
  }

  img{
    width: 100%;
  }
`
export const CardNumber = styled.p`
  margin-top: 3.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  //overflow: hidden;

  @media (min-width: 1024px) { 
    margin-top: 6.5rem;
    font-size: 2.7rem;
    letter-spacing: 4px;
  }
`

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-top: 1.5rem;

  @media (min-width: 1024px) { 
    margin-top: 2.5rem;
  }
`

export const CardName = styled.span`
  text-transform: uppercase;

  @media (min-width: 1024px) { 
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
`

export const CardDate = styled.p`

  span {
    @media (min-width: 1024px) { 
      font-size: 1.4rem;
      letter-spacing: 1.5px;
    }
  }
`