import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createPinia } from 'pinia';
import { PiniaPluginPersistedstate } from 'pinia-plugin-persist';
import './index.css';
import { router } from './router';

const pinia = createPinia();
pinia.use(PiniaPluginPersistedstate);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
