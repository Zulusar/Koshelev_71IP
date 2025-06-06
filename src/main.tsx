import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './1/1_7_4/style.css'
import App from './1/1_7_4/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
