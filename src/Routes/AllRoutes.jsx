import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from "../Pages/Home"
import Makeup from "../Pages/Makeup"
import Skincare from "../Pages/Skincare"
import NotFound from "../Pages/NotFound"
import HairCare from '../Pages/HairCare'
import MakeupSingle from '../Pages/MakeupSingle'
import HairCareSingle from '../Pages/HaircareSingle'
import Bag from '../Pages/Bag'
import CheckOut from '../Pages/CheckOut'
import Lipstick from '../Pages/Lipstick'
import Eyeliner from '../Pages/Eyeliner'
import LipstickSingle from '../Pages/LipstickSinglePage'
import EyelinerSingle from "../Pages/EyelinerSinglePage"
import SkinCareSingle from '../Pages/SkinCareSinglePage'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/makeup" element={<Makeup/>} />
                <Route path="/makeup/:makeup_id" element={<MakeupSingle/>}/>
                <Route path="/skincare" element={<Skincare/>}/>
                <Route path="/skincare/:skincare_id" element={<SkinCareSingle/>}/>
                <Route path="/haircare" element={<HairCare/>}/>
                <Route path="/haircare/:hairCare_id" element={<HairCareSingle/>}/>
                <Route path="/lipstick" element={<Lipstick/>}/>
                <Route path="/lipstick/:lipstick_id" element={<LipstickSingle/>}/>
                <Route path="/eyeliner" element={<Eyeliner/>}/>
                <Route path="/eyeliner/:eyeliner_id" element={<EyelinerSingle/>}/>
                <Route path="/bag" element={<Bag/>}/>
                <Route path="/checkout" element={<PrivateRoute><CheckOut/></PrivateRoute>
                }/>
                <Route path= "*" element={<NotFound/>} />
                
            </Routes>

        </div>
    )
}

export default AllRoutes