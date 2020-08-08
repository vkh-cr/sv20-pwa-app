import styled from "styled-components"

export const Container = styled.div`
  visibility: hidden;
  min-width: 60vw;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  flex-direction: column;
  display: flex;
  transform: translate(0px, 100%);
  transition: all 4000ms ease-out 4000s;
  background: linear-gradient(191.97deg, #118ce5 48.35%, #23699b 109.28%);
  flex: 1;
  color: white;
  border-radius: 0 10px 10px 0;

  & img#drawerLogo {
    padding: 30px;
    width: fit-content;
    align-self: center;
  }
`
export const NavItem = styled.div`
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  height: 44px;
  & div {
    width: 50px;
    text-align: center;
  }
  & img {
    padding-right: 10px;
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 75%;
  background: rgba(228, 228, 228, 0.2);
`