import {Route, IndexRoute} from 'react-router'
import React from 'react'
import Layout from './layout'
import Home from './routes/home'
import Counter from './routes/counter'
import NotFound from './routes/not-found'
import Search from './routes/search'
import Member from './routes/member'
import Sell from './routes/sell'
import Add from './routes/add'

export default (
    <Route path="/"
           component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/counter"
               component={Counter}/>
        <Route path="/add"
               component={Add}/>
        <Route path="/member"
               component={Member}/>
        <Route path="/search"
               component={Search}/>
        <Route path="/sell"
               component={Sell}/>
        <Route path="*"
               component={NotFound}/>
    </Route>
)
