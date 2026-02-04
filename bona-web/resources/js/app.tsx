import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

// Importaciones corregidas
import i18n from './legacy/i18n.js'; 
import { I18nextProvider } from 'react-i18next';
import { CartProvider } from './legacy/components/cartcontext/CartContext';
import Header from './legacy/components/Header/header';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        let page;
        if (name === 'Register') {
            page = await import('./legacy/components/Register/register.jsx');
        } else {
            page = await resolvePageComponent(
                `./pages/${name}.jsx`,
                import.meta.glob('./pages/**/*.jsx')
            );
        }

        // ✅ TRUCO MAESTRO: Envolvemos cada página con el Header y el Provider aquí mismo
        // Esto garantiza que usePage() funcione siempre.
        page.default.layout = page.default.layout || ((page) => (
            <CartProvider>
                <div className="App">
                    <main className="content-wrapper">
                        {page}
                    </main>
                </div>
            </CartProvider>
        ));

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StrictMode>
                <I18nextProvider i18n={i18n}>
                    <App {...props} />
                </I18nextProvider>
            </StrictMode>
        );
    },
    progress: {
        color: '#4B5563',
    },
});