
import React from 'react';
import {
    Box, IconButton, useBreakpointValue,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import "../Css/BestSellerCSS.css"
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { StarIcon } from "@chakra-ui/icons";
// Settings for the slider
const settings = {
    //   dots: true,
    arrows: false,
    //   fade: true,
    //   infinite: true,
    //   autoplay: true,
    //   speed: 500,
    //   autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
};


export default function BestSellerCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState();

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '10%', md: '20px' });

    // These are the images used in the slide
    const BestSeller = [
        {
            id: 1,
            image: "https://files.myglamm.com/site-images/400x400/OTP1.jpg",
            name: "MyGlamm LIT Liquid Matte Lipstick - OTP",
            subtitle: "Moringa Oil Enriched Matte Lipstick",
            avgrating: "4.9",
            totalratings: "17373",
            offerPrice: "249",
            actualPrice: "395"
        },
        {
            id: 2,
            image: "https://files.myglamm.com/site-images/400x400/PPY1_1.jpg",
            name: "Manish Malhotra Soft Matte Lipstick - Poppy Pink",
            subtitle: "Hydrating Long-wear Lipstick",
            avgrating: "4.9",
            totalratings: "923",
            offerPrice: "665",
            actualPrice: "799"
        },
        {
            id: 3,
            image: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
            name: "MyGlamm WIPEOUT Germ Killing Face Wash",
            subtitle: "Tea Tree Oil & Vitamin E-infused Face Wash",
            avgrating: "4.9",
            totalratings: "825",
            offerPrice: "83",
            actualPrice: "119"
        },
        {
            id: 5,
            image: "https://files.myglamm.com/site-images/400x400/MVS1_1.jpg",
            name: "Manish Malhotra Hi-Shine Lipstick - Mauve Struck",
            subtitle: "Lightweight, Long-wear Lipsticks",
            avgrating: "4.9",
            totalratings: "2465",
            offerPrice: "119",
            actualPrice: "395"
        },
        {
            id: 6,
            image: "https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg",
            name: "MyGlamm SUPERFOODS Kajal - Indigo - 0.35g",
            subtitle: "Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
            avgrating: 4.9,
            totalratings: "2465",
            offerPrice: "119",
            actualPrice: "395"
        },

        {
            id: 7,
            image: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
            name: "MyGlamm LIT Creamy Matte Lipstick - Manhattan",
            subtitle: "Precision Perfect Matte Slimstick",
            avgrating: "4.9",
            totalratings: "789",
            offerPrice: "399",
            actualPrice: "595"
        },
        {
            id: 9,
            image: "https://files.myglamm.com/site-images/400x400/Soft-Matte-post-1-Poppy-Pink.jpg",
            name: "Manish Malhotra Soft Matte Lipstick - Poppy Pink",
            subtitle: "Hydrating Long-wear Lipstick",
            avgrating: "4.9",
            totalratings: "584",
            offerPrice: "665",
            actualPrice: "950"
        },
        {
            id: 10,
            image: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg",
            name: "MyGlamm LIT Velvet Matte Liquid Lipstick - Rare",
            subtitle: "Hydrating, Velvet Matte Liquid Lipcolour",
            avgrating: "4.9",
            totalratings: "2524",
            offerPrice: "249",
            actualPrice: "395"
        },
        {
            id: 11,
            image: "https://files.myglamm.com/site-images/400x400/Body-wash_4.jpg",
            name: "MyGlamm WIPEOUT Germ Killing Body Wash",
            subtitle: "Tea Tree Oil-infused Skin-regenerating Body Wash",
            avgrating: "5",
            totalratings: "121",
            offerPrice: "169",
            actualPrice: "199"
        },
        {
            id: 12,
            image: "https://files.myglamm.com/site-images/400x400/ENV1.jpg",
            name: "Manish Malhotra Liquid Matte Lipstick - Envy Me",
            subtitle: "Long-stay Velvet Matte Lip Colour",
            avrating: "4.9",
            totalratings: "693",
            offerPrice: "696",
            actualPrice: "995"
        },

    ]



    return (
        <Box

            position={'relative'}
            height={'450px'}
            marginBottom="-50px"
            width={'full'}
            overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                color={"black"}
                bgColor={"white"}
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                // colorScheme="black"
                color={"black"}
                bgColor={"white"}
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {BestSeller.map((item, index) => (
                   
                       
                             <Link key={item.id}>
                        <Box
          cursor={"pointer"}
          className="box"
         
          >
            <Box
            className="hover Product"
          
            >
              <Image
                className="productImage"
                src={item.image}
              />
              <Box padding={"10px"} boxSizing="border-box" lineHeight={"35px"} bgColor="white" >
                <Text fontWeight={"bold"} fontSize="15px" className="Subtitle"  >
                  {item.name}
                </Text>
                <Box>
                  <Box>
                    <Text
                     className="Subtitle"
                    >
                      {item.subtitle}
                    </Text>
                  </Box>
                  <Flex justifyContent={"space-evenly"}>
                    <Text className='avgrating' fontWeight={"bold"}>
                      {item.avgrating}{" "}
                      <StarIcon fontSize={"17px"} color={"#ff9797"} />{" "}
                    </Text>
                    <Text
                      className="carouselTotalRating"
                    >
                      {item.totalratings} ratings
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    justifyContent={
                      item.actualPrice ? "space-evenly" : "center"
                    }
                    alignItems="center"
                  >
                    <Text fontWeight={"bold"} fontSize="18px">
                      ₹{item.offerPrice}
                    </Text>
                    <Text textDecoration={"line-through"} fontSize="14px">
                      {item.actualPrice && `₹${item.actualPrice}`}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
                </Link>
                
                          
                   
                ))}
                

            </Slider>
        </Box>
    );
}

