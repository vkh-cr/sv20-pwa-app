import React, { useState, useEffect } from "react"

import { Container, ContainerForTwo, Column, ArticleContainer } from "./styles"
import Header from "../../components/Header"
import ArticlePreview from "../../components/ArticlePreview"
import Drawer from "../../components/Drawer"

const articles = [
  {
    id: "studensky-velehrad-ma-tema",
    header: "Studentský velehrad 2020 představil letošní tému!",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    imageSrc: "/images/article.png",
    type: "Praktické informace",
    date: new Date(),
  },
]

const News = () => {
  const [drawerVisible, setIsDrawerVisible] = useState(false)

  useEffect(() => {
    console.log(drawerVisible)
  }, [drawerVisible])

  return (
    <>
      <Drawer visibility={drawerVisible} setVisibility={(visilibity) => setIsDrawerVisible(visilibity)} />
      <Header setVisibility={(visilibity) => setIsDrawerVisible(visilibity)}>Novinky</Header>
      <Container>
        <ArticlePreview article={articles[0]} type={"big"} />
      </Container>
      <ContainerForTwo>
        <Column>
          <ArticlePreview article={articles[0]} type={"medium"} />
        </Column>
        <Column>
          <ArticlePreview article={articles[0]} type={"medium"} />
        </Column>
      </ContainerForTwo>
      <ArticleContainer>
        <ArticlePreview article={articles[0]} />
        <ArticlePreview article={articles[0]} />
        <ArticlePreview article={articles[0]} />
        <ArticlePreview article={articles[0]} />
      </ArticleContainer>
    </>
  )
}

export default News
