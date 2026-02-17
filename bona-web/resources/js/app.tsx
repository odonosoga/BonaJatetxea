import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

// Importaciones
import i18n from './legacy/i18n.js'; 
import { I18nextProvider } from 'react-i18next';
import { CartProvider } from './legacy/components/cartcontext/CartContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        let page;
        
        // Excepciones para archivos que están fuera de la carpeta /pages
        if (name === 'Register') {
            page = await import('./legacy/components/Register/register.jsx');
        } else if (name === 'PayForm') {
            page = await import('./legacy/components/PayForm/payform.jsx');
        } else {
            page = await resolvePageComponent(
                `./pages/${name}.jsx`,
                import.meta.glob('./pages/**/*.jsx')
            );
        }

        // ✅ LAYOUT GLOBAL CORREGIDO: Ahora incluye Header y Footer
        page.default.layout = page.default.layout || ((page) => (
            <CartProvider>
                {/* min-vh-100 y flex-column aseguran que el footer se quede abajo si hay poco contenido */}
                <div className="App d-flex flex-column min-vh-100">
                    <main className="content-wrapper flex-grow-1">
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