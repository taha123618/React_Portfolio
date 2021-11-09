import React from 'react';
import "./Footer.css";
// import {HoverAnimation1 , HoverAnimation2} from "hover-animation";
import {BsFacebook , BsLinkedin ,BsGithub } from "react-icons/all";

const Footer = () => {
    return (
        <>
<footer  >
{/* <HoverAnimation1 Icon={BsLinkedin} padding="4vmax" IconSize="4vmax"  Color="#fff"  
BackgroundColor ="red" Direction="top"/> */}
{/* <p> CopyRight Resived By @ Taha Ahmed</p>  */}
<a href="https://www.facebook.com/tahaahmed.khan.902" className="p-4">
<BsFacebook/>
</a>
<a href="https://www.linkedin.com/in/taha-ahmed1999/" className="p-4">
<BsLinkedin />
</a>
<a href="https://github.com/taha123618" className="p-4">
<BsGithub/>
</a>

</footer>

        </>
    )
}

export default Footer;



