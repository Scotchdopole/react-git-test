import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VtipnaStranka from './VtipnaStranka/VtipnaStranka'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/vtipnastranka' element={<VtipnaStranka/>} />
        </Routes>
    </BrowserRouter>
  )
}
