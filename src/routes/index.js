import React from 'react'
import {  Route, Link, Switch } from "react-router-dom";
import LoginPage from './login/index'
import Main from './home/index'


const baseRoute = ()=>(
        
          <div>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={Main} />
          </div>
);
export default baseRoute;