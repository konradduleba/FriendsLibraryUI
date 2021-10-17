import Dashboard from 'Pages/Authenticated/Dashboard';
import { Switch, Route } from "react-router-dom";

const Authenticated = () => (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='*' component={() => <h1>not found</h1>} />
    </Switch>
)

export default Authenticated