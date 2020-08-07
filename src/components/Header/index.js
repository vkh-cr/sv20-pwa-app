import React from "react"

import { Container } from "./styles"
import { Link } from "react-router-dom"

const Header = (props) => {
  const showCorrectButton = () => {
    if (props.back) {
      return (
        <Link to="/">
          <img src="/icons/back.svg" alt="back" />
        </Link>
      )
    }
    return <Link to="/"><img src="/icons/menu.svg" alt="menu" /></Link>
  }

  return (
    <Container>
      {showCorrectButton()}
      <h1>{props.children}</h1>
    </Container>
  )
}

export default Header
