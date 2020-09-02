import React, { useState, useEffect } from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Article from "./pages/article"
import News from "./pages/articles"
import Harmonogram from "./pages/harmonogram"
import Drawer from "./components/Drawer"
import staticData from "./constants/static-paragraphs"


const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

function App() {

  const [drawerVisible, setIsDrawerVisible] = useState(false)

  return (
    <ApolloProvider client={client}>
      <Router>
        <Drawer visibility={drawerVisible} setVisibility={(visilibity) => setIsDrawerVisible(visilibity)} />
        <Switch>
          <Route path="/article/:id" component={Article} />
          <Route path="/harmonogram">
            <Harmonogram />
          </Route>
          <Route path="/sv">
            <Article location={staticData.sv} />
          </Route>
          <Route path="/">
            <News />
          </Route>

        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
