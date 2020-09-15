import React from "react"
import { Link } from "react-router-dom"

import { Container } from "./styles"
import PrayCube from "../../components/PrayCube"

import cubeInfo from "../../constants/pray-cubes"

const PrayingPage = () => {
  return (
    <Container>
      {cubeInfo.map((cube) => {
        const linkTo = {
          pathname: `/pray/${cube.id}`,
          article: cube,
        }
        return (
          <Link to={linkTo}>
            <PrayCube title={cube.title} image={cube.image} />
          </Link>
        )
      })}
    </Container>
  )
}

export default PrayingPage
