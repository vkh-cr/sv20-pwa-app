import React from "react"

import { Container, NavItem, Divider } from "./styles"

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
        <img id="drawerLogo" src="/images/drawerLogo.png" alt="Logo"  />
        <NavItem>
          <div>
            <img src="/icons/sv.svg" alt="O SV" />
          </div>
          <span>SV</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/home.svg" alt="Aktuality" />
          </div>
          <span>AKTUALITY</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/harmonogram.svg" alt="Harmonogram" />
          </div>
          <span>HARMONOGRAM</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/fish.svg" alt="Fish" />
          </div>
          <span>Duchovní PROSTOR</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/chat.svg" alt="Chat" />
          </div>
          <span>přednášky</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/activity.svg" alt="aktivity" />
          </div>
          <span>AKTIVITY</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/mapa.svg" alt="Mapa" />
          </div>
          <span>MAPA</span>
        </NavItem>
        <Divider />
        <NavItem>
          <div>
            <img src="/icons/question.svg" alt="Otazecka" />
          </div>
          <span>FAQ</span>
        </NavItem>
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
