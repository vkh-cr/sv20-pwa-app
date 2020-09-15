import React from "react"

import { Container, ArticleImage } from "./styles"

const Pray = (props) => {
  const { article } = props.location
  return (
    <>
      <ArticleImage imageSrc={article.image}>
        <img src="/icons/back.svg" alt="back" onClick={() => props.history.goBack()} />
        <h1>{article.title}</h1>
      </ArticleImage>
      <Container dangerouslySetInnerHTML={{ __html: article.text }}></Container>
    </>
  )
}

export default Pray
