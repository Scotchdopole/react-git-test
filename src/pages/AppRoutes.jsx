import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VtipnaStranka from './VtipnaStranka/VtipnaStranka'
import RetarPage from './RetarPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/vtipnastranka' element={<VtipnaStranka/>} />
            <Route path='/retarpage' element={<RetarPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
