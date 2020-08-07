import React from "react"

import { Container } from "./styles"

const Drawer = ({ visibility, setVisibility }) => {
  return (
    <>
      <Container
        style={{
          visibility: visibility ? "visible" : "hidden",
          transition: `all 400ms ${visibility ? "ease-in" : "ease-out"}`,
          transform: visibility ? "none" : "translate( -100% ,0)",
        }}
      >
        <h1>Drawer</h1>
      </Container>
      <div
        className="sidenav-overlay"
        style={{
          opacity: visibility ? 1 : 0,
          visibility: visibility ? "visible" : "hidden",
          transition: `all 400ms ${visibility ? "ease-in" : "ease-out"}`,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 997,
        }}
        onClick={() => setVisibility(false)}
      ></div>
    </>
  )
}

export default Drawer
