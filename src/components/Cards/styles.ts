import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  padding: 3rem 1.5rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 12rem;

  @media (min-width: 768px) { 
    padding: 19rem 6.5rem;
    
    flex-direction: row;
    align-items: center;
    //justify-content: space-between;
    gap: 12.5rem;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) { 
    flex-direction: column;
  }
`
export const ContainerCardF = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 125px;
  z-index: 2;

  @media (min-width: 768px) {
    position: unset;
    top: unset;
    z-index: unset;
  }
`

export const ContainerCardB = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ContainerForm = styled.div`
  padding: 2px 9px 0;
  flex: 1;

  @media (min-width: 768px) {
    padding: 0;

    margin-bottom: 65px;
    margin-right: 57px;
  }
`
