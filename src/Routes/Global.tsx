import Login from 'Pages/Global/Login';
import Register from 'Pages/Global/Register';
import React from 'react'
import { Switch, Route } from "react-router-dom";

const GlobalRoutes = () => (
    <>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route path='*' component={() => <h1>not found</h1>} />
        </Switch>
    </>
)

export default GlobalRoutes;