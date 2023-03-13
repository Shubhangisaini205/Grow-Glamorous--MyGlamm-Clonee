import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleProductCard from '../Component/SingleProductCard'


function SkinCareSingle() {
    const [skincare, setSkincare] = useState({})
    const val = useParams()
    const GetSkincare= async () => {
        try {
            let res = await fetch(`https://myglammbackened.onrender.com/skincare/${val.skincare_id}`)
            let Data = await res.json();
            console.log(Data)
            setSkincare(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetSkincare() }, [])
    return (
        <> <SingleProductCard  item ={skincare} /></>
    )
}
export default SkinCareSingle