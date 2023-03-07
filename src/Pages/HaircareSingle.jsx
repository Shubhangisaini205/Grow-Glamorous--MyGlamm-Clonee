import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleProductCard from '../Component/SingleProductCard'


function HairCareSingle() {
    const [hairCare, setHairCare] = useState({})
    const val = useParams()
    const GetHairCare = async () => {
        try {
            let res = await fetch(`https://myglammbackened.onrender.com/shampoo/${val.hairCare_id}`)
            let Data = await res.json();
            console.log(Data)
            setHairCare(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetHairCare() }, [])
    return (
        <>
            <SingleProductCard item = {hairCare} />
        </>
    )
}

export default HairCareSingle