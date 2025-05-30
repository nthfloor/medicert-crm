
import { createRoot } from 'react-dom/client'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    redirectUri={window.location.origin}
    logoutUri={window.location.origin}
  >
    <App />
  </KindeProvider>
);
