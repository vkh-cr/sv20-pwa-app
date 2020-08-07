import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import News from "./pages/news"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <News />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
