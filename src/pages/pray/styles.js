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

  & table {
    align-self: flex-start;
    margin: 0 -20px;
    width: cal(100vw - 20px);
  }
`

export const ArticleImage = styled.div`
  background-image: ${({ imageSrc }) => `linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(16,141,229,1) 100%), url("${imageSrc}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25vh;
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
