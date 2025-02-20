import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VtipnaStranka from './VtipnaStranka/VtipnaStranka'
import MilujuJirku from './MilujuJirku/MilujuJirku'
import Retar from './Retar/Retar'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/vtipnastranka' element={<VtipnaStranka/>} />
            <Route path='/milujujirku' element={<MilujuJirku/>} />
            <Route path='/retar' element={<Retar/>} />
        </Routes>
    </BrowserRouter>
  )
}
