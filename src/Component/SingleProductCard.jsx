import React from 'react'
import { Divider, ButtonGroup, Button, Image, Card, Text, CardBody, CardFooter, Heading, Stack, Flex, Spacer, Box, SimpleGrid, HStack, Center, transform } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingBag } from "react-icons/fa";
import {
    faPinterestP,
    faFacebookF,
    faTwitter,

} from "@fortawesome/free-brands-svg-icons";

function SingleProductCard({ img, name, description, offerPrice, actualPrice, id }) {
    return (


        <Box w="80%" m={'auto'} mt="5%"
        >
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 2 }}>
                <Box
                border={"1px solid black"}
                >
                    <Box m={"5%"}
                     >
                        <Image
                       boxShadow={ "rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                            h="400px"
                            src={img}
                            alt={name}
                            borderRadius='lg'
                        />

                        <HStack ml={"30%"}mt={10} gap={6}>
                            <FontAwesomeIcon icon={faFacebookF} size="xl" />
                            
                            <FontAwesomeIcon icon={faTwitter} size="xl" />
                            <FontAwesomeIcon icon={faPinterestP} size="xl" />
                        </HStack>

                    </Box>
                </Box>


                <Box>
                    <Stack mt={"5%"} >
                        <Heading fontSize="xl">{name}</Heading>
                        <Spacer />
                        <Text>{description}</Text>
                        <Spacer />
                        <Flex  justifyContent="center">
                            <Text className='avgrating' fontWeight={"bold"}>
                                4.8 {" "}
                                <StarIcon fontSize={"17px"} color={"#ff9797"} />{" "}
                                ratings
                            </Text>
                        </Flex>
                        <Spacer />
                        <Flex
                            justifyContent={'center'}
                            gap={6}
                            alignItems="center"
                        >
                            <Text fontWeight={"bold"} fontSize={35}>
                                ₹{offerPrice}
                            </Text>
                            <Text 
                            textDecoration={"line-through"} fontSize={35}
                            color={"gray.500"}
                             >
                                {actualPrice && `₹${actualPrice}`}
                            </Text>
                        </Flex>
                        <Center>
                        <Button
                w={120}
                
                 bg='pink' 
                 color={"pink.900"}>
                    <Flex gap={2}>
                    <FaShoppingBag  color={"pink.900"}/>
                    <Text>Add to bag</Text>
                    </Flex>
                    
                </Button>
                </Center>
                        <Box bg={'gray.100'}>
                    <Text color="black">
                    You will receive 10% cashback  as GG POINTS on this purchase
                    </Text>
                </Box>
                    </Stack>
                </Box>

                

               
            </SimpleGrid>

        </Box>
       
    )
}

export default SingleProductCard