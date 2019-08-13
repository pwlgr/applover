import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { token } = useContext(AuthContext);
    
    return (
        <Route {...rest} 
            render={props => (
                token ? <Component {...props} /> : <Redirect to={{
                    pathname: '/',
                    state: {
                        from: props.location
                        }
                    }}
                />
            )} />
    )
};