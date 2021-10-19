import Footer from 'Components/Footer';
import LoggedNavBar from 'Components/LoggedNavBar';
import Menu from 'Components/Menu';
import NavBar from 'Components/NavBar';
import { TokenContext } from 'Context/Token';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ScrollToTop from 'Utils/Functions/ScrollToTop';
import Authenticated from './Authenticated';
import GlobalRoutes from './Global';

const AppRoutesHandler = () => {
    const { isLoggedIn } = useContext(TokenContext);

    if (isLoggedIn) {
        return (
            <Router>
                <ScrollToTop />
                <div className='main-app-wrapper-authenticated'>
                    <Menu />
                    <div className='page-wrapper-authenticated'>
                        <LoggedNavBar />
                        <Switch>
                            <Redirect exact from="/" to="/dashboard" />
                            <Authenticated />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }

    return (
        <Router>
            <ScrollToTop />
            <div className='main-app-wrapper'>
                <NavBar />
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <div className='page-wrapper'>
                        <GlobalRoutes />
                    </div>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

// return (
//     <Router>
//         <ScrollToTop />
//         <div className='main-app-wrapper'>
//             {!isLoggedIn && <NavBar />}
//             {isLoggedIn && <Menu />}
//             <Switch>
//                 <Redirect exact from="/" to={isLoggedIn ? "/dashboard" : "/login"} />
//                 <div className='page-wrapper'>
//                     {isLoggedIn ? <Authenticated /> : <GlobalRoutes />}
//                 </div>
//             </Switch>
//             <Footer />
//         </div>
//     </Router>
// )

export default AppRoutesHandler