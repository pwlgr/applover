import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

export const ConfigurationContext = React.createContext();

export const ConfigurationContextProvider = ({ children }) => {

    const contextValue = useReducer(reducer, initialState);
    return (
        <ConfigurationContext.Provider value={contextValue}>
            {children}
        </ConfigurationContext.Provider>
    )
}