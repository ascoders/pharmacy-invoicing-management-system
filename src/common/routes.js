import { Route, IndexRoute } from 'react-router'
import React from 'react'
import Layout from './layout'
import Home from './routes/home'
import Counter from './routes/counter'
import NotFound from './routes/not-found'

export default (
    <Route path="/"
           component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/counter"
               component={Counter}/>
        <Route path="*"
               component={NotFound}/>
    </Route>
)
