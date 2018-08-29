import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './../home';
import Callback from './callback';
import Auth from './auth';
import history from './history';
import store from './store';
import UserProfile from './../../containers/user_profile'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

const Routes = () => (
    <Provider store={store}>
        <Router history={history} component={Home}>
            <div>
                <Switch>
                    <Route path="/user/profile" render={(props) => <UserProfile auth={auth} {...props} />} />} />
                    <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }} />
                    <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                    <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default Routes;