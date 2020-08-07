import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Article from "./pages/article"
import News from "./pages/news"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id" component={Article} />
        <Route path="/">
          <News />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
