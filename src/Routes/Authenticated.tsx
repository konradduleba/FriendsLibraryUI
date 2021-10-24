import Dashboard from 'Pages/Authenticated/Dashboard';
import Friends from 'Pages/Authenticated/Friends';
import Groups from 'Pages/Authenticated/Groups';
import UserPrivacy from 'Pages/Authenticated/Privacy';
import UserSettings from 'Pages/Authenticated/Settings';
import About from 'Pages/Global/About';
import Faq from 'Pages/Global/Faq';
import Privacy from 'Pages/Global/Privacy';
import Terms from 'Pages/Global/Terms';
import { Switch, Route } from "react-router-dom";

const Authenticated = () => (
    <Switch>
        <Route exact path='/friends' component={Friends} />
        <Route exact path='/groups' component={Groups} />
        <Route exact path='/my-privacy' component={UserPrivacy} />
        <Route exact path='/settings' component={UserSettings} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/faq' component={Faq} />
        <Route path='*' component={() => <h1>not found</h1>} />
    </Switch>
)

export default Authenticated