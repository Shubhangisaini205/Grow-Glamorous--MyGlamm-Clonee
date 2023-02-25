import React from 'react'
import { Box, AspectRatio } from '@chakra-ui/react'
import Carousel1 from '../Component/Carousel1'
import Navbar from '../Component/Navbar'
import '../Css/Home.css'
import Footer from '../Component/Footer'
import BestSellerCarousel from '../Component/BestSellerCarousel'
import Menubar from '../Component/Menubar'
import Carousel2 from '../Component/Carousel2'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <div>

      {/* <Menubar/> */}
      <img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif" alt="gif" />
      <br />
      <Carousel1 />
      <br />
      <div>
        <img style={{ margin: "auto" }} width="85%" src="https://files.myglamm.com/site-images/original/2240x614-7_3.gif" alt="light pink" />
      </div>
      <br />
      <div>
        <img style={{ margin: "auto" }} width="85%" src="https://files.myglamm.com/site-images/original/SI2240x614.jpg" alt="" />
      </div>
      {/* spotlight */}
      <div className='spotlight' >
        <h1>IN THE SPOTLIGHT</h1>

        <div >
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/SSR700x488_8.jpg" alt="" />
          </div>
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/ITS2-Desktop-700-x-488.jpg" alt="" />
          </div>
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/ITS3-700x488_1.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* latest glam launches */}
      <div className='latest-glam-launches' >

        <h1>LATEST GLAM LAUNCHES</h1>

        <div >
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/xoxo700x488.jpg" alt="" />
          </div>
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/TIR700x488.jpg" alt="" />
          </div>
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/popxo700x488_5.gif" alt="" />
          </div>
          <div>
            <img width="100%" src="https://files.myglamm.com/site-images/original/Latest-Glamm-Launches-700x488.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* shop from categories */}
      <div className='shop-from-category'>

        <h1>SHOP BY CATEGORY</h1>
        <div>
          <div>
            <Link to="/skincare">
            <img src="https://files.myglamm.com/site-images/original/SKin-1-2.png" alt="" /></Link>
            <h4>Skin</h4>
          </div>
          <div>
          <Link to="/lipstick">
            <img src="https://files.myglamm.com/site-images/original/Lips-3.png" alt="" /></Link>
            <h4>Lips</h4>
          </div>
          <div>
          <Link to="/haircare">
            <img src="https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg" alt="" /></Link>
            <h4>Hairs</h4>
          </div>
          <div>
          <Link to="/eyeliner">
            <img src="https://files.myglamm.com/site-images/original/Eyes-4.png" alt="" /></Link>
            <h4>Eyes</h4>
          </div>
          <div>
          <Link to="/makeup">
            <img src="https://files.myglamm.com/site-images/original/Face-5.png" alt="" /></Link>
            <h4>Face</h4>
          </div>
          <div>
            <img src="https://files.myglamm.com/site-images/original/Nails-1.png" alt="" />
            <h4>Nails</h4>
          </div>
          <div>
            <img src="https://files.myglamm.com/site-images/original/App-PersonalCare_2.png" alt="" />
            <h4>Sanitizing Care</h4>
          </div>
          <div>
            <img src="https://files.myglamm.com/site-images/original/Bath.png" alt="" />
            <h4>Bath & Body</h4>
          </div>
        </div>
      </div>

      <br />
      {/* Best Seller */}
      <div>
        <h1>BEST SELLER</h1>
        <BestSellerCarousel />
        <Carousel2 />
      </div>
      
      <div>
        <img style={{ margin: "auto", marginTop:"8%" }} width="85%" src="https://files.myglamm.com/site-images/original/RE2240x614_2.jpg" alt="" />
      </div>
      <br />
      
      <div>
        <img width="100%" src="https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png" alt="" />
      </div>
      <br />
      <div>
        <img style={{ margin: "auto" }} width="85%" src="https://files.myglamm.com/site-images/original/Row-43-Disclaimer-Strip-3360x220.png" alt="" />
      </div>
      


      <Box mt={"5%"} className="flexmedia" bg={"black"} pt={20} pb={20} >
        <AspectRatio maxW="100%" height="750px" ratio={1}>
          <iframe
            src="https://www.youtube.com/embed/GdcxfyKNiDg?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=GdcxfyKNiDg"
            width="560"
            height="315"
            title="Shraddha Kapoor Wants You To #TellMyGlammWhatYouWant | MyGlamm TV Ad"
            frameBorder="0"
          ></iframe>
        </AspectRatio>
      </Box>



    </div>
  )
}

export default HomePage