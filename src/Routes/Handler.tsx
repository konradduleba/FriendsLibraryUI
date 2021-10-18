import Footer from 'Components/Footer';
import NavBar from 'Components/NavBar';
import { TokenContext } from 'Context/Token';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ScrollToTop from 'Utils/Functions/ScrollToTop';
import Authenticated from './Authenticated';
import GlobalRoutes from './Global';

const AppRoutesHandler = () => {
    const { isLoggedIn } = useContext(TokenContext);

    return (
        <Router>
            <ScrollToTop />
            <div className='main-app-wrapper'>
                {!isLoggedIn && <NavBar />}
                <Switch>
                    <Redirect exact from="/" to={isLoggedIn ? "/dashboard" : "/login"} />
                    <div className='page-wrapper'>
                        {isLoggedIn ? <Authenticated /> : <GlobalRoutes />}
                    </div>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default AppRoutesHandler