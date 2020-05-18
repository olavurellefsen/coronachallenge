
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Streaming from '../main/streaming/Streaming'
import Header from '../main/Header'

const RoutesContainer = () => {
  return (
    <Switch>
      {/* <Route path="/" component={Header}/> */}
      <Route path="/stream" component={Streaming}/>
    </Switch>
  )
}

export default RoutesContainer
