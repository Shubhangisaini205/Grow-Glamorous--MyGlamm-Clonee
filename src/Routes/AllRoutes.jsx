import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/Home"
import Makeup from "../Pages/Makeup"
import Skincare from "../Pages/Skincare"
import NotFound from "../Pages/NotFound"
import HairCare from '../Pages/HairCare'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/makeup" element={<Makeup/>} />
                <Route path="/skincare" element={<Skincare/>}/>
                <Route path="/haircare" element={<HairCare/>}/>
                <Route path= "*" element={<NotFound/>} />
                
            </Routes>

        </div>
    )
}

export default AllRoutes