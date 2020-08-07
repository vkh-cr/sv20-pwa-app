import React from "react"

import { Container, SmallContainer, RowContainer, Type, Description, DateText, Column } from "./styles"

const ArticlePreview = ({ article, type }) => {
  const stringDate = `${article.date.getDate()}.${article.date.getMonth() + 1} ${article.date.getFullYear()}, ${article.date.getHours()}:${article.date.getMinutes()}`

  if (type === "big") {
    return (
      <Container>
        <img src={article.imageSrc} alt="Article" />
        <h2>{article.header}</h2>
        <Description>{article.text} ...</Description>
      </Container>
    )
  }
  if (type === "medium") {
    return (
      <SmallContainer>
        <img src={article.imageSrc} alt="Article" />
        <Type>{article.type}</Type>
        <h2>{article.header}</h2>
        <DateText>{stringDate}</DateText>
      </SmallContainer>
    )
  }
  return (
    <RowContainer>
      <Column image>
        <img src={article.imageSrc} alt="Article" />
      </Column>
      <Column>
        <h2>{article.header}</h2>
        <DateText>{stringDate}</DateText>
      </Column>
    </RowContainer>
  )
}

export default ArticlePreview
