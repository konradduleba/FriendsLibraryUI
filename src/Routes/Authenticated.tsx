import Dashboard from 'Pages/Authenticated/Dashboard';
import About from 'Pages/Global/About';
import Faq from 'Pages/Global/Faq';
import Privacy from 'Pages/Global/Privacy';
import Terms from 'Pages/Global/Terms';
import { Switch, Route } from "react-router-dom";

const Authenticated = () => (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/faq' component={Faq} />
        <Route path='*' component={() => <h1>not found</h1>} />
    </Switch>
)

export default Authenticated