import React, { createContext, useState } from 'react';

export const profileChangeListener = createContext<any>(null);

// Segundo as minhas pesquisas realmente existe um problema para tipar
// createContext no TypeScript. Manterei como any até encontrar uma solução

export function Provider({ children }) {
    const [contextState, setContextState] = useState<number>();

    return (
        <profileChangeListener.Provider
            value={{ contextState, setContextState }}
        >
            {children}
        </profileChangeListener.Provider>
    );
}
