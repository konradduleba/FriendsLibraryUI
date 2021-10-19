import About from 'Pages/Global/About';
import Faq from 'Pages/Global/Faq';
import Login from 'Pages/Global/Login';
import Privacy from 'Pages/Global/Privacy';
import Register from 'Pages/Global/Register';
import Terms from 'Pages/Global/Terms';
import React from 'react'
import { Switch, Route } from "react-router-dom";

const GlobalRoutes = () => (
    <>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/faq' component={Faq} />
            <Route path='*' component={() => <h1>not found</h1>} />
        </Switch>
    </>
)

export default GlobalRoutes;