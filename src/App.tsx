import GlobalStyle from './Global/global_styles';
import PageDrawer from './Pages/PageDrawer';
import { Provider } from './Global/profileChangeListener_Context';
import React from 'react';

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider>
                <PageDrawer />
            </Provider>
        </>
    );
}

export default App;
