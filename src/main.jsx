import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import GlobalStyles from './styles/globals';

// import { SignIn } from './pages/SignIn';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes/>
        {/* <SignIn /> */}
    </ThemeProvider>
  </React.StrictMode>
)
