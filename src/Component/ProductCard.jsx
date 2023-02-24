import React, { useState,useContext } from 'react'
import {Divider,ButtonGroup,Button,Image, Card,Text, CardBody, CardFooter,Heading,Stack, Flex, Spacer} from '@chakra-ui/react'

import { Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContextProvider'


function ProductCard({item}) {
  // const[add,setAdd]= useState(false)
 const {img,name,description,offerPrice,actualPrice,id}=item
 const {HandleAddToBag,bag} = useContext(CartContext)
  



  return (
    <Card maxW='sm'>
    <CardBody bg={"whiteSmoke"}>
     <Link to={`./${id}`}> <Image
      className='ProductCardImage'
        src={img}
        alt={name}
        borderRadius='lg'
      /></Link>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
         {description}
        </Text>
        <Spacer/>
        <Flex gap={2}>
        <Text color='black' fontSize='2xl'>
        ₹{offerPrice}
        </Text>
        
        <Text color='grey' decoration={'line-through'} fontSize='2xl'>
        {actualPrice? `₹${actualPrice}`:""}
        </Text>
        </Flex>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter bg={"whiteSmoke"}>
      <ButtonGroup spacing='2'>
        <Button bg='pink' color={"pink.900"}
        onClick={()=>
         HandleAddToBag(item)}
         >
          ADD TO BAG
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductCard