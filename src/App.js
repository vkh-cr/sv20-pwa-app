import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Article from "./pages/article"
import News from "./pages/articles"
import Harmonogram from "./pages/harmonogram"
import Drawer from "./components/Drawer"
import staticData from "./constants/static-paragraphs"
import PrayingPage from "./pages/prayingPage";
import Pray from "./pages/pray";


const client = new ApolloClient({
  uri: 'https://sv.ff0000.cz/graphql',
  cache: new InMemoryCache()
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Drawer />
        <Switch>
          <Route path="/article/:id" component={Article} />
          <Route path="/pray/:id" component={Pray} />
          <Route path="/harmonogram">
            <Harmonogram />
          </Route>
          <Route path="/sv">
            <Article location={staticData.sv} />
          </Route>
          <Route path="/faq">
            <Article location={staticData.faq} />
          </Route>
          <Route path="/praying-program">
            <PrayingPage />
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
