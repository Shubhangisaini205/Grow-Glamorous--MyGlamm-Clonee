
import React from 'react'
import {
    Box,
    Flex,
    Image,
    Link,
    Spacer,
    Text
  } from '@chakra-ui/react';
  import { AiFillGift} from "react-icons/ai";
 const NavbarTop = () => {
  return (
    <Box  width='100%' bg='#fee8e8' height='50px' display='flex' justifyContent='center' alignItems='center' pl='-3px' >       
        <Flex width='70%' margin='auto'  >
            <Box>
                <AiFillGift  style={{color: 'orange', border:'1px', fontSize: '24px'}} />
            </Box>

            <Box className="topnavoffer" fontFamily='sans-serif' color={"orange.600"} fontWeight='500' fontSize='13px' pl='13px' >  
            LIt Liquid Matte Lipstick + LIT Velvet Matte Liquid Lipstick GET this @Re 1
            </Box>

            <Box  fontFamily='sans-serif'  color= '#ec4899' fontSize='13px' pl='10px' >
                SHOP NOW
            </Box>
            <Spacer/>

            <Link href='https://www.myglamm.com/store-locator' >
            <Box fontFamily='sans-serif'  fontSize='13px'  >
         
                <Flex fontSize={"13px"} width={"150px"} gap={3}><Image width={"20px"} 
                 color="orange" src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png"></Image>
                 
                <Text color={"orange.900"} fontWeight={'bold'} mr={-10}>MY GG STORE</Text></Flex>
            </Box></Link>
        </Flex>       
    </Box>
  )
}
export default NavbarTop

