import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleProductCard from '../Component/SingleProductCard'


function LipstickSingle() {
    const [lipstick, setLipstick] = useState({})
    const val = useParams()
    const GetLipstick = async () => {
        try {
            let res = await fetch(`https://myglammbackened.onrender.com/lipstick/${val.lipstick_id}`)
            let Data = await res.json();
            console.log(Data)
            setLipstick(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetLipstick() }, [])
    return (
        <> <SingleProductCard  item ={lipstick} /></>
    )
}
export default LipstickSingle