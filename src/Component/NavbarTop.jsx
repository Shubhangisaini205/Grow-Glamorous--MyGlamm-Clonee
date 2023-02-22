import React from 'react'
import { Box, Flex, Heading, Text, Image, Spacer } from '@chakra-ui/react'
import { AiFillGift } from "react-icons/ai";

function NavbarTop() {
  return (
    <div>
      <Flex bg="pink" justifyContent={'space-around'}>
        <Flex bg="red" w="50%" justifyContent={'space-around'}>
         <Flex>
         <Box>
            <AiFillGift size={20} />
          </Box>
          <Box>
              <Text fontSize={15}>
            LIt Liquid Matte Lipstick + LIT Velvet Matte Liquid Lipstick GET this @Re 1
          </Text>
          </Box>
         </Flex>
         

          <Box> <Heading size={3}>
            SHOP NOW
          </Heading></Box>


        </Flex>

        <Flex>
          <Image width={"20px"} height={"20px"}src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png"></Image>
          <Text >MyHeaven STORE</Text>
        </Flex>



      </Flex>
    </div>
  )
}

export default NavbarTop