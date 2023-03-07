import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleProductCard from '../Component/SingleProductCard'


function MakeupSingle() {
    const [makeup, setMakeup] = useState({})
    const val = useParams()
    const GetMakeup = async () => {
        try {
            let res = await fetch(`https://myglammbackened.onrender.com/makeup/${val.makeup_id}`)
            let Data = await res.json();
            console.log(Data)
            setMakeup(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetMakeup() }, [])
    return (
        <> <SingleProductCard  item ={makeup} /></>
    )
}
export default MakeupSingle