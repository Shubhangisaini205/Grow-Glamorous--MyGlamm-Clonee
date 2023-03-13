
import { Box, Button, SimpleGrid, Text, Spinner, Heading } from "@chakra-ui/react";
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
                error: false,
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
        default:
            throw new Error()
    }

};
function Lipstick() {
   
   
    const [state, dispatch] = useReducer(reducer, initialState)
    const [searchParams, setSearchParams] = useSearchParams();
    const [order, setOrder] = useState(searchParams.get("order") || "")
    

    let sort = "offerPrice"

   
    let apiUrl;

    (order) ?
        apiUrl = `https://myglammbackened.onrender.com/lipstick?_sort=${sort}&_order=${order}` :
        apiUrl = `https://myglammbackened.onrender.com/lipstick`

const GetLipstick=()=>{
    dispatch({type:"REQUEST"})
  axios.get(apiUrl).then((res)=>{
   console.log(res.data)
   dispatch({type:"SUCCESS",payload:res.data})
    
  }).catch((err)=>{
   dispatch({type:"FAILURE",payload:err})
  })
}

useEffect(()=>{
GetLipstick()
 let paramObj = {order}
 setSearchParams(paramObj)
},[order])
 


    return (
        
      <>
     
        <Box mb={10}
        p={4}
        bg='#fee8e8'
        boxShadow= " rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
       >
          <Text>
          HOME/LIPS
          </Text>
          </Box>
          { state.isLoading? <Spinner
           thickness='4px'
           speed='0.65s'
           emptyColor='gray.200'
           color='orange.500'
           size='xl'/>:
          <Box>
          <Box>
            
        <Heading 
        className="ProductPageHeading"
      
        >LIPSTICK</Heading>
        </Box>
        <Box className="sortingButtons" mt={10} >
        <Button colorScheme={"orange"}
        isDisabled={order=="asc"}
        className="sortByCostAsc"
        onClick={()=>setOrder("asc")}
        >
          Price Low to High ↑
        </Button>
        <Button colorScheme={"teal"} className="sortByCostDesc" m={2}
        isDisabled={order=="desc"}
        onClick = {()=>setOrder("desc")}
        >
         Price High to Low ↓
        </Button>
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
      </Box>
      }
   
      </>

    )
}
export default Lipstick