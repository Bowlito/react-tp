import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './contexts/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(

  //Stric mode à supprimer pour mettre en prod
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
