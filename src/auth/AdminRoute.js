import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, JWTAuthenticated, isAuthenticated, ...rest }) => (
    <Route {...rest} render={props => (
        (isAuthenticated === 'admin')
            ?
            (<Component {...props} />)
            :
            (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
    )} />
);

export default AdminRoute;