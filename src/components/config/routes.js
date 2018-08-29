import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './../home';
import Callback from './callback';
import Auth from './auth';
import history from './history';
import store from './store';

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
                <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />
            </div>
        </Router>
    </Provider>
);

export default Routes;