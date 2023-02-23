
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./Navbar.css";
import NavbarTop from "./NavbarTop"
import SearchBar from "./SearchBar";
import { FaShoppingBag,FaUser } from "react-icons/fa";
import Menubar from "./Menubar";

function Navbar() {
    return (
        <Box className="navbar-sticky">
        <div className="main-nav">

          {/* mid navbar */}
           <nav className="mid-nav">
            <div className="logo">
            <h2>
            <span>G</span>row
            <span> G</span>lamorous
          </h2>

            </div>
            {/* search bar */}
            <div className="search">
                 <SearchBar/>

            </div>

            {/* bag and profile */}
            <div  className="bag-profile">
                <ul className = "bag-profile-desktop">
                    <li>
                        <Link>
                        <FaShoppingBag  color="red"/></Link>
                    </li>
                    <li>
                        <Link>
                        <FaUser   color="red"/></Link>
                    </li>
                </ul>
                
               
                
            </div>

           </nav>

           {/* //bottom navbar */}
           <nav className="bottom-nav">
           <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="/makeup">MAKE UP</Link>
            </li>
            <li>
            <Link to="/haircare">HAIR CARE</Link>
            </li>

            <li>
            <Link to="/skincare">SKINCARE</Link>
            </li>
            <li>
            <Link to="/Sanitizing">SANITIZING CARE</Link>
            </li>
            <li>
            <Link to="/collection">COLLECTION</Link>
            </li>
            <li>
            <Link to="/reward">REWARD</Link>
            </li>

          </ul>
          {/* <Menubar/> */}
           </nav>

      
                
          

        </div>
        </Box>
        

    )
}

export default Navbar


                //
                // <Link to="/makeup">MAKEUP</Link>
                // <Link to="/haircare">HAIR CARE</Link>
                // <Link to="/skincare">SKINCARE</Link>
                // <Link to="/Sanitizing">SANITIZING CARE</Link>
                // <Link to="/collection">COLLECTION</Link>
                // <Link to="/reward">REWARD</Link>