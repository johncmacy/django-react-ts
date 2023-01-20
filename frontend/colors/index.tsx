import React from 'react'
import { createRoot } from 'react-dom/client'
import AppIndex from './AppIndex'

createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <AppIndex title="Rah!" />
  </React.StrictMode>
)
