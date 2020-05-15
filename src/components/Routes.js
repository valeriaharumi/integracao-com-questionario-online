import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Sobre from './Sobre'
import Login from './Login';
import Management from './Management'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (<>
    <Header/>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/management" component={Management} />
        </Switch>
    </BrowserRouter>
    <Footer/>
    </>
);

export default Routes;
