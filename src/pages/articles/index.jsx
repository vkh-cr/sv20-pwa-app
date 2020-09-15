import React from "react"
import { useQuery, gql } from "@apollo/client"

import { Container, ContainerForTwo, Column, ArticleContainer } from "./styles"
import ArticlePreview from "../../components/ArticlePreview"

const News = () => {

  const GET_ARTICLES = gql`
    query GetArticles {
      getArticles {
        id
        header
        text
        imageSrc
        type
        createdAt
        publishAt
      }
    }
  `

  const { loading, error, data } = useQuery(GET_ARTICLES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const articles = data.getArticles
  const sum = articles.length
  return (
    <>
      <Container>
        <ArticlePreview article={articles[0]} type={"big"} />
      </Container>
      <ContainerForTwo>
        <Column>
          <ArticlePreview article={articles[1]} type={"medium"} />
        </Column>
        <Column>
          <ArticlePreview article={articles[2]} type={"medium"} />
        </Column>
      </ContainerForTwo>
      <ArticleContainer>
        { sum > 3 && articles.slice(3).map(article => <ArticlePreview article={article} />) }
      </ArticleContainer>
    </>
  )

}

export default News
