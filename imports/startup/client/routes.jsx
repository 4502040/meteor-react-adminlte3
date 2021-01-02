import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Frontend } from '../../ui/frontend/Frontend';
import { Backend } from '../../ui/backend/Backend';
import { BackendHome } from '../../ui/backend/components/BackendHome';
import { BackendMain } from '../../ui/backend/components/BackendMain';
import { FrontendLogin } from '../../ui/frontend/components/FrontendLogin';
import AuthRoute from './authRoute';
import { FrontendPosts } from '../../ui/frontend/components/FrontendPosts';
import { FrontendContact } from '../../ui/frontend/components/FrontendContact';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" name="home" render={() => (<Frontend children={<FrontendPosts />} />)} />
            <Route exact path="/contact" name="contact" render={() => (<Frontend children={<FrontendContact />} />)} />
            <Route path="/login" name="login" component={FrontendLogin} />
            <AuthRoute exact path="/backend" name="backend" render={() => (<Backend children={<BackendHome />} />)}  />
            <AuthRoute exact path="/backend/main" name="backend.main" render={() => (<Backend children={<BackendMain />} />)}  />
        </Switch>
    </Router>
);

export default Routes;

