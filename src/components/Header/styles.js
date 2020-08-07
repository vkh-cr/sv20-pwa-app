import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(225.34deg, #1323dd 0%, #7ff0ff 101.17%);
  flex: 1;
  display: flex;
  color: white;
  text-align: center;

  & h1 {
    flex-grow: inherit;
    margin-right: 48px;
  }
  & img {
    padding: 0 0 0 20px;
    cursor: pointer;
    align-self: center;
  }
`
