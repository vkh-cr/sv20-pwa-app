import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 0 auto;
  position: relative;
  text-align: justify;
`

export const ArticleImage = styled.div`
  background-image: ${({ imageSrc }) => `url("${imageSrc}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 75vh;
  position: relative;
  padding: 10px;

  & h1 {
    position: absolute;
    bottom: 0px;
    padding: 0 20px;
    color: white;
    text-shadow: 2px 2px black;
    text-align: center;
  }

  & img {
    margin-top: 0.67em;
    padding: 0 0 0 10px;
    cursor: pointer;
    align-self: center;
  }
`
