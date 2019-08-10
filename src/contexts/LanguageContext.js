import React, { useState } from 'react';

export const LanguageContext = React.createContext();

export const LanguageContextProvider = ({ children }) => {
    const [lang, setLang] = useState(navigator.language.slice(0,2));
    const values = {
        lang: lang === 'pl' ? 'pl' : 'en',
        setLang,
    };

    return (
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
};
