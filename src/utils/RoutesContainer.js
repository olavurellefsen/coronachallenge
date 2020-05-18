
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Streaming from '../main/streaming/Streaming'
import Header from '../main/Header'

const RoutesContainer = () => {
  return (
    <Switch>
      <Route path="/stream" component={Streaming}/>
      <Route path="/" component={Header}/>
    </Switch>
  )
}

export default RoutesContainer
