
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppIndex from './AppIndex'
import AppLayout from './AppLayout'
import EventDetail from './event/EventDetail'

createRoot(
  document.getElementById('root')
).render(
  <Router basename="core">
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route path="" element={<AppIndex />}>
          <Route path=":eventId" element={<EventDetail />} />
        </Route>
      </Route>
    </Routes>
  </Router >
)
