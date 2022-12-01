import styled from "styled-components";
import BgDesktop from '../../images/bg-main-desktop.png'
import BgMobile from '../../images/bg-main-mobile.png'

export const Bg = styled.div`
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 27vh;
  z-index: -1;

  @media (min-width: 768px) {
    background-image: url(${BgDesktop});
    right: unset;
    height: 100vh;
    width: 33.5vw;
  }
`
