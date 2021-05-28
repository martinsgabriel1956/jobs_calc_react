import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import EditJob from './pages/EditJob';
import Profile from './pages/Profile';
import CreateJob from './pages/CreateJob';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/job" exact component={CreateJob} />
        <Route path="/job/:id" component={EditJob} />
      </Switch>
    </BrowserRouter>
  );
}
