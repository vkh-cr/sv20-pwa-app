import React from "react"

import { Container, SmallContainer, RowContainer, Type, Description, DateText, Column } from "./styles"
import { Link } from "react-router-dom"

const ArticlePreview = ({ article, type }) => {

  // {
  //   "id": "5f4fe6aaea25fc14f12c71d4",
  //   "header": "BLABLABLA",
  //   "text": "Lorem horem dolem",
  //   "imageSrc": "balblabl",
  //   "type": "WARNING",
  //   "createdAt": "2020-09-02T18:38:34.718Z",
  //   "publishAt": "2020-09-02T18:38:34.718Z"
  // }
  const createdAt = new Date(article.createdAt)
  const stringDate = `${createdAt.getDate()}.${createdAt.getMonth() + 1} ${createdAt.getFullYear()}, ${createdAt.getHours()}:${createdAt.getMinutes()}`

  const linkTo = {
    pathname: `/article/${article.id}`,
    article: article,
  }
  if (type === "big") {
    return (
      <Link to={linkTo}>
        <Container>
          <img src={article.imageSrc} alt="Article" />
          <h2>{article.header}</h2>
          <Description>{article.text} ...</Description>
        </Container>
      </Link>
    )
  }
  if (type === "medium") {
    return (
      <Link to={linkTo}>
        <SmallContainer>
          <img src={article.imageSrc} alt="Article" />
          <Type>{article.type}</Type>
          <h2>{article.header}</h2>
          <DateText>{stringDate}</DateText>
        </SmallContainer>
      </Link>
    )
  }
  return (
    <Link to={linkTo}>
      <RowContainer>
        <Column image>
          <img src={article.imageSrc} alt="Article" />
        </Column>
        <Column>
          <h2>{article.header}</h2>
          <DateText>{stringDate}</DateText>
        </Column>
      </RowContainer>
    </Link>
  )
}

export default ArticlePreview
