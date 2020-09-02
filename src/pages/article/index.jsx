import React from "react"

import { Container, ArticleImage } from "./styles"
import { Link } from "react-router-dom"

const Article = (props) => {
  console.log(props)
  const { article } = props.location
  console.log(article)
  return (
    <>
      <ArticleImage imageSrc={article.imageSrc}>
        <Link to="/">
          <img src="/icons/back.svg" alt="back" />
        </Link>
        <h1>{article.header}</h1>
      </ArticleImage>
      <Container dangerouslySetInnerHTML={{ __html: article.text }}></Container>
    </>
  )
}

export default Article
