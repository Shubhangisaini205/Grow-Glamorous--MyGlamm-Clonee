import React from 'react'
import { Box,Input } from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'
function SearchBar() {
  return (
    <Box className='media' display="flex" border={"1px solid #e8e8e9"} borderRadius="5px" w="80%">
    <Box w={12}  bgColor="#f5f5f6">
    <SearchIcon 
       backgroundColor='rgb(245,245,246)' 
       p='1px' 
       h='40px' 
       width={"25px"}
       borderRadius='6px 0px 0px 6px' 
       borderRight='none' 
       color={"#c3c5cc"}
     /> 
     </Box>   
     
     <Input 
       variant='unstyled' 
       backgroundColor='rgb(245,245,246)'
       borderLeft='none'
       borderRadius='0px 6px 6px 0px'
       fontWeight={"400"} 
       color='#333333'
    w="100%"
       placeholder='Find Lipstick, Eyeliner, Makeup Tutorial, etc'
     />
     </Box>
  )
}

export default SearchBar