import React, { createContext, useState } from 'react';

import { Context_profileChangeListener } from '../Types/interfaces';

export const profileChangeListener = createContext<
    Context_profileChangeListener
>({} as Context_profileChangeListener);

// Esse context foi criado para sincronizar as atualizações do CardChooser.tsx com as do Matches.tsx

export function Provider({ children }) {
    const [generatedNumber, setContext] = useState<number>(1);

    const newNumber: number = generatedNumber;

    const setNewNumberForUpdateListener = (content: number) => {
        setContext(content);
    };

    return (
        <profileChangeListener.Provider
            value={{ newNumber, setNewNumberForUpdateListener }}
        >
            {children}
        </profileChangeListener.Provider>
    );
}
