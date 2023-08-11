import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import 'normalize.css';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Router />
        </HelmetProvider>
    </React.StrictMode>
);
