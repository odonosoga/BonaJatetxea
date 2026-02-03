import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './legacy/i18n.js'; // ← Tu i18n existente
import { I18nextProvider } from 'react-i18next';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        // Register desde Legacy (mantenido)
        if (name === 'Register') {
            return import('./legacy/components/Register/register.jsx');
        }

        // Tus páginas en pages/
        return resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob('./pages/**/*.jsx'),
        );
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StrictMode>
                <I18nextProvider i18n={i18n}>
                    <App {...props} />
                </I18nextProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
