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

const getStatusType = (status) => Number(status.slice(0,3));

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

    const login = async (body) => {
        setLoading(true)
        try {
            let response = await fetch(url, {
                ...headers,
                body: JSON.stringify(body)
            });
            let { status } = await response.json()
            switch(getStatusType(status)){
                case 200: {
                    console.log('good to go')
                    setAuthenticated(true)
                    setErrorType(null)
                    break;
                }
                case 401:{
                    console.log('wrong password')
                    setErrorType('invalidBody')
                    setAuthenticated(false)
                    break;
                }
                case 500: {
                    console.log('server error');
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
            setLoading(false)
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
    };


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};
