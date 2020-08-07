import React from "react"

import { Container } from "./styles"

const Header = (props) => {
  return (
    <Container>
      <img
        src="/icons/menu.svg"
        alt="menu"
        onClick={() => {
          props.setVisibility(true)
        }}
      />
      <h1>{props.children}</h1>
    </Container>
  )
}

export default Header
