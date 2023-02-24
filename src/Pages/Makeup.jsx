
import { Box, Button, Center, Img, SimpleGrid, Text, VStack, Select, Spinner, Heading } from "@chakra-ui/react";
import React, { useContext, useReducer } from "react"
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import ProductCard from "../Component/ProductCard";
import { CartContext } from "../Context/CartContextProvider";


const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const reducer = (state, action) => {

    switch (action.type) {
        case "REQUEST": {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }
        case "SUCCESS": {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false,
            }
        }
        case "FAILURE": {
            return {
                ...state,
                data: [],
                isLoading: false,
                error: true,

            }
        }
    }

};
function Makeup() {
   
   
    const [state, dispatch] = useReducer(reducer, initialState)
    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState("asc")
    const [filter, setFilter] = useState("")

    let sort = "offerPrice"

    // let apiUrl;

    // (order && filter) ?
    //     apiUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/skincare?_sort=${sort}&_order=${order}&breed=${filter}` :
    //     apiUrl = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/skincare?_sort=${sort}&_order=${order}`


        
//  const GetSkincare=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/skincare`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }
const GetMakeup=()=>{
    dispatch({type:"REQUEST"})
  axios.get(`http://localhost:8080/makeup`).then((res)=>{
   console.log(res.data)
   dispatch({type:"SUCCESS",payload:res.data})
    
  }).catch((err)=>{
   dispatch({type:"FAILURE",payload:err})
  })
}


// const GetLipstick=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/lipstick`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }
// const GetShampoo=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/shampoo`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }
// const GetSunsScreen=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/sunscreen`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }
// const GetEyeliner=()=>{
//     dispatch({type:"REQUEST"})
//   axios.get(`http://localhost:8080/eyeliner`).then((res)=>{
//    console.log(res.data)
//    dispatch({type:"SUCCESS",payload:res.data})
    
//   }).catch((err)=>{
//    dispatch({type:"FAILURE",payload:err})
//   })
// }

useEffect(()=>{
GetMakeup()
 let paramObj = {order}
 setSearchParams(paramObj)
},[order])
 


    return (
      <>
        <Box mb={10}
        p={4}
        boxShadow= " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
       >
          <Text>
          HOME/MAKEUP
          </Text>
          </Box>
        <Box>
        <Heading 
        className="ProductPageHeading"
      
        >MAKEUP</Heading>
        </Box>
       
       <SimpleGrid
        className="main_container"
        w="85%"
        m={'auto'}
        mt={10}
         columns={{sm:2,md:2,lg:3,base:1}} 
         spacing={10}>
      {state.data.map((el)=> <ProductCard key = {el.id} item ={el} />)}
      </SimpleGrid>
   
      </>

    )
}
export default Makeup