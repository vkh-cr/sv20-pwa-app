import React from "react"

import { Container, ArticleImage } from "./styles"

const Article = (props) => {
  console.log(props)
  const { article } = props.location
  console.log(article)
  return (
    <>
      <ArticleImage imageSrc={article.imageSrc}>
        <img src="/icons/back.svg" alt="back" onClick={() => props.history.goBack()} />
        <h1>{article.header}</h1>
      </ArticleImage>
      <Container dangerouslySetInnerHTML={{ __html: article.text }}></Container>
    </>
  )
}

export default Article
