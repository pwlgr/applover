import React,  { useState } from 'react';
import { withRouter } from 'react-router-dom';
export const AuthContext = React.createContext();

const request = {
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'example.org'
    },
}

const url = 'https://bench-api.applover.pl/api/v1/login';

const getCookie = name => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

const errors = {
    invalidBody: {
        errorMessage: 'Invalid email or password.'
    },
    serverError: {
        errorMessage: 'There was a problem with the server.'
    }
};

const AuthContextProvider = ({ children, history }) => {
    const [isLoading, setLoading] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (body, keepLoggedIn) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                ...request,
                body: JSON.stringify(body)
            });
            const data = await response.json();
            switch(response.status){
                case 200: {
                    setErrorType(null);
                    setToken(data.token);
                    if(keepLoggedIn){
                        document.cookie =`auth_token=${data.token}`;
                    }
                    history.push("/landing");
                    break;
                }
                case 401:{
                    setErrorType('invalidBody');
                    break;
                }
                case 500: {
                    setErrorType('serverError');
                    break;
                }
                default: {
                    setToken(null);
                }
            }
            setLoading(false)
        } catch(err){
            setLoading(false);
            setErrorType('serverError');
            throw err;
        }
    }

    const closeError = () => {
        setErrorType('');
    }

    const values = {
        login,
        isLoading,
        error: errors[errorType],
        closeError,
        token: getCookie('auth_token') || token,
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};

export default withRouter(AuthContextProvider);