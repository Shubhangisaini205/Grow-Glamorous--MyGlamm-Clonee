// import React from 'react'
// import {
//     Flex,
//     Box,
//     Spacer,
//     Heading,
//     a,
//     VStack,
// } from '@chakra-ui/react'
// import { Link } from 'react-router-dom';
// import "./Menubar.css";

// function Menubar() {
//     return (
//         <Flex width='70%' margin='auto' >

//             <Box
//                 fontFamily={'sans-serif'}
//                 className="dropdown-Menu">
//                 <Link to={"/"}>
//                     <Box
//                         fontFamily={'sans-serif'}
//                         className="dropDown-button">
//                         HOME
//                     </Box>
//                 </Link>

//             </Box>
//             <Spacer />


//             {/* Makeup   */}
//             <Box className="dropdown-Menu">
//                 <Link>
//                     <Box
//                         fontFamily='sans-serif'
//                         className="dropDown-button">
//                         MAKEUP
//                     </Box>
//                 </Link>
//                 <Box className="dropDown-product" ml={-20} >
//                     <Box w={1100} >
//                         <Box>
//                             <Flex>
//                                 <VStack
//                                     fontFamily={'sans-serif'}
//                                     display='flex'
//                                     flexDirection='column'
//                                     justifyContent='start'
//                                     alignItems='flex-start'
//                                     lineHeight={0}
                                   
//                                 >
//                                     <Heading
//                                     ml={5}
//                                         mt={5}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >
//                                         LIPS
//                                     </Heading>

         
//                                     {/* <a>Lipstick</a> */}
                                    
//                                     <a>Lipstick</a>
//                                     <a>Crayon Lipstick</a>
//                                     <a>Liquid Lipstick</a>
//                                     <a>Hi-Shine Lipstick</a>
//                                     <a>Matte Lipstick</a>
//                                     <a>Lip Gloss</a>
//                                     <a>Lip Liner</a>
//                                     <a>Lip balm</a>
//                                     <a>Lip Glitter</a>
//                                     <a>Lip Stain</a>
//                                     <a>Lipstick Set</a>
//                                     <a>Lip Kit</a>
//                                     <a>Find Your Lipstick</a>
//                                 </VStack>


//                                 <VStack
//                                     fontFamily={'sans-serif'}
//                                     display='flex'
//                                     flexDirection='column'
//                                     justifyContent='start'
//                                     alignItems='flex-start'
//                                     lineHeight={0}
//                                     ml={100}

//                                 >
//                                     <Heading
//                                         mt={5}
//                                         ml={5}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >
//                                         FACE
//                                     </Heading>

//                                     <a>Fixing Powder</a>
//                                     <a>Primer</a>
//                                     <a>Concealer</a>
//                                     <a>Foundation</a>
//                                     <a>Compact Powder</a>
//                                     <a>Setting Powder</a>
//                                     <a>Banana Powder</a>
//                                     <a>Sindoor</a>
//                                     <a>Highlighter</a>
//                                     <a>Blush</a>
//                                     <a>Bronzer</a>
//                                     <a>Cheek Stain</a>
//                                 </VStack>

//                                 <VStack
//                                     fontFamily={'sans-serif'}
//                                     display='flex'
//                                     flexDirection='column'
//                                     justifyContent='start'
//                                     alignItems='flex-start'
//                                     lineHeight={0}
//                                     ml={100}

//                                 >
//                                     <Heading
//                                         mt={5}
//                                         ml={5}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >
//                                         EYES
//                                     </Heading>

//                                     <a>Eye Shadow</a>
//                                     <a>Eyeliner</a>
//                                     <a>Eyebrows</a>
//                                     <a>Glitter</a>
//                                     <a>Mascara</a>
//                                     <a>Kajal</a>
//                                     <a>Eye Combos</a>

//                                 </VStack>


//                                 <VStack
//                                     fontFamily={'sans-serif'}
//                                     display='flex'
//                                     flexDirection='column'
//                                     justifyContent='start'
//                                     alignItems='flex-start'
//                                     lineHeight={0}
//                                     ml={100}

//                                 >
//                                     <Heading
//                                         mt={5}
//                                         ml={5}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >
//                                         NAILS
//                                     </Heading>

//                                     <a> Nail Lacquer</a>
//                                     <a> Nail Polish</a>
//                                     <a>Matte Nail Polish</a>

//                                     <Heading
//                                         mt={5}
//                                         ml={30}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >
//                                         KITS AND COMBOS
//                                     </Heading>

//                                     <a>Makeup Kits</a>
//                                     <a>Bridal Makeup Kits</a>
//                                     <a>Makeup Gift Sets</a>

//                                     <Heading
//                                         mt={5}
//                                         ml={0}
//                                         fontSize={18}
//                                         color="#fe9696"
//                                     >MAKEUP ACCESSORIES
//                                     </Heading>
//                                     <a>Makeup Brushes</a>
//                                     <a>Eyeshadow Brushes</a>
//                                 </VStack>
//                             </Flex>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//             <Spacer />
//             {/* Haircare */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button">
//                     HAIRCARE
//                 </Box>
//                 <Box className="dropDown-product" ml={-180} >
//                     <Box width={1100}  >
//                         <Flex >
//                             <VStack
//                                 fontFamily={'sans-serif'}
//                                 display='flex' flexDirection='column'
//                                 justifyContent='start'
//                                 alignItems='flex-start'
//                                 ml={5}
//                                 lineHeight={0} >
//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >
//                                     HAIR CARE
//                                 </Heading>
//                                 <a>Shampoo</a>
//                                 <a>Conditioner</a>
//                                 <a>Hair Oil</a>
//                                 <a>Serum</a>
//                                 <a>Hair Mask</a>
//                                 <a>Combos</a>
//                             </VStack>
//                         </Flex>
//                     </Box>

//                 </Box>
//             </Box>
//             <Spacer />
//             {/* Skincare*/}
//             <Box className="dropdown-Menu">
//                 <Link>
//                     <Box
//                         fontFamily={'sans-serif'}
//                         className="dropDown-button">
//                         SKINCARE
//                     </Box>
//                 </Link>
//                 <Box className="dropDown-product" ml={-300} >
//                     <Box width={1100}>
//                         <Flex >
//                             <VStack
//                                 fontFamily={'sans-serif'}
//                                 display='flex' flexDirection='column'
//                                 justifyContent='start'
//                                 alignItems='flex-start'
//                                 ml={5}
//                                 lineHeight={0}

//                             >
//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696" >
//                                     SKIN CARE
//                                 </Heading>
//                                 <a>Moisturizer</a>
//                                 <a>Night Cream</a>
//                                 <a>Eye Cream</a>
//                                 <a>Body Lotion</a>
//                                 <a>Serum</a>
//                                 <a>Sunscreen</a>
//                                 <a>Skincare Kits</a>

//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >
//                                     CLEANSING PRODUCTS
//                                 </Heading>
//                                 <a>Cleanser</a>
//                                 <a>Face Wash</a>
//                                 <a>Exfoliator & Scrub</a>

//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >MASK
//                                 </Heading>
//                                 <a>Sheet Mask</a>
//                                 <a>Face Wash</a>
//                                 <a>Face Pack</a>
//                             </VStack>




//                         </Flex>
//                     </Box>

//                 </Box>
//             </Box>
//             <Spacer />
//             {/* Sanitizing care */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button">
//                     SANITIZING CARE
//                 </Box>
//                 <Box className="dropDown-product" ml={-400} >
//                     <Box width={1100}  >
//                         <Flex >
//                             <VStack
//                                 fontFamily={'sans-serif'}
//                                 display='flex' flexDirection='column'
//                                 justifyContent='start'
//                                 alignItems='flex-start'
//                                 ml={5}
//                                 lineHeight={0}

//                             >
//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >SANITIZING CARE
//                                 </Heading>
//                                 <a>Sanitizing Wipes</a>
//                                 <a>Hand Sanitizer</a>
//                                 <a>Sanitizing Kits</a>
//                                 <a>Sanitizing Spray</a>

//                             </VStack>

//                         </Flex>
//                     </Box>

//                 </Box>
//             </Box>
//             <Spacer />
//             {/* Collection                */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button">
//                     COLLECTION
//                 </Box>
//                 <Box className="dropDown-product" ml={-560} >
//                     <Box width={1100}  >
//                         <Flex >
//                             <VStack
//                                 display='flex' flexDirection='column'
//                                 justifyContent='start'
//                                 alignItems='flex-start'
//                                 ml={5}
//                                 lineHeight={0}
//                             >
//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >
//                                     SHOP BY COLLECTION
//                                 </Heading>
//                                 <a>Grow Glamorous</a>
//                                 <a>SUPERFOODS</a>
//                                 <a>Treat Love Care</a>
//                                 <a>Clean Beauty</a>
//                                 <a>POPxo</a>
//                                 <a>WIPEOUT</a>
//                                 <a>GLOW Iridescent Brightening Skincare</a>
//                                 <a>Manish Malhotra</a>
//                                 <a>YOUTHfull</a>
//                                 <a>LIT Collection</a>
//                                 <a>POSE</a>
//                                 <a>K.Play</a>
//                                 <a>Just Dropped</a>
//                             </VStack>
//                         </Flex>
//                     </Box>

//                 </Box>
//             </Box>
//             <Spacer />
//             {/* REWARDS   */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button"
//                 >
//                     REWARDS
//                 </Box>
//             </Box>
//             <Spacer />
//             {/* studio           */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button">
//                     OUR STUDIO</Box>
//                 <Box className="dropDown-product"
//                     ml={-800} >
//                     <Box width={1100}  >
//                         <Flex>
//                             <VStack
//                                 display='flex'
//                                 flexDirection='column'
//                                 justifyContent='start'
//                                 alignItems='flex-start'
//                                 ml={5}
//                                 lineHeight={0}
//                             >
//                                 <Heading
//                                     mt={5}
//                                     ml={5}
//                                     fontSize={18}
//                                     color="#fe9696"
//                                 >STUDIO
//                                 </Heading>
//                                 <a>Blogs</a>
//                             </VStack>
//                         </Flex>
//                     </Box>
//                 </Box>
//             </Box>
//             <Spacer />
//             {/* offers             */}
//             <Box className="dropdown-Menu">
//                 <Box
//                     fontFamily={'sans-serif'}
//                     className="dropDown-button">
//                     OFFERS
//                 </Box>

//             </Box>
//         </Flex>
//     )

// }

// export default Menubar
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
   Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import Signup from "../Component/Signup"
  import { Link } from 'react-router-dom';
  import { useContext } from 'react';
  import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';


   function Menubar() {
    const { isOpen, onToggle } = useDisclosure();
    const navigate= useNavigate();
    const {user,setUser,auth,setAuth} = useContext(CartContext)
    
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>


             <Image w={"40px"}h={"40px"} src="GGNew.png"></Image>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
           >
                  {auth?<Text color={"orange.700"}>Hey! {user.firstName}</Text>:<>
                  <Text  mt={2}>SignIn</Text><Link><Signup/></Link></>}
               
                
           
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}  mt={2} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} >
            <Popover trigger={'hover'} placement={'bottom-start'} >
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.to ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                 
                  >

                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, to, subLabel }) => {
    return (
      <Link
        to={to}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.500', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.500',backgroundColor:"pink.100"}}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.500'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, to }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          to={to ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.to}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  const NAV_ITEMS = [
    {
      label: 'HOME',
      to:"/"
    },
    {
      label: 'MAKEUP',
      to: '/makeup',
      children: [
        {
          label: 'Lipstick',
          to: '/lipstick',
        },
        {
          label: 'Eyeliner',
          
          to: '/eyeliner',
        },
        {
            label: 'Crayon Lipstick',
            to: '#',
          },
          {
            label: 'Hi-Shine Lisptick',
            to: '#',
          },
          {
            label: 'Lip Gloss',
            to: '#',
          },
          {
            label: 'Lip Kit',
            to: '#',
          },
      ],
    },
    {
        label: 'HAIR CARE',
        to: '/haircare',
        children: [
          {
            label: 'Shampoo',
            to: '/haircare',
          },
          {
            label: 'Conditioner',
            to: '#',
          },
          {
            label: 'Hair Oil',
            to: '#',
          },
          {
            label: 'Serum',
            to: '#',
          },
          {
            label: 'Hair Mask',
            to: '#',
          },
          {
            label: 'Combo',
            to: '#',
          },
        
        ]

    },
    {
        label: 'SKIN CARE',
        to: '/skincare',
        children: [
          {
            label: 'Moisturizer',
            to: '#',
          },
          {
            label: 'Night Cream',
            to: '#',
          },
          {
            label: 'Eye Cream',
            to: '#',
          },
          {
            label: 'Body Lotion',
            to: '#',
          },
          {
            label: 'Serum',
            to: '#',
          },
          {
            label: 'Sunscreen',
            to: '#',
          },
          {
            label: 'SkinCare kit',
            to: '#',
          },
          
        
        ]

    },
    {
        label: 'SANITIZING CARE',
        children: [
            {
                label: 'Sainitizing Wipes',
                to: '#',
              },
              {
                label: 'Hand Sanitizer',
                to: '#',
              },
              {
                label: 'Sanitizing kits',
                to: '#',
              },
              {
                label: 'Sanitizing Spray',
                to: '#',
              },
              
        
        ]

    },
    {
        label: 'COLLECTION',
        children: [
            {
                label: 'GLOW GLAMOROUS',
                to: '#',
              },
              {
                label: 'SUPERFOODS',
                to: '#',
              },
              {
                label: 'Clean Beauty',
                to: '#',
              },
              {
                label: 'WIPEOUT',
                to: '#',
              },
              {
                label: 'Treat Love Care',
                to: '#',
              },
              {
                label: 'Manish Malhotra',
                to: '#',
              },
              {
                label: 'Jsut Dropped',
                to: '#',
              },
        
        ]

    },
    {
        label: 'REWARDS',
       to: '#',
        
    },
    
  ];


  export default Menubar;