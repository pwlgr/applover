import React,  { useState } from 'react';

export const AuthContext = React.createContext();

const headers = {
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'example.org'
    },
}

const url = 'https://bench-api.applover.pl/api/v1/login';


const errors = {
    invalidBody: {
        errorMessage: 'Invalid email or password.'
    },
    serverError: {
        errorMessage: 'There was a problem with the server.'
    }
};

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [errorType, setErrorType] = useState(null);

    const login = async (body, keepLoggedIn) => {
        setLoading(true);
        try {
            const response = await fetch(url, {
                ...headers,
                body: JSON.stringify(body)
            });
            const data = await response.json();
            switch(response.status){
                case 200: {
                    setAuthenticated(true)
                    setErrorType(null)
                    if(keepLoggedIn){
                        document.cookie =`auth_token=${data.token}`;
                    }
                    break;
                }
                case 401:{
                    setErrorType('invalidBody');
                    setAuthenticated(false);
                    break;
                }
                case 500: {
                    setErrorType('serverError');
                    setAuthenticated(false);
                    break;
                }
                default: {
                    setAuthenticated(false);
                }
            }
            setLoading(false)
            return status;
        } catch(err){
            setLoading(false);
            setAuthenticated(false);
            setErrorType('serverError');
            throw err;
        }
    }

    const closeError = () => {
        setErrorType('');
    }

    const values = {
        authenticated,
        login,
        isLoading,
        error: errors[errorType],
        closeError,
        setAuthenticated,
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};


