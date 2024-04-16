import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme.jsx';
import { globalStyles } from './styles/GlobalStyles.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <Provider store={store}>
        <App />
        <Global styles={globalStyles} />
     </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
