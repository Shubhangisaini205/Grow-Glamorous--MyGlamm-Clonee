import React from 'react'
import {
    Flex,
    Box,
    Spacer,
    Heading,
    a,
    VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import "./Menubar.css";

function Menubar() {
    return (
        <Flex width='70%' margin='auto' >

            <Box
                fontFamily={'sans-serif'}
                className="dropdown-Menu">
                <Link to={"/"}>
                    <Box
                        fontFamily={'sans-serif'}
                        className="dropDown-button">
                        HOME
                    </Box>
                </Link>

            </Box>
            <Spacer />


            {/* Makeup   */}
            <Box className="dropdown-Menu">
                <Link>
                    <Box
                        fontFamily='sans-serif'
                        className="dropDown-button">
                        MAKEUP
                    </Box>
                </Link>
                <Box className="dropDown-product" ml={-20} >
                    <Box w={1100} >
                        <Box>
                            <Flex>
                                <VStack
                                    fontFamily={'sans-serif'}
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='start'
                                    alignItems='flex-start'
                                    lineHeight={0}
                                   
                                >
                                    <Heading
                                    ml={5}
                                        mt={5}
                                        fontSize={18}
                                        color="#fe9696"
                                    >
                                        LIPS
                                    </Heading>

         
                                    {/* <a>Lipstick</a> */}
                                    
                                    <a>Lipstick</a>
                                    <a>Crayon Lipstick</a>
                                    <a>Liquid Lipstick</a>
                                    <a>Hi-Shine Lipstick</a>
                                    <a>Matte Lipstick</a>
                                    <a>Lip Gloss</a>
                                    <a>Lip Liner</a>
                                    <a>Lip balm</a>
                                    <a>Lip Glitter</a>
                                    <a>Lip Stain</a>
                                    <a>Lipstick Set</a>
                                    <a>Lip Kit</a>
                                    <a>Find Your Lipstick</a>
                                </VStack>


                                <VStack
                                    fontFamily={'sans-serif'}
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='start'
                                    alignItems='flex-start'
                                    lineHeight={0}
                                    ml={100}

                                >
                                    <Heading
                                        mt={5}
                                        ml={5}
                                        fontSize={18}
                                        color="#fe9696"
                                    >
                                        FACE
                                    </Heading>

                                    <a>Fixing Powder</a>
                                    <a>Primer</a>
                                    <a>Concealer</a>
                                    <a>Foundation</a>
                                    <a>Compact Powder</a>
                                    <a>Setting Powder</a>
                                    <a>Banana Powder</a>
                                    <a>Sindoor</a>
                                    <a>Highlighter</a>
                                    <a>Blush</a>
                                    <a>Bronzer</a>
                                    <a>Cheek Stain</a>
                                </VStack>

                                <VStack
                                    fontFamily={'sans-serif'}
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='start'
                                    alignItems='flex-start'
                                    lineHeight={0}
                                    ml={100}

                                >
                                    <Heading
                                        mt={5}
                                        ml={5}
                                        fontSize={18}
                                        color="#fe9696"
                                    >
                                        EYES
                                    </Heading>

                                    <a>Eye Shadow</a>
                                    <a>Eyeliner</a>
                                    <a>Eyebrows</a>
                                    <a>Glitter</a>
                                    <a>Mascara</a>
                                    <a>Kajal</a>
                                    <a>Eye Combos</a>

                                </VStack>


                                <VStack
                                    fontFamily={'sans-serif'}
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='start'
                                    alignItems='flex-start'
                                    lineHeight={0}
                                    ml={100}

                                >
                                    <Heading
                                        mt={5}
                                        ml={5}
                                        fontSize={18}
                                        color="#fe9696"
                                    >
                                        NAILS
                                    </Heading>

                                    <a> Nail Lacquer</a>
                                    <a> Nail Polish</a>
                                    <a>Matte Nail Polish</a>

                                    <Heading
                                        mt={5}
                                        ml={30}
                                        fontSize={18}
                                        color="#fe9696"
                                    >
                                        KITS AND COMBOS
                                    </Heading>

                                    <a>Makeup Kits</a>
                                    <a>Bridal Makeup Kits</a>
                                    <a>Makeup Gift Sets</a>

                                    <Heading
                                        mt={5}
                                        ml={0}
                                        fontSize={18}
                                        color="#fe9696"
                                    >MAKEUP ACCESSORIES
                                    </Heading>
                                    <a>Makeup Brushes</a>
                                    <a>Eyeshadow Brushes</a>
                                </VStack>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Spacer />
            {/* Haircare */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button">
                    HAIRCARE
                </Box>
                <Box className="dropDown-product" ml={-180} >
                    <Box width={1100}  >
                        <Flex >
                            <VStack
                                fontFamily={'sans-serif'}
                                display='flex' flexDirection='column'
                                justifyContent='start'
                                alignItems='flex-start'
                                ml={5}
                                lineHeight={0} >
                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >
                                    HAIR CARE
                                </Heading>
                                <a>Shampoo</a>
                                <a>Conditioner</a>
                                <a>Hair Oil</a>
                                <a>Serum</a>
                                <a>Hair Mask</a>
                                <a>Combos</a>
                            </VStack>
                        </Flex>
                    </Box>

                </Box>
            </Box>
            <Spacer />
            {/* Skincare*/}
            <Box className="dropdown-Menu">
                <Link>
                    <Box
                        fontFamily={'sans-serif'}
                        className="dropDown-button">
                        SKINCARE
                    </Box>
                </Link>
                <Box className="dropDown-product" ml={-300} >
                    <Box width={1100}>
                        <Flex >
                            <VStack
                                fontFamily={'sans-serif'}
                                display='flex' flexDirection='column'
                                justifyContent='start'
                                alignItems='flex-start'
                                ml={5}
                                lineHeight={0}

                            >
                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696" >
                                    SKIN CARE
                                </Heading>
                                <a>Moisturizer</a>
                                <a>Night Cream</a>
                                <a>Eye Cream</a>
                                <a>Body Lotion</a>
                                <a>Serum</a>
                                <a>Sunscreen</a>
                                <a>Skincare Kits</a>

                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >
                                    CLEANSING PRODUCTS
                                </Heading>
                                <a>Cleanser</a>
                                <a>Face Wash</a>
                                <a>Exfoliator & Scrub</a>

                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >MASK
                                </Heading>
                                <a>Sheet Mask</a>
                                <a>Face Wash</a>
                                <a>Face Pack</a>
                            </VStack>




                        </Flex>
                    </Box>

                </Box>
            </Box>
            <Spacer />
            {/* Sanitizing care */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button">
                    SANITIZING CARE
                </Box>
                <Box className="dropDown-product" ml={-400} >
                    <Box width={1100}  >
                        <Flex >
                            <VStack
                                fontFamily={'sans-serif'}
                                display='flex' flexDirection='column'
                                justifyContent='start'
                                alignItems='flex-start'
                                ml={5}
                                lineHeight={0}

                            >
                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >SANITIZING CARE
                                </Heading>
                                <a>Sanitizing Wipes</a>
                                <a>Hand Sanitizer</a>
                                <a>Sanitizing Kits</a>
                                <a>Sanitizing Spray</a>

                            </VStack>

                        </Flex>
                    </Box>

                </Box>
            </Box>
            <Spacer />
            {/* Collection                */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button">
                    COLLECTION
                </Box>
                <Box className="dropDown-product" ml={-560} >
                    <Box width={1100}  >
                        <Flex >
                            <VStack
                                display='flex' flexDirection='column'
                                justifyContent='start'
                                alignItems='flex-start'
                                ml={5}
                                lineHeight={0}
                            >
                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >
                                    SHOP BY COLLECTION
                                </Heading>
                                <a>Grow Glamorous</a>
                                <a>SUPERFOODS</a>
                                <a>Treat Love Care</a>
                                <a>Clean Beauty</a>
                                <a>POPxo</a>
                                <a>WIPEOUT</a>
                                <a>GLOW Iridescent Brightening Skincare</a>
                                <a>Manish Malhotra</a>
                                <a>YOUTHfull</a>
                                <a>LIT Collection</a>
                                <a>POSE</a>
                                <a>K.Play</a>
                                <a>Just Dropped</a>
                            </VStack>
                        </Flex>
                    </Box>

                </Box>
            </Box>
            <Spacer />
            {/* REWARDS   */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button"
                >
                    REWARDS
                </Box>
            </Box>
            <Spacer />
            {/* studio           */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button">
                    OUR STUDIO</Box>
                <Box className="dropDown-product"
                    ml={-800} >
                    <Box width={1100}  >
                        <Flex>
                            <VStack
                                display='flex'
                                flexDirection='column'
                                justifyContent='start'
                                alignItems='flex-start'
                                ml={5}
                                lineHeight={0}
                            >
                                <Heading
                                    mt={5}
                                    ml={5}
                                    fontSize={18}
                                    color="#fe9696"
                                >STUDIO
                                </Heading>
                                <a>Blogs</a>
                            </VStack>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Spacer />
            {/* offers             */}
            <Box className="dropdown-Menu">
                <Box
                    fontFamily={'sans-serif'}
                    className="dropDown-button">
                    OFFERS
                </Box>

            </Box>
        </Flex>
    )

}

export default Menubar