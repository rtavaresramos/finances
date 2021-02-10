import React from 'react';
import Layout from './core/components/Layout';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './core/styles/GlobalStyles';
import dark from './core/styles/themes/dark'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    )
}

export default App;