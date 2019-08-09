import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {
    const language = navigator.language.slice(0,2);
    return (
        <LanguageContext.Provider value={language === 'pl' ? 'polish' : 'english'}>
            {children}
        </LanguageContext.Provider>
    )
};
