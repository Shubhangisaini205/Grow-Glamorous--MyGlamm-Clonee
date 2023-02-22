import React from 'react'
import Carousel from './Carousel1'
import Navbar from './Navbar'
import './Landing.css'
import Footer from './Footer'

function LandingPage() {
    return (
        <div>
            {/* <Navbar /> */}
            <img src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif" alt="gif" />
            <br/>
            <Carousel />
            <br/>
            <div>
                <img style={{ margin: "auto" }} width="85%" src="https://files.myglamm.com/site-images/original/D2C-499-2240x614.jpg" alt="light pink" />
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
                        <img src="https://files.myglamm.com/site-images/original/SKin-1-2.png" alt="" />
                        <h4>Skin</h4>
                    </div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/original/Lips-3.png" alt="" />
                        <h4>Lips</h4>
                    </div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg" alt="" />
                        <h4>Hairs</h4>
                    </div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/original/Eyes-4.png" alt="" />
                        <h4>Eyes</h4>
                    </div>
                    <div>
                        <img src="https://files.myglamm.com/site-images/original/Face-5.png" alt="" />
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

           
<Footer/>

        </div>
    )
}

export default LandingPage