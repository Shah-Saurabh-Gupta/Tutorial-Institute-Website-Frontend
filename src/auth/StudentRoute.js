import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const StudentRoute = ({ component : Component, isAuthenticated, ...rest}) =>(
    <Route {...rest} render={props =>(
        (isAuthenticated==='user')
        ?
        (<Component {...props}/>)
        :
        (<Redirect to ={{pathname: "/", state: { from: props.location}}} />)
    )}/>
);

export default StudentRoute;