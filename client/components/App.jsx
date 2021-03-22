import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Heading from "./Header"
import Landing from "./Landing"
import Make from "./Make"

const App = () => {
  return (
    <>
      <Heading />
      <HashRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/make" component={Make} />
      </HashRouter>
    </>
  )
}

export default App

// MAKE SOMETHING ABOUT SUBMITTING OWN FLAVOURS FOR REVIEW
