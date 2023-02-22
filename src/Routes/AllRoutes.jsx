import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Makeup from "../Pages/Makeup"
import Skincare from "../Pages/Skincare"
import NotFound from "../Pages/NotFound"

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/makeup" element={<Makeup/>} />
                <Route path="/skincare" element={<Skincare/>}/>
                <Route path= "*" element={<NotFound/>} />
                
            </Routes>

        </div>
    )
}

export default AllRoutes