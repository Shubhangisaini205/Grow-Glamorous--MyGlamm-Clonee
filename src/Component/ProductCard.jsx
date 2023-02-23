import React from 'react'
import {Divider,ButtonGroup,Button,Image, Card,Text, CardBody, CardFooter,Heading,Stack, Flex, Spacer} from '@chakra-ui/react'
import { transform } from 'framer-motion'
function ProductCard({img,name,description,offerPrice,actualPrice}) {
  return (
    <Card maxW='sm'>
    <CardBody bg={"whiteSmoke"}>
      <Image
      className='ProductCardImage'
        src={img}
        alt={name}
        borderRadius='lg'
      />
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
        <Button bg='pink' color={"pink.900"}>
          Add to bag
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default ProductCard