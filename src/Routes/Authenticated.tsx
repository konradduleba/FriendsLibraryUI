import Dashboard from 'Pages/Authenticated/Dashboard';
import About from 'Pages/Global/About';
import Terms from 'Pages/Global/Terms';
import { Switch, Route } from "react-router-dom";

const Authenticated = () => (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/terms' component={Terms} />
        <Route path='*' component={() => <h1>not found</h1>} />
    </Switch>
)

export default Authenticated