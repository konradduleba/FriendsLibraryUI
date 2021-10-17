import { TokenContext } from 'Context/Token';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Authenticated from './Authenticated';
import GlobalRoutes from './Global';

const AppRoutesHandler = () => {
    const { isLoggedIn } = useContext(TokenContext);

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to={isLoggedIn ? "/dashboard" : "/login"} />
                {isLoggedIn ? <Authenticated /> : <GlobalRoutes />}
            </Switch>
        </Router>
    )
}

export default AppRoutesHandler