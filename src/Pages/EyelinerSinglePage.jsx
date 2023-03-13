import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SingleProductCard from '../Component/SingleProductCard'


function EyelinerSingle() {
    const [eyeliner, setEyeliner] = useState({})
    const val = useParams()
    const GetEyeliner = async () => {
        try {
            let res = await fetch(`https://myglammbackened.onrender.com/eyeliner/${val.eyeliner_id}`)
            let Data = await res.json();
            console.log(Data)
            setEyeliner(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { GetEyeliner() }, [])
    return (
        <> <SingleProductCard  item ={eyeliner} /></>
    )
}
export default EyelinerSingle